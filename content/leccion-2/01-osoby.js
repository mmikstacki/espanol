export default {
  id: 'osoby',
  kind: 'fundament',
  title: 'Kto? Osoby i odmiana',
  subtitle: 'yo, tú, él… i końcówki czasowników',
  vocab: [
    { es: 'yo', pl: 'ja', emoji: '🙋', group: 'Osoby' },
    { es: 'tú', pl: 'ty', emoji: '👉', group: 'Osoby' },
    { es: 'él', pl: 'on', emoji: '👨', group: 'Osoby' },
    { es: 'ella', pl: 'ona', emoji: '👩', group: 'Osoby' },
    { es: 'usted', pl: 'Pan / Pani (grzecznie)', emoji: '🎩', group: 'Osoby' },
    { es: 'nosotros', pl: 'my', emoji: '👨‍👩‍👦', group: 'Osoby', note: 'nosotras – my (same dziewczyny)' },
    { es: 'vosotros', pl: 'wy', emoji: '👥', group: 'Osoby', note: 'vosotras – wy (same dziewczyny)' },
    { es: 'ellos', pl: 'oni', emoji: '👬', group: 'Osoby' },
    { es: 'ellas', pl: 'one', emoji: '👭', group: 'Osoby' },
    { es: 'ustedes', pl: 'Państwo (grzecznie)', emoji: '🎩', group: 'Osoby' },
    { es: 'llevar', pl: 'nosić, mieć na sobie', emoji: '👕', group: 'Czasowniki' },
    { es: 'comprar', pl: 'kupować', emoji: '🛍️', group: 'Czasowniki' },
    { es: 'hablar', pl: 'mówić', emoji: '💬', group: 'Czasowniki' },
    { es: 'comer', pl: 'jeść', emoji: '🍽️', group: 'Czasowniki' },
    { es: 'vender', pl: 'sprzedawać', emoji: '🏷️', group: 'Czasowniki' },
    { es: 'vivir', pl: 'mieszkać, żyć', emoji: '🏠', group: 'Czasowniki' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Kto? Zaimki osobowe',
      html: `
        <table class="grid">
          <tr><th>hiszpański</th><th>polski</th></tr>
          <tr><td>yo</td><td>ja</td></tr>
          <tr><td>tú</td><td>ty</td></tr>
          <tr><td>él / ella / usted</td><td>on / ona / Pan, Pani</td></tr>
          <tr><td>nosotros / nosotras</td><td>my</td></tr>
          <tr><td>vosotros / vosotras</td><td>wy</td></tr>
          <tr><td>ellos / ellas / ustedes</td><td>oni / one / Państwo</td></tr>
        </table>
        <p><b>usted</b> to grzeczne „Pan / Pani” – używasz go np. do sprzedawcy albo nauczyciela. Czasownik odmienia się wtedy tak jak przy <b>él / ella</b>.</p>
        <p>Formy na <b>-as</b> (nosotras, vosotras, ellas) są dla grupy samych dziewczyn.</p>
        <p>💡 Po hiszpańsku zaimek często się <b>pomija</b>, bo końcówka czasownika już mówi, kto to robi: <i>Llevo una camiseta</i> = (Ja) mam na sobie koszulkę.</p>`,
      examples: [
        { es: 'Yo llevo una camiseta.', pl: 'Ja mam na sobie koszulkę.' },
        { es: 'Ella lleva un vestido.', pl: 'Ona ma na sobie sukienkę.' },
        { es: '¿Usted lleva gafas?', pl: 'Czy Pan/Pani nosi okulary?' },
      ],
    },
    {
      id: 't2',
      title: 'Odmiana czasowników na -ar',
      html: `
        <p>Czasownik w słowniku kończy się na <b>-ar</b>, <b>-er</b> albo <b>-ir</b> (llevar, comer, vivir). To jest <b>bezokolicznik</b> – jak polskie „nosić”.</p>
        <p>Żeby odmienić czasownik: <b>odetnij końcówkę</b> i doklej końcówkę osoby.</p>
        <p class="formula">llev<s>ar</s> → llev + o = <b>llevo</b></p>
        <table class="grid">
          <tr><th>osoba</th><th>końcówka</th><th>llevar</th></tr>
          <tr><td>yo</td><td>-o</td><td>llev<b>o</b></td></tr>
          <tr><td>tú</td><td>-as</td><td>llev<b>as</b></td></tr>
          <tr><td>él / ella / usted</td><td>-a</td><td>llev<b>a</b></td></tr>
          <tr><td>nosotros</td><td>-amos</td><td>llev<b>amos</b></td></tr>
          <tr><td>vosotros</td><td>-áis</td><td>llev<b>áis</b></td></tr>
          <tr><td>ellos / ustedes</td><td>-an</td><td>llev<b>an</b></td></tr>
        </table>
        <p>Tak samo: comprar (compro, compras…), hablar (hablo, hablas…).</p>`,
      examples: [
        { es: 'Nosotros llevamos unos vaqueros.', pl: 'My mamy na sobie dżinsy.' },
        { es: '¿Qué compras?', pl: 'Co kupujesz?' },
        { es: 'Ellos hablan español.', pl: 'Oni mówią po hiszpańsku.' },
      ],
    },
    {
      id: 't3',
      title: 'Odmiana czasowników na -er i -ir',
      html: `
        <table class="grid">
          <tr><th>osoba</th><th>comer (-er)</th><th>vivir (-ir)</th></tr>
          <tr><td>yo</td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
          <tr><td>tú</td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
          <tr><td>él / ella / usted</td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
          <tr><td>nosotros</td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
          <tr><td>vosotros</td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
          <tr><td>ellos / ustedes</td><td>com<b>en</b></td><td>viv<b>en</b></td></tr>
        </table>
        <p>💡 <b>-er</b> i <b>-ir</b> różnią się tylko przy <b>nosotros</b> i <b>vosotros</b>.</p>
        <p>💡 Końcówka <b>-o</b> to prawie zawsze „ja”: llevo, como, vivo.</p>`,
      examples: [
        { es: 'Vivimos en Polonia.', pl: 'Mieszkamy w Polsce.' },
        { es: '¿Dónde vives?', pl: 'Gdzie mieszkasz?' },
        { es: 'En la tienda venden zapatos.', pl: 'W sklepie sprzedają buty.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Jak powiesz po hiszpańsku „ja”?', options: ['yo', 'tú', 'él', 'nosotros'], answer: 'yo', esOptions: true, explain: '„Ja” to yo.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „nosotros”?', say: 'nosotros', options: ['my', 'wy', 'oni', 'ja'], answer: 'my', explain: 'nosotros = my (nosotras, gdy same dziewczyny).', theory: 't1' },
    { type: 'listen', say: 'vosotros', options: ['wy', 'my', 'oni', 'ty'], answer: 'wy', explain: 'vosotros = wy.', theory: 't1' },
    { type: 'pairs', pairs: [['yo', 'ja'], ['tú', 'ty'], ['ella', 'ona'], ['ellos', 'oni'], ['usted', 'Pan / Pani']], explain: 'Zajrzyj do tabelki zaimków.', theory: 't1' },
    { type: 'choice', prompt: 'Mówisz grzecznie do sprzedawczyni („Czy Pani ma…?”). Którego słowa użyjesz?', options: ['usted', 'tú', 'vosotros'], answer: 'usted', esOptions: true, explain: 'usted = Pan/Pani, forma grzecznościowa.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „ellas”?', say: 'ellas', options: ['one', 'oni', 'wy', 'my'], answer: 'one', explain: 'ellas = one (grupa samych dziewczyn), ellos = oni.', theory: 't1' },
    { type: 'choice', prompt: 'Na co kończy się czasownik „llevar”?', options: ['-ar', '-er', '-ir'], answer: '-ar', explain: 'llev-ar: to czasownik na -ar.', theory: 't2' },
    { type: 'table', title: 'llevar', prompt: 'Odmień „llevar” (nosić, mieć na sobie).', rows: [['yo', 'llevo'], ['tú', 'llevas'], ['él / ella', 'lleva'], ['nosotros', 'llevamos'], ['vosotros', 'lleváis'], ['ellos / ellas', 'llevan']], explain: 'Końcówki -ar: -o, -as, -a, -amos, -áis, -an.', theory: 't2' },
    { type: 'gap', sentence: 'Yo ___ una camiseta.', options: ['llevo', 'llevas', 'lleva'], answer: ['llevo'], explain: 'yo → końcówka -o: llevo.', theory: 't2' },
    { type: 'gap', sentence: 'Tú ___ unos vaqueros.', options: ['llevo', 'llevas', 'llevan'], answer: ['llevas'], explain: 'tú → końcówka -as: llevas.', theory: 't2' },
    { type: 'gap', sentence: 'Ella ___ un vestido.', options: ['llevas', 'lleva', 'llevamos'], answer: ['lleva'], explain: 'él / ella → końcówka -a: lleva.', theory: 't2' },
    { type: 'gap', sentence: 'Nosotros ___ zapatillas.', hint: '(llevar)', answer: ['llevamos'], explain: 'nosotros → -amos: llevamos.', theory: 't2' },
    { type: 'gap', sentence: 'Ellos ___ gafas.', hint: '(llevar)', answer: ['llevan'], explain: 'ellos → -an: llevan.', theory: 't2' },
    { type: 'gap', sentence: 'Vosotros ___ gorros.', hint: '(llevar)', answer: ['lleváis'], explain: 'vosotros → -áis: lleváis (z akcentem na á).', theory: 't2' },
    { type: 'table', title: 'comer', prompt: 'Odmień „comer” (jeść).', rows: [['yo', 'como'], ['tú', 'comes'], ['él / ella', 'come'], ['nosotros', 'comemos'], ['vosotros', 'coméis'], ['ellos / ellas', 'comen']], explain: 'Końcówki -er: -o, -es, -e, -emos, -éis, -en.', theory: 't3' },
    { type: 'choice', prompt: 'Kto to mówi? „Vivimos en Polonia.”', say: 'Vivimos en Polonia.', options: ['nosotros', 'yo', 'ellos'], answer: 'nosotros', esOptions: true, explain: 'Końcówka -imos = nosotros (my).', theory: 't3' },
    { type: 'choice', prompt: 'Kto to robi? „Comes mucho.”', say: 'Comes mucho.', options: ['tú', 'yo', 'él'], answer: 'tú', esOptions: true, explain: 'Końcówka -es = tú (ty).', theory: 't3' },
    { type: 'gap', sentence: 'Yo ___ una falda.', hint: '(comprar)', answer: ['compro'], explain: 'compr-ar → yo compro.', theory: 't2' },
    { type: 'sort', prompt: 'Na co kończy się czasownik?', categories: ['-ar', '-er', '-ir'], items: [['llevar', '-ar'], ['hablar', '-ar'], ['comer', '-er'], ['vender', '-er'], ['vivir', '-ir'], ['escribir', '-ir']], explain: 'Patrz na dwie ostatnie litery bezokolicznika.', theory: 't2' },
    { type: 'order', prompt: 'Ułóż zdanie: „Mamy na sobie dżinsy.”', answer: 'Nosotros llevamos unos vaqueros.', extra: ['lleváis'], explain: 'nosotros + llevamos.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: „ty nosisz”', answer: ['llevas', 'tú llevas'], explain: 'tú → llevas.', theory: 't2' },
  ],
  test: [
    { type: 'choice', prompt: 'Co znaczy „ellos”?', say: 'ellos', options: ['oni', 'one', 'my', 'wy'], answer: 'oni', explain: 'ellos = oni.', theory: 't1' },
    { type: 'listen', say: 'ella', options: ['ona', 'on', 'oni', 'ja'], answer: 'ona', explain: 'ella = ona, él = on.', theory: 't1' },
    { type: 'gap', sentence: 'Usted ___ un traje elegante.', options: ['lleva', 'llevas', 'llevo'], answer: ['lleva'], explain: 'usted odmienia się jak él/ella: lleva.', theory: 't1' },
    { type: 'gap', sentence: 'Yo ___ español.', hint: '(hablar)', answer: ['hablo'], explain: 'yo → -o: hablo.', theory: 't2' },
    { type: 'gap', sentence: 'Tú ___ pan.', hint: '(comer)', answer: ['comes'], explain: 'tú → -es: comes.', theory: 't3' },
    { type: 'gap', sentence: 'Nosotras ___ en Madrid.', hint: '(vivir)', answer: ['vivimos'], explain: 'nosotras → -imos: vivimos.', theory: 't3' },
    { type: 'gap', sentence: 'Ellas ___ faldas.', hint: '(llevar)', answer: ['llevan'], explain: 'ellas → -an: llevan.', theory: 't2' },
    { type: 'gap', sentence: 'Vosotros ___ zapatos.', hint: '(comprar)', answer: ['compráis'], explain: 'vosotros → -áis: compráis.', theory: 't2' },
    { type: 'choice', prompt: 'Kto to mówi? „Llevo un jersey.”', say: 'Llevo un jersey.', options: ['yo', 'tú', 'ella'], answer: 'yo', esOptions: true, explain: 'Końcówka -o = yo (ja).', theory: 't2' },
    { type: 'choice', prompt: 'Kto to robi? „Coméis en casa.”', say: 'Coméis en casa.', options: ['vosotros', 'nosotros', 'ellos'], answer: 'vosotros', esOptions: true, explain: 'Końcówka -éis = vosotros (wy).', theory: 't3' },
    { type: 'table', title: 'vivir', prompt: 'Odmień „vivir” (mieszkać).', rows: [['yo', 'vivo'], ['tú', 'vives'], ['él / ella', 'vive'], ['nosotros', 'vivimos'], ['vosotros', 'vivís'], ['ellos / ellas', 'viven']], explain: 'Końcówki -ir: -o, -es, -e, -imos, -ís, -en.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: „ona nosi”', answer: ['lleva', 'ella lleva'], explain: 'ella → lleva.', theory: 't2' },
    { type: 'choice', prompt: 'Do nauczyciela mówisz grzecznie:', options: ['¿Usted habla inglés?', '¿Tú hablas inglés?'], answer: '¿Usted habla inglés?', esOptions: true, explain: 'Grzecznie: usted + forma jak dla él (habla).', theory: 't1' },
  ],
};
