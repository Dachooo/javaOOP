(function () {
  "use strict";

  const lessonListEl = document.getElementById("lessonList");
  const lessonContentEl = document.getElementById("lessonContent");
  const searchInputEl = document.getElementById("searchInput");
  const sidebarEl = document.getElementById("sidebar");
  const sidebarToggleEl = document.getElementById("sidebarToggle");

  /** @type {{ file: string, title: string, content: string }[]} */
  let lessons = [];
  let activeFile = null;

  marked.setOptions({
    breaks: false,
    gfm: true,
  });

  init();

  async function init() {
    lessons = await loadLessons();
    renderLessonList(lessons);

    if (lessons.length > 0) {
      selectLesson(lessons[0].file);
    } else {
      lessonListEl.innerHTML =
        '<li class="lesson-list__empty">Nema pronađenih lekcija u folderu materijali/.</li>';
    }

    searchInputEl.addEventListener("input", onSearch);
    sidebarToggleEl.addEventListener("click", () => sidebarEl.classList.toggle("open"));
  }

  /**
   * Ucitava sve .md lekcije iz materijali/. Prvo pokusava preko fetch() (radi kad se
   * stranica servira preko http/https servera), a ako to ne uspe - najcesce zato sto je
   * fajl otvoren direktno dvoklikom (file://), gde browseri blokiraju fetch lokalnih fajlova -
   * koristi se materijali/lessons-data.js, koji sadrzi isti sadrzaj ugradjen unapred
   * (generise ga generate-lessons-data.js).
   */
  async function loadLessons() {
    const embedded = window.EMBEDDED_LESSONS || {};
    let fileNames = null;

    try {
      const manifestRes = await fetch("materijali/manifest.json");
      if (manifestRes.ok) {
        fileNames = await manifestRes.json();
      }
    } catch (e) {
      // fetch nije dostupan (npr. file:// protokol) - koristicemo listu iz embedded podataka.
    }

    if (!fileNames) {
      fileNames = Object.keys(embedded).sort(lessonFileCompare);
    }

    const results = [];
    for (const file of fileNames) {
      let content = null;
      try {
        const res = await fetch("materijali/" + file);
        if (res.ok) {
          content = await res.text();
        }
      } catch (e) {
        // ignorisemo - pada na embedded fallback ispod
      }

      if (content === null) {
        content = embedded[file] || null;
      }

      if (content !== null) {
        results.push({
          file,
          title: extractTitle(content, file),
          content,
        });
      }
    }

    return results;
  }

  /**
   * Numericko poredjenje imena fajlova lekcija (Lekcija2.md pre Lekcija10.md), umesto
   * podrazumevanog leksikografskog poretka koji bi Lekcija10 stavio odmah posle Lekcija1.
   */
  function lessonFileCompare(a, b) {
    const numA = parseInt((a.match(/(\d+)/) || [])[1], 10);
    const numB = parseInt((b.match(/(\d+)/) || [])[1], 10);
    if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
      return numA - numB;
    }
    return a.localeCompare(b);
  }

  function extractTitle(markdown, fallbackName) {
    const match = markdown.match(/^#\s+(.+)$/m);
    if (match) {
      return match[1].trim();
    }
    return fallbackName.replace(/\.md$/i, "");
  }

  function extractSubtitle(markdown) {
    const match = markdown.match(/^##\s+(.+)$/m);
    return match ? match[1].trim() : "";
  }

  function renderLessonList(list) {
    lessonListEl.innerHTML = "";

    if (list.length === 0) {
      lessonListEl.innerHTML =
        '<li class="lesson-list__empty">Nema rezultata pretrage.</li>';
      return;
    }

    for (const lesson of list) {
      const li = document.createElement("li");
      li.className = "lesson-item" + (lesson.file === activeFile ? " active" : "");
      li.dataset.file = lesson.file;

      const title = document.createElement("div");
      title.className = "lesson-item__title";
      title.textContent = lesson.title;

      const meta = document.createElement("div");
      meta.className = "lesson-item__meta";
      meta.textContent = extractSubtitle(lesson.content) || lesson.file;

      li.appendChild(title);
      li.appendChild(meta);
      li.addEventListener("click", () => {
        selectLesson(lesson.file);
        if (window.innerWidth <= 860) {
          sidebarEl.classList.remove("open");
        }
      });

      lessonListEl.appendChild(li);
    }
  }

  function selectLesson(file) {
    const lesson = lessons.find((l) => l.file === file);
    if (!lesson) return;

    activeFile = file;
    document.querySelectorAll(".lesson-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.file === file);
    });

    lessonContentEl.innerHTML = marked.parse(lesson.content);
    enhanceCodeBlocks(lessonContentEl);
    lessonContentEl.scrollIntoView({ behavior: "instant", block: "start" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function enhanceCodeBlocks(container) {
    const preBlocks = container.querySelectorAll("pre");

    preBlocks.forEach((pre) => {
      const codeEl = pre.querySelector("code");
      if (!codeEl) return;

      if (window.hljs) {
        hljs.highlightElement(codeEl);
      }

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.type = "button";
      copyBtn.textContent = "Copy Code";
      copyBtn.addEventListener("click", () => copyCode(codeEl, copyBtn));

      wrapper.appendChild(copyBtn);
    });
  }

  function copyCode(codeEl, btn) {
    const text = codeEl.textContent;

    const onSuccess = () => {
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      onSuccess();
    } catch (e) {
      // tiho ignorisemo ako ni ovo ne uspe
    }
    document.body.removeChild(textarea);
  }

  function onSearch() {
    const query = searchInputEl.value.trim().toLowerCase();

    if (!query) {
      renderLessonList(lessons);
      return;
    }

    const filtered = lessons.filter((lesson) => {
      return (
        lesson.title.toLowerCase().includes(query) ||
        lesson.content.toLowerCase().includes(query)
      );
    });

    renderLessonList(filtered);
  }
})();
