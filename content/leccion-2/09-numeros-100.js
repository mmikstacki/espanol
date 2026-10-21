export default {
  id: 'numeros-100',
  kind: 'fundament',
  title: 'Liczby 0–100',
  subtitle: 'uno, dos, tres…',
  vocab: [
    { es: 'cero', pl: '0', emoji: '0️⃣', group: '0–10' },
    { es: 'uno', pl: '1', emoji: '1️⃣', group: '0–10' },
    { es: 'dos', pl: '2', emoji: '2️⃣', group: '0–10' },
    { es: 'tres', pl: '3', emoji: '3️⃣', group: '0–10' },
    { es: 'cuatro', pl: '4', emoji: '4️⃣', group: '0–10' },
    { es: 'cinco', pl: '5', emoji: '5️⃣', group: '0–10' },
    { es: 'seis', pl: '6', emoji: '6️⃣', group: '0–10' },
    { es: 'siete', pl: '7', emoji: '7️⃣', group: '0–10' },
    { es: 'ocho', pl: '8', emoji: '8️⃣', group: '0–10' },
    { es: 'nueve', pl: '9', emoji: '9️⃣', group: '0–10' },
    { es: 'diez', pl: '10', emoji: '🔟', group: '0–10' },
    { es: 'once', pl: '11', emoji: '1️⃣1️⃣', group: '11–20' },
    { es: 'doce', pl: '12', emoji: '1️⃣2️⃣', group: '11–20' },
    { es: 'trece', pl: '13', emoji: '1️⃣3️⃣', group: '11–20' },
    { es: 'catorce', pl: '14', emoji: '1️⃣4️⃣', group: '11–20' },
    { es: 'quince', pl: '15', emoji: '1️⃣5️⃣', group: '11–20' },
    { es: 'dieciséis', pl: '16', emoji: '1️⃣6️⃣', group: '11–20' },
    { es: 'diecisiete', pl: '17', emoji: '1️⃣7️⃣', group: '11–20' },
    { es: 'dieciocho', pl: '18', emoji: '1️⃣8️⃣', group: '11–20' },
    { es: 'diecinueve', pl: '19', emoji: '1️⃣9️⃣', group: '11–20' },
    { es: 'veinte', pl: '20', emoji: '2️⃣0️⃣', group: '11–20' },
    { es: 'treinta', pl: '30', emoji: '3️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'cuarenta', pl: '40', emoji: '4️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'cincuenta', pl: '50', emoji: '5️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'sesenta', pl: '60', emoji: '6️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'setenta', pl: '70', emoji: '7️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'ochenta', pl: '80', emoji: '8️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'noventa', pl: '90', emoji: '9️⃣0️⃣', group: 'Dziesiątki' },
    { es: 'cien', pl: '100', emoji: '💯', group: 'Dziesiątki' },
  ],
  theory: [
    {
      id: 't1',
      title: '0–15: do zapamiętania',
      html: `
        <table class="grid">
          <tr><td>0 cero</td><td>4 cuatro</td><td>8 ocho</td><td>12 doce</td></tr>
          <tr><td>1 uno</td><td>5 cinco</td><td>9 nueve</td><td>13 trece</td></tr>
          <tr><td>2 dos</td><td>6 seis</td><td>10 diez</td><td>14 catorce</td></tr>
          <tr><td>3 tres</td><td>7 siete</td><td>11 once</td><td>15 quince</td></tr>
        </table>
        <p>💡 Przed rzeczownikiem <b>uno</b> skraca się do <b>un</b> (rodzaj męski) albo zmienia w <b>una</b> (żeński): <i>un euro, una falda</i>.</p>`,
      examples: [
        { es: 'Tengo quince años.', pl: 'Mam piętnaście lat.' },
        { es: 'Son doce euros.', pl: 'To kosztuje dwanaście euro.' },
      ],
    },
    {
      id: 't2',
      title: '16–29: jedno słowo',
      html: `
        <p>Od 16 do 29 liczby piszemy <b>razem</b>, jak klocki:</p>
        <ul>
          <li><b>dieci</b> + seis = dieciséis (16), diecisiete (17), dieciocho (18), diecinueve (19)</li>
          <li><b>veinti</b> + uno = veintiuno (21), veintidós (22), veintitrés (23), veinticinco (25)…</li>
        </ul>
        <p>⚠️ Akcent mają: diecis<b>é</b>is, veintid<b>ó</b>s, veintitr<b>é</b>s, veintis<b>é</b>is.</p>`,
      examples: [
        { es: 'dieciséis', pl: '16' },
        { es: 'veintidós', pl: '22' },
        { es: 'veinticinco', pl: '25' },
      ],
    },
    {
      id: 't3',
      title: '30–100: dziesiątka + y + jedność',
      html: `
        <p>Od 31 do 99 – trzy słowa: dziesiątka, <b>y</b> (i), jedność:</p>
        <p class="formula">treinta <b>y</b> uno = 31</p>
        <table class="grid">
          <tr><td>30 treinta</td><td>60 sesenta</td><td>90 noventa</td></tr>
          <tr><td>40 cuarenta</td><td>70 setenta</td><td>100 <b>cien</b></td></tr>
          <tr><td>50 cincuenta</td><td>80 ochenta</td><td></td></tr>
        </table>
        <p>Np. 45 = cuarenta y cinco, 78 = setenta y ocho, 99 = noventa y nueve.</p>
        <p>⚠️ Nie myl: <b>sesenta</b> (60) i <b>setenta</b> (70).</p>`,
      examples: [
        { es: 'treinta y uno', pl: '31' },
        { es: 'cuarenta y cinco', pl: '45' },
        { es: 'setenta y ocho', pl: '78' },
      ],
    },
  ],
  exercises: [
    { type: 'listen', say: 'siete', options: ['7', '6', '10', '17'], answer: '7', explain: 'siete = 7.', theory: 't1' },
    { type: 'listen', say: 'doce', options: ['12', '2', '20', '10'], answer: '12', explain: 'doce = 12, dos = 2.', theory: 't1' },
    { type: 'listen', say: 'quince', options: ['15', '50', '5', '14'], answer: '15', explain: 'quince = 15, cincuenta = 50.', theory: 't1' },
    { type: 'pairs', pairs: [['uno', '1'], ['cuatro', '4'], ['nueve', '9'], ['once', '11'], ['catorce', '14']], explain: 'Liczby 0–15 trzeba zapamiętać.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest 13?', options: ['trece', 'tres', 'treinta', 'treinta y tres'], answer: 'trece', esOptions: true, explain: '13 = trece; 3 = tres; 30 = treinta.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 8', answer: ['ocho'], explain: '8 = ocho.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 16', answer: ['dieciséis'], explain: 'dieci + seis = dieciséis (z akcentem).', theory: 't2' },
    { type: 'type', prompt: 'Napisz słownie: 22', answer: ['veintidós'], explain: 'veinti + dós = veintidós.', theory: 't2' },
    { type: 'listen', say: 'veinticinco', options: ['25', '20', '35', '52'], answer: '25', explain: 'veinti + cinco = 25.', theory: 't2' },
    { type: 'choice', prompt: 'Jak jest 60?', options: ['sesenta', 'setenta', 'seis', 'dieciséis'], answer: 'sesenta', esOptions: true, explain: '60 = sesenta, 70 = setenta.', theory: 't3' },
    { type: 'pairs', pairs: [['treinta', '30'], ['cuarenta', '40'], ['cincuenta', '50'], ['setenta', '70'], ['noventa', '90']], explain: 'Dziesiątki.', theory: 't3' },
    { type: 'gap', sentence: '45 = cuarenta ___ cinco', say: 'cuarenta y cinco', options: ['y', 'e', 'con'], answer: ['y'], explain: 'Od 31 wzwyż: dziesiątka + y + jedność.', theory: 't3' },
    { type: 'type', prompt: 'Napisz słownie: 38', answer: ['treinta y ocho'], explain: 'treinta + y + ocho.', theory: 't3' },
    { type: 'type', prompt: 'Napisz słownie: 100', answer: ['cien'], explain: '100 = cien.', theory: 't3' },
    { type: 'listen', say: 'setenta y ocho', options: ['78', '68', '87', '18'], answer: '78', explain: 'setenta (70) y ocho (8).', theory: 't3' },
    { type: 'order', prompt: 'Ułóż słownie: 91', answer: 'noventa y uno', extra: ['nueve'], explain: 'noventa + y + uno.', theory: 't3' },
    { type: 'gap', sentence: 'Tengo ___ años.', hint: '(14)', answer: ['catorce'], explain: '14 = catorce. „Tengo … años” = Mam … lat.', theory: 't1' },
  ],
  test: [
    { type: 'listen', say: 'nueve', options: ['9', '19', '90', '6'], answer: '9', explain: 'nueve = 9.', theory: 't1' },
    { type: 'listen', say: 'once', options: ['11', '1', '10', '12'], answer: '11', explain: 'once = 11.', theory: 't1' },
    { type: 'listen', say: 'cincuenta', options: ['50', '15', '5', '55'], answer: '50', explain: 'cincuenta = 50.', theory: 't3' },
    { type: 'choice', prompt: 'Jak jest 70?', options: ['setenta', 'sesenta', 'siete', 'diecisiete'], answer: 'setenta', esOptions: true, explain: '70 = setenta.', theory: 't3' },
    { type: 'type', prompt: 'Napisz słownie: 5', answer: ['cinco'], explain: '5 = cinco.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 17', answer: ['diecisiete'], explain: 'dieci + siete.', theory: 't2' },
    { type: 'type', prompt: 'Napisz słownie: 23', answer: ['veintitrés'], explain: 'veinti + trés (z akcentem).', theory: 't2' },
    { type: 'type', prompt: 'Napisz słownie: 46', answer: ['cuarenta y seis'], explain: 'cuarenta + y + seis.', theory: 't3' },
    { type: 'pairs', pairs: [['seis', '6'], ['diez', '10'], ['veinte', '20'], ['ochenta', '80']], explain: 'Powtórz liczby.', theory: 't3' },
    { type: 'gap', sentence: '64 = sesenta ___ cuatro', say: 'sesenta y cuatro', options: ['y', 'e', 'con'], answer: ['y'], explain: 'Dziesiątka + y + jedność.', theory: 't3' },
    { type: 'listen', say: 'treinta y dos', options: ['32', '23', '42', '12'], answer: '32', explain: 'treinta (30) y dos (2).', theory: 't3' },
    { type: 'order', prompt: 'Ułóż słownie: 57', answer: 'cincuenta y siete', extra: ['setenta'], explain: 'cincuenta + y + siete.', theory: 't3' },
  ],
};
