// Español App – dziennik postępów w Arkuszu Google.
// Wklej ten plik w Rozszerzenia → Apps Script arkusza. Instrukcja: INSTRUKCJA.md.

// Dostęp tylko do tego jednego arkusza, nie do wszystkich arkuszy na koncie:
/** @OnlyCurrentDoc */

const LOG_SHEET = 'Dziennik';
const SUMMARY_SHEET = 'Podsumowanie';
const HEADERS = ['Data', 'Imię', 'Krok ID', 'Krok', 'Rodzaj', 'Wynik %', 'Zaliczony', 'Błędy', 'Czas (s)'];

/** Uruchom raz ręcznie: tworzy zakładki, nagłówki i podsumowanie. */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const log = ss.getSheetByName(LOG_SHEET) || ss.insertSheet(LOG_SHEET);
  log.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  log.setFrozenRows(1);
  log.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm');

  const summary = ss.getSheetByName(SUMMARY_SHEET) || ss.insertSheet(SUMMARY_SHEET);
  summary.clear();
  summary.getRange('A1').setValue('Sprawdziany – najlepszy wynik na krok').setFontWeight('bold');
  // setFormula always takes English syntax (commas), whatever the sheet locale.
  summary.getRange('A2').setFormula(
    "=IFERROR(QUERY(Dziennik!A:I, \"select B, D, max(F), count(F), max(A) where E = 'sprawdzian' group by B, D " +
    "label B 'Imię', D 'Krok', max(F) 'Najlepszy %', count(F) 'Podejścia', max(A) 'Ostatnio'\", 1), \"Brak sprawdzianów\")");
  summary.getRange('E:E').setNumberFormat('yyyy-mm-dd hh:mm'); // QUERY zwraca datę jako liczbę
  summary.getRange('H1').setValue('Ostatnia nauka').setFontWeight('bold');
  summary.getRange('H2').setFormula('=IFERROR(MAX(Dziennik!A2:A), "-")');
  summary.getRange('H2').setNumberFormat('yyyy-mm-dd hh:mm');
  summary.getRange('H4').setValue('Dni nauki (ostatnie 7)').setFontWeight('bold');
  summary.getRange('H5').setFormula('=IFERROR(COUNTUNIQUE(FILTER(INT(Dziennik!A2:A), Dziennik!A2:A >= TODAY() - 6)), 0)');
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.action === 'pull') return json({ steps: progressOf(data.name) });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LOG_SHEET).appendRow([
      new Date(data.date),
      String(data.name || ''),
      String(data.stepId || ''),
      String(data.step || ''),
      String(data.mode || ''),
      Number(data.percent) || 0,
      Boolean(data.passed),
      String(data.mistakes || ''),
      Number(data.seconds) || 0,
    ]);
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

/** Najlepsze wyniki sprawdzianów danej osoby: { [krokId]: { best, passed } }. */
function progressOf(name) {
  const who = String(name || '').trim().toLowerCase();
  const rows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LOG_SHEET).getDataRange().getValues().slice(1);
  const steps = {};
  rows.forEach((r) => {
    if (String(r[1]).trim().toLowerCase() !== who || r[4] !== 'sprawdzian') return;
    const id = r[2];
    const prev = steps[id] || { best: 0, passed: false };
    steps[id] = { best: Math.max(prev.best, Number(r[5]) || 0), passed: prev.passed || r[6] === true };
  });
  return steps;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
