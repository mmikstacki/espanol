export default {
  id: 'przymiotnik',
  kind: 'fundament',
  title: 'Przymiotnik pasuje do rzeczownika',
  subtitle: 'falda roja, zapatos rojos',
  vocab: [
    { es: 'rojo', pl: 'czerwony', emoji: '🔴', group: 'Kolory' },
    { es: 'azul', pl: 'niebieski', emoji: '🔵', group: 'Kolory' },
    { es: 'verde', pl: 'zielony', emoji: '🟢', group: 'Kolory' },
    { es: 'amarillo', pl: 'żółty', emoji: '🟡', group: 'Kolory' },
    { es: 'negro', pl: 'czarny', emoji: '⚫', group: 'Kolory' },
    { es: 'blanco', pl: 'biały', emoji: '⚪', group: 'Kolory' },
    { es: 'gris', pl: 'szary', emoji: '🩶', group: 'Kolory' },
    { es: 'marrón', pl: 'brązowy', emoji: '🟤', group: 'Kolory' },
    { es: 'rosa', pl: 'różowy', emoji: '🩷', group: 'Kolory' },
    { es: 'naranja', pl: 'pomarańczowy', emoji: '🟠', group: 'Kolory' },
    { es: 'violeta', pl: 'fioletowy', emoji: '🟣', group: 'Kolory' },
    { es: 'beis', pl: 'beżowy', emoji: '🤎', group: 'Kolory' },
    { es: 'bonito', pl: 'ładny', emoji: '😍', group: 'Przymiotniki' },
    { es: 'feo', pl: 'brzydki', emoji: '😖', group: 'Przymiotniki' },
    { es: 'grande', pl: 'duży', emoji: '🐘', group: 'Przymiotniki' },
    { es: 'pequeño', pl: 'mały', emoji: '🐭', group: 'Przymiotniki' },
    { es: 'largo', pl: 'długi', emoji: '📏', group: 'Przymiotniki' },
    { es: 'corto', pl: 'krótki', emoji: '✂️', group: 'Przymiotniki' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Przymiotnik stoi PO rzeczowniku',
      html: `
        <p>Po polsku mówimy „czerwona spódnica”. Po hiszpańsku jest odwrotnie – najpierw rzecz, potem jej cecha:</p>
        <p class="formula">una falda <b>roja</b> = czerwona spódnica</p>
        <ul>
          <li>un jersey <b>verde</b> – zielony sweter</li>
          <li>unos zapatos <b>negros</b> – czarne buty</li>
        </ul>
        <p>💡 Myśl o tym jak o „spódnica – jaka? – czerwona”.</p>`,
      examples: [
        { es: 'una falda roja', pl: 'czerwona spódnica' },
        { es: 'un jersey verde', pl: 'zielony sweter' },
        { es: 'Llevo unos zapatos negros.', pl: 'Mam na sobie czarne buty.' },
      ],
    },
    {
      id: 't2',
      title: 'Przymiotniki na -o mają 4 formy',
      html: `
        <p>Przymiotnik „przebiera się” tak jak rzeczownik: zmienia <b>rodzaj</b> i <b>liczbę</b>.</p>
        <table class="grid">
          <tr><th></th><th>męski</th><th>żeński</th></tr>
          <tr><td>l. poj.</td><td>el abrigo roj<b>o</b></td><td>la falda roj<b>a</b></td></tr>
          <tr><td>l. mn.</td><td>los abrigos roj<b>os</b></td><td>las faldas roj<b>as</b></td></tr>
        </table>
        <p>Tak samo: negro / negra / negros / negras, blanco, amarillo, bonito, feo, pequeño, largo, corto.</p>
        <p>⚠️ Patrz na <b>rzeczownik</b>, nie na znaczenie po polsku: <i>el vestido</i> jest męski, więc <i>un vestido blanc<b>o</b></i>.</p>`,
      examples: [
        { es: 'un vestido blanco', pl: 'biała sukienka' },
        { es: 'una camisa blanca', pl: 'biała koszula' },
        { es: 'unas botas negras', pl: 'czarne kozaki' },
      ],
    },
    {
      id: 't3',
      title: 'Przymiotniki na -e i na spółgłoskę',
      html: `
        <p>Mają <b>jedną formę dla obu rodzajów</b>, zmienia się tylko liczba:</p>
        <table class="grid">
          <tr><th>l. poj.</th><th>l. mn.</th></tr>
          <tr><td>verde</td><td>verde<b>s</b></td></tr>
          <tr><td>grande</td><td>grande<b>s</b></td></tr>
          <tr><td>azul</td><td>azul<b>es</b></td></tr>
          <tr><td>gris</td><td>gris<b>es</b></td></tr>
          <tr><td>marrón</td><td>marron<b>es</b></td></tr>
        </table>
        <p><i>un jersey verde, una falda verde, unos zapatos verdes</i></p>
        <p>💡 Kolory <b>rosa, naranja, violeta, beis</b> zwykle się <b>nie zmieniają</b>: <i>una camiseta naranja, un jersey rosa</i>.</p>`,
      examples: [
        { es: 'una falda verde', pl: 'zielona spódnica' },
        { es: 'unos pantalones azules', pl: 'niebieskie spodnie' },
        { es: 'una camiseta naranja', pl: 'pomarańczowa koszulka' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „amarillo”?', say: 'amarillo', options: ['żółty', 'niebieski', 'czerwony', 'zielony'], answer: 'żółty', explain: 'amarillo = żółty 🟡.', theory: 't2' },
    { type: 'listen', say: 'verde', options: ['🟢', '🔵', '🔴', '🟡'], answer: '🟢', explain: 'verde = zielony.', theory: 't3' },
    { type: 'listen', say: 'negro', options: ['⚫', '⚪', '🟤', '🩶'], answer: '⚫', explain: 'negro = czarny, blanco = biały.', theory: 't2' },
    { type: 'pairs', pairs: [['rojo', 'czerwony'], ['azul', 'niebieski'], ['blanco', 'biały'], ['gris', 'szary'], ['marrón', 'brązowy']], explain: 'Powtórz kolory z fiszek.', theory: 't2' },
    { type: 'choice', prompt: 'Jak powiesz „czerwona spódnica”?', options: ['una falda roja', 'una roja falda', 'una falda rojo'], answer: 'una falda roja', esOptions: true, explain: 'Przymiotnik po rzeczowniku i w rodzaju żeńskim: falda roja.', theory: 't1' },
    { type: 'gap', sentence: 'una camisa ___', options: ['blanca', 'blanco', 'blancos'], answer: ['blanca'], explain: 'camisa jest żeńska → blanca.', theory: 't2' },
    { type: 'gap', sentence: 'un vestido ___', options: ['negro', 'negra', 'negros'], answer: ['negro'], explain: 'vestido jest męski → negro (choć „sukienka” po polsku jest żeńska!).', theory: 't2' },
    { type: 'gap', sentence: 'unas botas ___', options: ['negras', 'negros', 'negra'], answer: ['negras'], explain: 'botas: żeński, l. mn. → negras.', theory: 't2' },
    { type: 'gap', sentence: 'unos zapatos ___', options: ['blancos', 'blancas', 'blanco'], answer: ['blancos'], explain: 'zapatos: męski, l. mn. → blancos.', theory: 't2' },
    { type: 'gap', sentence: 'unos pantalones ___', options: ['azules', 'azuls', 'azul'], answer: ['azules'], explain: 'azul kończy się spółgłoską → +es: azules.', theory: 't3' },
    { type: 'gap', sentence: 'una falda ___', options: ['verde', 'verda', 'verdes'], answer: ['verde'], explain: 'verde ma jedną formę dla obu rodzajów.', theory: 't3' },
    { type: 'gap', sentence: 'La chaqueta es ___.', hint: '(pequeño)', answer: ['pequeña'], explain: 'chaqueta jest żeńska → pequeña.', theory: 't2' },
    { type: 'gap', sentence: 'Los vaqueros son ___.', hint: '(largo)', answer: ['largos'], explain: 'vaqueros: męski, l. mn. → largos.', theory: 't2' },
    { type: 'gap', sentence: 'Las faldas son ___.', hint: '(corto)', answer: ['cortas'], explain: 'faldas: żeński, l. mn. → cortas.', theory: 't2' },
    { type: 'table', title: 'negro', prompt: 'Wpisz właściwą formę „negro”.', rows: [['un bolso …', 'negro'], ['una mochila …', 'negra'], ['unos zapatos …', 'negros'], ['unas gafas …', 'negras']], explain: '-o / -a / -os / -as zależnie od rzeczownika.', theory: 't2' },
    { type: 'sort', prompt: 'Ile form ma przymiotnik?', categories: ['4 formy (-o/-a)', 'tylko liczba'], items: [['rojo', '4 formy (-o/-a)'], ['bonito', '4 formy (-o/-a)'], ['verde', 'tylko liczba'], ['azul', 'tylko liczba'], ['blanco', '4 formy (-o/-a)'], ['grande', 'tylko liczba']], explain: 'Na -o: 4 formy. Na -e lub spółgłoskę: tylko l. poj./l. mn.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Mam na sobie białą koszulę.”', answer: 'Llevo una camisa blanca.', extra: ['blanco'], explain: 'camisa (ż.) + blanca, przymiotnik na końcu.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Ona ma na sobie zielone spodnie.”', answer: 'Ella lleva unos pantalones verdes.', extra: ['verde'], explain: 'pantalones (l. mn.) → verdes.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: czerwona koszulka', answer: ['una camiseta roja', 'la camiseta roja', 'camiseta roja'], explain: 'camiseta (ż.) → roja, po rzeczowniku.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: czarne buty', answer: ['unos zapatos negros', 'los zapatos negros', 'zapatos negros'], explain: 'zapatos (m. l. mn.) → negros.', theory: 't2' },
  ],
  test: [
    { type: 'listen', say: 'amarillo', options: ['🟡', '🟠', '🔴', '🟢'], answer: '🟡', explain: 'amarillo = żółty.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „gris”?', say: 'gris', options: ['szary', 'zielony', 'brązowy', 'biały'], answer: 'szary', explain: 'gris = szary.', theory: 't3' },
    { type: 'choice', prompt: 'Jak powiesz „biała sukienka”?', options: ['un vestido blanco', 'una vestido blanca', 'un blanco vestido'], answer: 'un vestido blanco', esOptions: true, explain: 'el vestido jest męski; przymiotnik po rzeczowniku.', theory: 't2' },
    { type: 'gap', sentence: 'una blusa ___', options: ['amarilla', 'amarillo', 'amarillas'], answer: ['amarilla'], explain: 'blusa (ż.) → amarilla.', theory: 't2' },
    { type: 'gap', sentence: 'unas sandalias ___', options: ['marrones', 'marrón', 'marrons'], answer: ['marrones'], explain: 'marrón + es → marrones (bez akcentu).', theory: 't3' },
    { type: 'gap', sentence: 'unos abrigos ___', options: ['grises', 'gris', 'grisos'], answer: ['grises'], explain: 'gris + es → grises.', theory: 't3' },
    { type: 'gap', sentence: 'El sombrero es ___.', hint: '(bonito)', answer: ['bonito'], explain: 'sombrero (m.) → bonito.', theory: 't2' },
    { type: 'gap', sentence: 'Las camisetas son ___.', hint: '(blanco)', answer: ['blancas'], explain: 'camisetas (ż. l. mn.) → blancas.', theory: 't2' },
    { type: 'gap', sentence: 'Los pantalones son ___.', hint: '(corto)', answer: ['cortos'], explain: 'pantalones (m. l. mn.) → cortos.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: zielona spódnica', answer: ['una falda verde', 'la falda verde', 'falda verde'], explain: 'verde nie zmienia się przez rodzaj.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Mam na sobie niebieskie kozaki.”', answer: 'Llevo unas botas azules.', extra: ['azul'], explain: 'botas (l. mn.) → azules.', theory: 't3' },
    { type: 'table', title: 'pequeño', prompt: 'Wpisz właściwą formę „pequeño”.', rows: [['un gorro …', 'pequeño'], ['una maleta …', 'pequeña'], ['unos bolsos …', 'pequeños'], ['unas mochilas …', 'pequeñas']], explain: '-o / -a / -os / -as.', theory: 't2' },
  ],
};
