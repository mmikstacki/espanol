export default {
  id: 'rodzaj',
  kind: 'fundament',
  title: 'Rodzaj i liczba',
  subtitle: 'el, la, los, las, un, una…',
  vocab: [
    { es: 'el', pl: 'rodzajnik męski, l. poj. („ten”)', emoji: '♂️', group: 'Rodzajniki określone' },
    { es: 'la', pl: 'rodzajnik żeński, l. poj. („ta”)', emoji: '♀️', group: 'Rodzajniki określone' },
    { es: 'los', pl: 'rodzajnik męski, l. mn. („ci, te”)', emoji: '♂️♂️', group: 'Rodzajniki określone' },
    { es: 'las', pl: 'rodzajnik żeński, l. mn. („te”)', emoji: '♀️♀️', group: 'Rodzajniki określone' },
    { es: 'un', pl: 'jakiś, jeden (m.)', emoji: '1️⃣', group: 'Rodzajniki nieokreślone' },
    { es: 'una', pl: 'jakaś, jedna (ż.)', emoji: '1️⃣', group: 'Rodzajniki nieokreślone' },
    { es: 'unos', pl: 'jakieś, kilka (m.)', emoji: '🔢', group: 'Rodzajniki nieokreślone' },
    { es: 'unas', pl: 'jakieś, kilka (ż.)', emoji: '🔢', group: 'Rodzajniki nieokreślone' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Rodzaj: męski i żeński',
      html: `
        <p>Każdy hiszpański rzeczownik ma rodzaj: <b>męski</b> albo <b>żeński</b> (nijakiego nie ma).</p>
        <ul>
          <li>na <b>-o</b> → zwykle męski: el vestid<b>o</b>, el abrig<b>o</b></li>
          <li>na <b>-a</b> → zwykle żeński: la fald<b>a</b>, la camis<b>a</b></li>
          <li>na <b>-e</b> lub spółgłoskę → trzeba zapamiętać: <b>el</b> traje, <b>el</b> cinturón, <b>la</b> ropa</li>
        </ul>
        <p>💡 Rodzaj po hiszpańsku i po polsku często się <b>różni</b>: <i>la camisa</i> (koszula – też ż.), ale <i>el vestido</i> (sukienka – po polsku ż.!).</p>
        <p>⭐ Dlatego ucz się słówek <b>zawsze z rodzajnikiem</b>: nie „falda”, tylko „<b>la</b> falda”.</p>`,
      examples: [
        { es: 'el vestido', pl: 'sukienka' },
        { es: 'la falda', pl: 'spódnica' },
        { es: 'el traje', pl: 'garnitur' },
      ],
    },
    {
      id: 't2',
      title: 'el / la czy un / una?',
      html: `
        <p>W polskim nie ma rodzajników, w hiszpańskim stoją prawie przed każdym rzeczownikiem.</p>
        <table class="grid">
          <tr><th></th><th>konkretny („ten”)</th><th>jakiś, nieznany</th></tr>
          <tr><td>męski l. poj.</td><td><b>el</b> bolso</td><td><b>un</b> bolso</td></tr>
          <tr><td>żeński l. poj.</td><td><b>la</b> falda</td><td><b>una</b> falda</td></tr>
          <tr><td>męski l. mn.</td><td><b>los</b> zapatos</td><td><b>unos</b> zapatos</td></tr>
          <tr><td>żeński l. mn.</td><td><b>las</b> botas</td><td><b>unas</b> botas</td></tr>
        </table>
        <p><b>el / la</b> – mówimy o konkretnej, znanej rzeczy: <i>La falda es bonita.</i> (Ta spódnica jest ładna.)</p>
        <p><b>un / una</b> – mówimy o czymś po raz pierwszy: <i>Llevo una falda.</i> (Mam na sobie spódnicę.)</p>
        <p>💡 Przy ubraniach „w parach” bardzo często jest <b>unos / unas</b>: <i>unos vaqueros</i> (jedne dżinsy), <i>unas botas</i> (para kozaków).</p>`,
      examples: [
        { es: 'Llevo una camiseta.', pl: 'Mam na sobie koszulkę.' },
        { es: 'La camiseta es roja.', pl: 'Ta koszulka jest czerwona.' },
        { es: 'Busco unas botas.', pl: 'Szukam (jakichś) kozaków.' },
      ],
    },
    {
      id: 't3',
      title: 'Liczba mnoga',
      html: `
        <ul>
          <li>kończy się na <b>samogłoskę</b> → dodaj <b>-s</b>: falda → falda<b>s</b>, zapato → zapato<b>s</b>, traje → traje<b>s</b></li>
          <li>kończy się na <b>spółgłoskę</b> → dodaj <b>-es</b>: color → color<b>es</b>, pantalón → pantalon<b>es</b></li>
        </ul>
        <p>💡 Rodzajnik też idzie do liczby mnogiej: <b>el</b> zapato → <b>los</b> zapatos, <b>la</b> falda → <b>las</b> faldas.</p>
        <p>⚠️ Słowa na <b>-ón</b> tracą akcent: el cinturón → los cinturon<b>es</b>.</p>`,
      examples: [
        { es: 'las faldas', pl: 'spódnice' },
        { es: 'los zapatos', pl: 'buty' },
        { es: 'los cinturones', pl: 'paski' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Jaki rodzaj ma „falda”?', say: 'falda', options: ['żeński', 'męski'], answer: 'żeński', explain: 'Końcówka -a → zwykle żeński: la falda.', theory: 't1' },
    { type: 'choice', prompt: 'Jaki rodzaj ma „vestido”?', say: 'vestido', options: ['męski', 'żeński'], answer: 'męski', explain: 'Końcówka -o → męski: el vestido (choć po polsku „sukienka” jest żeńska!).', theory: 't1' },
    { type: 'gap', sentence: '___ falda', options: ['el', 'la'], answer: ['la'], explain: 'falda → żeński → la.', theory: 't1' },
    { type: 'gap', sentence: '___ vestido', options: ['el', 'la'], answer: ['el'], explain: 'vestido → męski → el.', theory: 't1' },
    { type: 'gap', sentence: '___ zapatos', options: ['los', 'las', 'el'], answer: ['los'], explain: 'zapatos: męski, liczba mnoga → los.', theory: 't2' },
    { type: 'gap', sentence: '___ camisas', options: ['las', 'los', 'la'], answer: ['las'], explain: 'camisas: żeński, liczba mnoga → las.', theory: 't2' },
    { type: 'sort', prompt: 'el czy la?', categories: ['el', 'la'], items: [['vestido', 'el'], ['falda', 'la'], ['abrigo', 'el'], ['camisa', 'la'], ['sombrero', 'el'], ['chaqueta', 'la']], explain: '-o → el, -a → la.', theory: 't1' },
    { type: 'choice', prompt: 'Który rodzajnik znaczy „jakiś” (rodzaj męski, l. poj.)?', options: ['un', 'el', 'una'], answer: 'un', esOptions: true, explain: 'un = jakiś (m.), una = jakaś (ż.).', theory: 't2' },
    { type: 'gap', sentence: 'Llevo ___ camiseta.', options: ['un', 'una'], answer: ['una'], explain: 'camiseta → żeński → una.', theory: 't2' },
    { type: 'gap', sentence: 'Llevo ___ vaqueros.', options: ['unos', 'unas', 'un'], answer: ['unos'], explain: 'vaqueros: męski, l. mn. → unos.', theory: 't2' },
    { type: 'gap', sentence: 'Llevo ___ botas.', options: ['unas', 'unos', 'una'], answer: ['unas'], explain: 'botas: żeński, l. mn. → unas.', theory: 't2' },
    { type: 'pairs', prompt: 'Połącz rodzajnik z opisem.', pairs: [['el', 'męski, l. poj.'], ['la', 'żeński, l. poj.'], ['los', 'męski, l. mn.'], ['las', 'żeński, l. mn.']], explain: 'el/la – l. poj., los/las – l. mn.', theory: 't2' },
    { type: 'type', prompt: 'Liczba mnoga od „la falda”:', say: 'la falda', answer: ['las faldas'], explain: 'Samogłoska → +s, la → las.', theory: 't3' },
    { type: 'type', prompt: 'Liczba mnoga od „el zapato”:', say: 'el zapato', answer: ['los zapatos'], explain: 'Samogłoska → +s, el → los.', theory: 't3' },
    { type: 'type', prompt: 'Liczba mnoga od „el cinturón”:', say: 'el cinturón', answer: ['los cinturones'], explain: 'Spółgłoska → +es, a akcent znika: cinturones.', theory: 't3' },
    { type: 'choice', prompt: 'Liczba mnoga od „el color”:', options: ['los colores', 'los colors', 'las colores'], answer: 'los colores', esOptions: true, explain: 'Spółgłoska → +es; color jest męski → los.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Mam na sobie kozaki i płaszcz.”', answer: 'Llevo unas botas y un abrigo.', extra: ['unos'], explain: 'unas botas (ż. l. mn.), un abrigo (m. l. poj.).', theory: 't2' },
    { type: 'table', title: 'Wpisz rodzajnik określony', prompt: 'Wpisz el, la, los albo las.', rows: [['___ falda', 'la'], ['___ vestido', 'el'], ['___ faldas', 'las'], ['___ vestidos', 'los']], explain: 'el/la – l. poj., los/las – l. mn.', theory: 't2' },
  ],
  test: [
    { type: 'gap', sentence: '___ abrigo', options: ['el', 'la'], answer: ['el'], explain: 'abrigo → męski → el.', theory: 't1' },
    { type: 'gap', sentence: '___ chaquetas', options: ['las', 'los', 'la'], answer: ['las'], explain: 'chaquetas: ż., l. mn. → las.', theory: 't2' },
    { type: 'gap', sentence: '___ sombreros', options: ['los', 'las', 'el'], answer: ['los'], explain: 'sombreros: m., l. mn. → los.', theory: 't2' },
    { type: 'gap', sentence: 'Busco ___ sandalias.', options: ['unas', 'unos', 'una'], answer: ['unas'], explain: 'sandalias: ż., l. mn. → unas.', theory: 't2' },
    { type: 'gap', sentence: 'Quiero ___ jersey.', options: ['un', 'una', 'unos'], answer: ['un'], explain: 'el jersey jest męski → un.', theory: 't2' },
    { type: 'gap', sentence: 'Llevo ___ falda.', options: ['una', 'un'], answer: ['una'], explain: 'falda → ż. → una.', theory: 't2' },
    { type: 'type', prompt: 'Liczba mnoga od „la camisa”:', say: 'la camisa', answer: ['las camisas'], explain: '+s, la → las.', theory: 't3' },
    { type: 'type', prompt: 'Liczba mnoga od „el abrigo”:', say: 'el abrigo', answer: ['los abrigos'], explain: '+s, el → los.', theory: 't3' },
    { type: 'type', prompt: 'Liczba mnoga od „el pantalón”:', say: 'el pantalón', answer: ['los pantalones'], explain: 'Spółgłoska → +es, akcent znika.', theory: 't3' },
    { type: 'choice', prompt: 'Jaki rodzaj ma „chaqueta”?', say: 'chaqueta', options: ['żeński', 'męski'], answer: 'żeński', explain: '-a → la chaqueta.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „unas botas”?', say: 'unas botas', options: ['(jakieś) kozaki', 'te kozaki', 'jeden kozak'], answer: '(jakieś) kozaki', explain: 'unas = jakieś; „te kozaki” to las botas.', theory: 't2' },
    { type: 'sort', prompt: 'el czy la?', categories: ['el', 'la'], items: [['bolso', 'el'], ['mochila', 'la'], ['vestido', 'el'], ['blusa', 'la']], explain: '-o → el, -a → la.', theory: 't1' },
  ],
};
