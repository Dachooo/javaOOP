// Generise materijali/manifest.json i materijali/lessons-data.js na osnovu svih .md fajlova u materijali/.
// Pokretati ovaj skript (node generate-lessons-data.js) svaki put kada se doda ili izmeni lekcija,
// kako bi index.html radio i kada se otvori direktno dvoklikom (file://), bez lokalnog servera.
const fs = require('fs');
const path = require('path');

// Numericko sortiranje (Lekcija2 pre Lekcija10) umesto podrazumevanog leksikografskog
// (koje bi Lekcija10 stavilo odmah posle Lekcija1).
function lessonSortKey(fileName) {
  const match = fileName.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

const materijaliDir = path.join(__dirname, 'materijali');
const files = fs.readdirSync(materijaliDir)
  .filter(f => f.toLowerCase().endsWith('.md'))
  .sort((a, b) => lessonSortKey(a) - lessonSortKey(b));

const embedded = {};
for (const file of files) {
  embedded[file] = fs.readFileSync(path.join(materijaliDir, file), 'utf8');
}

fs.writeFileSync(
  path.join(materijaliDir, 'manifest.json'),
  JSON.stringify(files, null, 2),
  'utf8'
);

const jsContent = 'window.EMBEDDED_LESSONS = ' + JSON.stringify(embedded, null, 2) + ';\n';
fs.writeFileSync(path.join(materijaliDir, 'lessons-data.js'), jsContent, 'utf8');

console.log(`Generisano: ${files.length} lekcija -> manifest.json i lessons-data.js`);
console.log(files);
