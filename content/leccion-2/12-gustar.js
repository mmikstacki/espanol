export default {
  id: 'gustar',
  kind: 'fundament',
  title: 'Gustar i quedar',
  subtitle: 'me gusta, me queda bien',
  vocab: [
    { es: 'me gusta', pl: 'podoba mi się, lubię (jedna rzecz)', emoji: '👍', group: 'Gustar' },
    { es: 'me gustan', pl: 'podobają mi się (kilka rzeczy)', emoji: '👍', group: 'Gustar' },
    { es: 'no me gusta', pl: 'nie podoba mi się', emoji: '👎', group: 'Gustar' },
    { es: 'me encanta', pl: 'uwielbiam, bardzo mi się podoba', emoji: '😍', group: 'Gustar' },
    { es: 'te gusta', pl: 'podoba ci się', emoji: '👉', group: 'Gustar' },
    { es: 'nos gusta', pl: 'podoba nam się', emoji: '👨‍👩‍👦', group: 'Gustar' },
    { es: 'me queda bien', pl: 'dobrze na mnie leży', emoji: '✅', group: 'Quedar' },
    { es: 'me queda mal', pl: 'źle na mnie leży', emoji: '❌', group: 'Quedar' },
    { es: 'me quedan grandes', pl: 'są na mnie za duże', emoji: '🐘', group: 'Quedar' },
    { es: '¿Qué tal te queda?', pl: 'Jak na tobie leży?', emoji: '🪞', group: 'Quedar' },
    { es: 'A mí también.', pl: 'Mnie też (się podoba).', emoji: '🤝', group: 'Reakcje' },
    { es: 'A mí tampoco.', pl: 'Mnie też nie.', emoji: '🙅', group: 'Reakcje' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Gustar działa „od tyłu”',
      html: `
        <p>Po hiszpańsku nie mówimy „ja lubię spódnicę”, tylko „<b>spódnica mi się podoba</b>”:</p>
        <p class="formula"><b>Me gusta</b> la falda. = Podoba mi się spódnica.</p>
        <p>Czasownik pasuje do <b>rzeczy</b>, nie do osoby:</p>
        <ul>
          <li>jedna rzecz albo czynność → <b>gusta</b>: <i>Me gusta esta camiseta. Me gusta bailar.</i></li>
          <li>kilka rzeczy → <b>gustan</b>: <i>Me gustan estos pantalones.</i></li>
        </ul>
        <p>❌ <s>Me gusta los zapatos</s> → ✅ Me gust<b>an</b> los zapatos.</p>
        <p><b>me encanta(n)</b> działa tak samo – to mocniejsze „bardzo mi się podoba”.</p>`,
      examples: [
        { es: 'Me gusta esta camiseta de rayas.', pl: 'Podoba mi się ta koszulka w paski.' },
        { es: 'Me gustan estos pantalones verde oliva.', pl: 'Podobają mi się te oliwkowe spodnie.' },
        { es: 'Me encanta esta camisa.', pl: 'Uwielbiam tę koszulę.' },
      ],
    },
    {
      id: 't2',
      title: 'Komu się podoba? me, te, le, nos, os, les',
      html: `
        <table class="grid">
          <tr><th>osoba</th><th>słówko</th><th>przykład</th></tr>
          <tr><td>(a mí) ja</td><td>me</td><td>me gusta</td></tr>
          <tr><td>(a ti) ty</td><td>te</td><td>te gusta</td></tr>
          <tr><td>(a él / ella / usted)</td><td>le</td><td>le gusta</td></tr>
          <tr><td>(a nosotros) my</td><td>nos</td><td>nos gusta</td></tr>
          <tr><td>(a vosotros) wy</td><td>os</td><td>os gusta</td></tr>
          <tr><td>(a ellos / ustedes)</td><td>les</td><td>les gusta</td></tr>
        </table>
        <p>Część w nawiasie można dodać dla podkreślenia: <i>A vosotros <b>os</b> gusta ir de excursión.</i></p>`,
      examples: [
        { es: '¿Te gusta este abrigo?', pl: 'Podoba ci się ten płaszcz?' },
        { es: 'A nosotros nos gusta la ropa deportiva.', pl: 'Nam podobają się ubrania sportowe.' },
        { es: 'A ellos les gusta montar en bicicleta.', pl: 'Oni lubią jeździć na rowerze.' },
      ],
    },
    {
      id: 't3',
      title: 'Quedar: jak leży ubranie?',
      html: `
        <p><b>quedar</b> działa jak gustar – mówi, jak ubranie <b>leży na kimś</b>:</p>
        <ul>
          <li>¿Qué tal <b>te queda</b> la falda? – Jak leży na tobie spódnica?</li>
          <li><b>Me queda</b> bien / mal. – Dobrze / źle na mnie leży.</li>
          <li>Los pantalones <b>me quedan</b> grandes. – Spodnie są na mnie za duże.</li>
        </ul>
        <p>Jedna rzecz → <b>queda</b>, kilka rzeczy → <b>quedan</b>.</p>
        <p>💡 Uwaga: <i>No me queda bien la ropa clara</i> = Nie jest mi dobrze w jasnych ubraniach.</p>`,
      examples: [
        { es: '¿Qué tal te queda?', pl: 'Jak na tobie leży?' },
        { es: 'Creo que me queda bien.', pl: 'Myślę, że dobrze na mnie leży.' },
        { es: 'Esta falda me queda muy bien.', pl: 'Ta spódnica bardzo dobrze na mnie leży.' },
      ],
    },
    {
      id: 't4',
      title: 'Mnie też / mnie też nie',
      html: `
        <table class="grid">
          <tr><th>ktoś mówi</th><th>zgadzasz się</th></tr>
          <tr><td>Me gusta el rojo.</td><td><b>A mí también.</b> (mnie też)</td></tr>
          <tr><td>No me gusta el rojo.</td><td><b>A mí tampoco.</b> (mnie też nie)</td></tr>
        </table>
        <p>⚠️ Przy zwykłych czasownikach (nie typu gustar) mówimy <b>Yo también / Yo tampoco</b>:</p>
        <p><i>– Odio ordenar mi habitación. (Nienawidzę sprzątać pokoju.) – <b>Yo también.</b></i></p>`,
      examples: [
        { es: 'A mí también.', pl: 'Mnie też.' },
        { es: 'A mí tampoco.', pl: 'Mnie też nie.' },
        { es: 'Yo también.', pl: 'Ja też.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „Me gusta la falda”?', say: 'Me gusta la falda.', options: ['Podoba mi się spódnica.', 'Mam na sobie spódnicę.', 'Kupuję spódnicę.'], answer: 'Podoba mi się spódnica.', explain: 'gustar = podobać się.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ esta camiseta.', options: ['gusta', 'gustan', 'gusto'], answer: ['gusta'], explain: 'Jedna rzecz → gusta.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ estos pantalones.', options: ['gustan', 'gusta', 'gusto'], answer: ['gustan'], explain: 'Kilka rzeczy (pantalones) → gustan.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ las botas negras.', options: ['encantan', 'encanta', 'encanto'], answer: ['encantan'], explain: 'las botas – l. mn. → encantan.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ bailar.', options: ['gusta', 'gustan', 'gusto'], answer: ['gusta'], explain: 'Czynność (bezokolicznik) → gusta.', theory: 't1' },
    { type: 'table', title: 'gustar', prompt: 'Wpisz słówko przed „gusta”.', rows: [['a mí', 'me'], ['a ti', 'te'], ['a él / a ella', 'le'], ['a nosotros', 'nos'], ['a vosotros', 'os'], ['a ellos', 'les']], explain: 'me, te, le, nos, os, les.', theory: 't2' },
    { type: 'gap', sentence: 'A vosotros ___ gusta ir de excursión al campo.', options: ['os', 'nos', 'vos'], answer: ['os'], explain: 'a vosotros → os (powtórka, ćw. 6).', theory: 't2' },
    { type: 'gap', sentence: 'A ellos ___ gusta montar en bicicleta.', options: ['les', 'le', 'los'], answer: ['les'], explain: 'a ellos → les.', theory: 't2' },
    { type: 'gap', sentence: '¿___ gusta este abrigo?', hint: '(tobie)', options: ['Te', 'Me', 'Le'], answer: ['Te'], explain: 'tobie → te.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „Me queda bien”?', say: 'Me queda bien.', options: ['Dobrze na mnie leży.', 'Dobrze się czuję.', 'Bardzo mi się podoba.'], answer: 'Dobrze na mnie leży.', explain: 'quedar bien = dobrze leżeć (o ubraniu).', theory: 't3' },
    { type: 'gap', sentence: 'Los pantalones me ___ grandes.', options: ['quedan', 'queda', 'quedo'], answer: ['quedan'], explain: 'pantalones – l. mn. → quedan.', theory: 't3' },
    { type: 'gap', sentence: '¿Qué tal te ___ la falda?', options: ['queda', 'quedan', 'quedas'], answer: ['queda'], explain: 'la falda – jedna rzecz → queda.', theory: 't3' },
    { type: 'pairs', pairs: [['me queda bien', 'dobrze na mnie leży'], ['me queda mal', 'źle na mnie leży'], ['me encanta', 'uwielbiam'], ['no me gusta', 'nie podoba mi się']], explain: 'Powtórz zwroty z fiszek.', theory: 't3' },
    { type: 'choice', prompt: '– Me gusta el color rojo. Zgadzasz się:', options: ['A mí también.', 'A mí tampoco.', 'Yo tampoco.'], answer: 'A mí también.', esOptions: true, explain: 'Po „me gusta” → A mí también.', theory: 't4' },
    { type: 'choice', prompt: '– No me gustan los vaqueros. Zgadzasz się:', options: ['A mí tampoco.', 'A mí también.', 'Yo también.'], answer: 'A mí tampoco.', esOptions: true, explain: 'Po przeczeniu → A mí tampoco.', theory: 't4' },
    { type: 'choice', prompt: '– Odio ordenar mi habitación. Zgadzasz się:', say: 'Odio ordenar mi habitación.', options: ['Yo también.', 'A mí también.', 'A mí tampoco.'], answer: 'Yo también.', esOptions: true, explain: 'odiar to zwykły czasownik (yo odio) → Yo también (powtórka, ćw. 7).', theory: 't4' },
    { type: 'order', prompt: 'Ułóż: „Myślę, że dobrze na mnie leży.”', answer: 'Creo que me queda bien.', extra: ['quedan'], explain: 'creo que = myślę, że.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Podobają mi się te buty.', answer: ['Me gustan estos zapatos.', 'Me gustan los zapatos.', 'Me gustan esos zapatos.'], explain: 'zapatos – l. mn. → gustan.', theory: 't1' },
  ],
  test: [
    { type: 'gap', sentence: 'Me ___ este vestido.', options: ['gusta', 'gustan', 'gusto'], answer: ['gusta'], explain: 'Jedna rzecz → gusta.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ las sandalias.', options: ['gustan', 'gusta', 'gusto'], answer: ['gustan'], explain: 'l. mn. → gustan.', theory: 't1' },
    { type: 'gap', sentence: 'A ella ___ gusta la ropa elegante.', options: ['le', 'la', 'les'], answer: ['le'], explain: 'a ella → le.', theory: 't2' },
    { type: 'gap', sentence: 'A nosotros ___ gustan los gorros.', options: ['nos', 'os', 'nosotros'], answer: ['nos'], explain: 'a nosotros → nos.', theory: 't2' },
    { type: 'gap', sentence: 'Esta falda me ___ muy bien.', options: ['queda', 'quedan', 'quedo'], answer: ['queda'], explain: 'jedna rzecz → queda.', theory: 't3' },
    { type: 'gap', sentence: 'Estos zapatos me ___ pequeños.', options: ['quedan', 'queda', 'quedas'], answer: ['quedan'], explain: 'l. mn. → quedan.', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „¿Qué tal te queda?”', say: '¿Qué tal te queda?', options: ['Jak na tobie leży?', 'Co ci się podoba?', 'Ile to kosztuje?'], answer: 'Jak na tobie leży?', explain: 'quedar = leżeć (o ubraniu).', theory: 't3' },
    { type: 'choice', prompt: '– No me gusta este abrigo. Zgadzasz się:', options: ['A mí tampoco.', 'A mí también.', 'Yo también.'], answer: 'A mí tampoco.', esOptions: true, explain: 'Po przeczeniu → tampoco.', theory: 't4' },
    { type: 'table', title: 'gustar', prompt: 'Wpisz słówko przed „gusta”.', rows: [['a mí', 'me'], ['a ella', 'le'], ['a nosotros', 'nos'], ['a ellos', 'les']], explain: 'me, le, nos, les.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Podoba mi się ta koszula.', answer: ['Me gusta esta camisa.', 'Me gusta la camisa.', 'Me gusta esa camisa.'], explain: 'Jedna rzecz → gusta.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Te spodnie są na mnie za duże.”', answer: 'Estos pantalones me quedan grandes.', extra: ['queda'], explain: 'pantalones → quedan.', theory: 't3' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'Me gusta los zapatos.', answer: false, explain: 'Poprawnie: Me gustan los zapatos.', theory: 't1' },
  ],
};
