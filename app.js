(function () {
  "use strict";

  const lessonListEl = document.getElementById("lessonList");
  const lessonContentEl = document.getElementById("lessonContent");
  const searchInputEl = document.getElementById("searchInput");
  const sidebarEl = document.getElementById("sidebar");
  const sidebarToggleEl = document.getElementById("sidebarToggle");
  const sidebarBackdropEl = document.getElementById("sidebarBackdrop");

  const lessonHeaderEl = document.getElementById("lessonHeader");
  const breadcrumbsEl = document.getElementById("breadcrumbs");
  const lessonTitleEl = document.getElementById("lessonTitle");
  const lessonMetaInlineEl = document.getElementById("lessonMetaInline");

  const lessonFooterEl = document.getElementById("lessonFooter");
  const prevLessonBtn = document.getElementById("prevLessonBtn");
  const nextLessonBtn = document.getElementById("nextLessonBtn");
  const prevLessonTitleEl = document.getElementById("prevLessonTitle");
  const nextLessonTitleEl = document.getElementById("nextLessonTitle");

  /** @type {{ file: string, title: string, content: string, number: number, readingMinutes: number }[]} */
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
    sidebarToggleEl.addEventListener("click", toggleSidebar);
    sidebarBackdropEl.addEventListener("click", closeSidebar);
    prevLessonBtn.addEventListener("click", () => navigateRelative(-1));
    nextLessonBtn.addEventListener("click", () => navigateRelative(1));

    document.addEventListener("keydown", (e) => {
      const isSearchShortcut = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isSearchShortcut) {
        e.preventDefault();
        searchInputEl.focus();
        searchInputEl.select();
      }
      if (e.key === "Escape" && document.activeElement === searchInputEl) {
        searchInputEl.value = "";
        onSearch();
        searchInputEl.blur();
      }
    });
  }

  function toggleSidebar() {
    const isOpen = sidebarEl.classList.toggle("open");
    sidebarBackdropEl.classList.toggle("visible", isOpen);
    sidebarToggleEl.setAttribute("aria-expanded", String(isOpen));
  }

  function closeSidebar() {
    sidebarEl.classList.remove("open");
    sidebarBackdropEl.classList.remove("visible");
    sidebarToggleEl.setAttribute("aria-expanded", "false");
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
          number: extractLessonNumber(file, results.length + 1),
          readingMinutes: estimateReadingMinutes(content),
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

  function extractLessonNumber(fileName, fallback) {
    const match = fileName.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : fallback;
  }

  function estimateReadingMinutes(markdown) {
    const words = markdown.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
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

      const index = document.createElement("span");
      index.className = "lesson-item__index";
      index.textContent = String(lesson.number).padStart(2, "0");

      const body = document.createElement("div");
      body.className = "lesson-item__body";

      const title = document.createElement("div");
      title.className = "lesson-item__title";
      title.textContent = lesson.title;

      const meta = document.createElement("div");
      meta.className = "lesson-item__meta";
      meta.innerHTML =
        '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.2" stroke="currentColor" stroke-width="1.4"/><path d="M10 6v4l2.6 2.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>' +
        "<span>" + lesson.readingMinutes + " min čitanja</span>";

      body.appendChild(title);
      body.appendChild(meta);

      li.appendChild(index);
      li.appendChild(body);

      li.addEventListener("click", () => {
        selectLesson(lesson.file);
        if (window.innerWidth <= 860) {
          closeSidebar();
        }
      });

      lessonListEl.appendChild(li);
    }
  }

  function selectLesson(file) {
    const idx = lessons.findIndex((l) => l.file === file);
    if (idx === -1) return;
    const lesson = lessons[idx];

    activeFile = file;
    document.querySelectorAll(".lesson-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.file === file);
    });

    renderHeader(lesson);
    renderFooter(idx);

    lessonContentEl.innerHTML = marked.parse(lesson.content);
    removeDuplicateLeadingTitle(lessonContentEl);
    enhanceCodeBlocks(lessonContentEl);
    enhanceCallouts(lessonContentEl);

    replayFadeIn(lessonHeaderEl);
    replayFadeIn(lessonContentEl);
    replayFadeIn(lessonFooterEl);

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  /** Ponovo pokrece CSS "fadeInUp" animaciju na elementu (npr. pri promeni lekcije). */
  function replayFadeIn(el) {
    el.classList.remove("fade-in");
    // force reflow kako bi se animacija ponovo pokrenula
    void el.offsetWidth;
    el.classList.add("fade-in");
  }

  function renderHeader(lesson) {
    lessonHeaderEl.hidden = false;

    breadcrumbsEl.innerHTML =
      '<span>Java Kurs</span>' +
      '<span class="crumb-sep">›</span>' +
      '<span class="crumb-current">Lekcija ' + lesson.number + "</span>";

    lessonTitleEl.textContent = lesson.title;
    lessonMetaInlineEl.textContent =
      "Lekcija " + lesson.number + " od " + lessons.length + " · " + lesson.readingMinutes + " min čitanja";
  }

  function renderFooter(idx) {
    const prev = lessons[idx - 1] || null;
    const next = lessons[idx + 1] || null;

    lessonFooterEl.hidden = lessons.length <= 1;

    prevLessonBtn.disabled = !prev;
    prevLessonTitleEl.textContent = prev ? prev.title : "Nema prethodne";

    nextLessonBtn.disabled = !next;
    nextLessonTitleEl.textContent = next ? next.title : "Nema sledeće";
  }

  function navigateRelative(delta) {
    const idx = lessons.findIndex((l) => l.file === activeFile);
    if (idx === -1) return;
    const target = lessons[idx + delta];
    if (target) {
      selectLesson(target.file);
    }
  }

  /**
   * Naslov lekcije se sada prikazuje u zaglavlju (lessonTitleEl), pa se prvi H1
   * iz markdown sadrzaja uklanja iz renderovanog HTML-a da se ne bi dupliralo.
   */
  function removeDuplicateLeadingTitle(container) {
    const firstHeading = container.querySelector("h1");
    if (firstHeading) {
      firstHeading.remove();
    }
  }

  function enhanceCodeBlocks(container) {
    const preBlocks = container.querySelectorAll("pre");

    preBlocks.forEach((pre) => {
      const codeEl = pre.querySelector("code");
      if (!codeEl) return;

      const hasLanguageClass = Array.from(codeEl.classList).some((c) => c.startsWith("language-"));
      if (!hasLanguageClass) {
        codeEl.classList.add("language-plaintext");
      }

      if (window.hljs) {
        hljs.highlightElement(codeEl);
      }

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);

      const header = document.createElement("div");
      header.className = "code-block-header";

      const dots = document.createElement("div");
      dots.className = "code-block-dots";
      dots.innerHTML = "<span></span><span></span><span></span>";

      const langLabel = document.createElement("span");
      langLabel.className = "code-block-lang";
      langLabel.textContent = getCodeLanguageLabel(codeEl);

      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.type = "button";
      copyBtn.innerHTML =
        '<svg viewBox="0 0 20 20" fill="none"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke="currentColor" stroke-width="1.5"/></svg><span>Copy</span>';
      copyBtn.addEventListener("click", () => copyCode(codeEl, copyBtn));

      header.appendChild(dots);
      header.appendChild(langLabel);
      header.appendChild(copyBtn);

      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }

  function getCodeLanguageLabel(codeEl) {
    const match = Array.from(codeEl.classList).find((c) => c.startsWith("language-"));
    const lang = match ? match.replace("language-", "") : "";
    if (!lang || lang === "plaintext") {
      return "Terminal";
    }
    return lang.charAt(0).toUpperCase() + lang.slice(1);
  }

  /**
   * Markdown blockquote-ovi se stilski pretvaraju u "callout" boksove (Info / Savet / Upozorenje)
   * na osnovu kljucnih reci u tekstu, uz odgovarajucu ikonicu.
   */
  function enhanceCallouts(container) {
    const quotes = container.querySelectorAll("blockquote");

    quotes.forEach((bq) => {
      const text = bq.textContent.toLowerCase();
      let type = "info";
      let icon = "ℹ️";

      if (/savet|preporuk/.test(text)) {
        type = "tip";
        icon = "💡";
      } else if (/upozorenje|pažnja|paznja|oprez|greška|greska/.test(text)) {
        type = "warning";
        icon = "⚠️";
      }

      bq.classList.add("callout", "callout--" + type);

      const iconEl = document.createElement("span");
      iconEl.className = "callout-icon";
      iconEl.textContent = icon;
      bq.insertBefore(iconEl, bq.firstChild);
    });
  }

  function copyCode(codeEl, btn) {
    const text = codeEl.textContent;
    const originalHTML = btn.innerHTML;

    const onSuccess = () => {
      btn.innerHTML =
        '<svg viewBox="0 0 20 20" fill="none"><path d="M5 10.5l3 3 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Copied!</span>';
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = originalHTML;
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
