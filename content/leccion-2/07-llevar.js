export default {
  id: 'llevar',
  kind: 'lekcja',
  title: 'Llevar, vestir, ponerse',
  subtitle: 'co ktoś ma na sobie',
  passages: {
    guille: {
      title: 'Guille (podręcznik, str. 18)',
      text: 'Guille es un chico alto, moreno y delgado. Tiene el pelo rizado y lleva gafas. Viste muy bien, a la moda. Hoy lleva una chaqueta azul marino, una camisa naranja, unos pantalones verdes y unas zapatillas deportivas de color oscuro. Lleva una mochila porque vuelve de la escuela.',
    },
    marta: {
      title: 'Marta (podręcznik, str. 17)',
      text: 'Marta lleva unos pantalones cortos de color verde y zapatos planos. También viste una camiseta roja muy divertida.',
    },
  },
  vocab: [
    { es: 'llevar', pl: 'mieć na sobie, nosić', emoji: '👕', group: 'Czasowniki' },
    { es: 'vestir', pl: 'mieć na sobie, ubierać się', emoji: '👗', group: 'Czasowniki' },
    { es: 'ponerse', pl: 'zakładać (na siebie)', emoji: '🧥', group: 'Czasowniki' },
    { es: '¿Qué llevas hoy?', pl: 'Co masz dziś na sobie?', emoji: '❓', group: 'Zwroty' },
    { es: 'Hoy llevo…', pl: 'Dziś mam na sobie…', emoji: '🙋', group: 'Zwroty' },
    { es: 'cuando', pl: 'kiedy (gdy)', emoji: '⏰', group: 'Zwroty' },
    { es: 'hace frío', pl: 'jest zimno', emoji: '🥶', group: 'Pogoda' },
    { es: 'hace calor', pl: 'jest gorąco', emoji: '🥵', group: 'Pogoda' },
    { es: 'la montaña', pl: 'góry', emoji: '⛰️', group: 'Miejsca' },
    { es: 'la playa', pl: 'plaża', emoji: '🏖️', group: 'Miejsca' },
    { es: 'la piscina', pl: 'basen', emoji: '🏊', group: 'Miejsca' },
    { es: 'el campo', pl: 'wieś, pola', emoji: '🌾', group: 'Miejsca' },
    { es: 'el baile de fin de curso', pl: 'bal na koniec roku', emoji: '💃', group: 'Miejsca' },
    { es: 'el partido', pl: 'mecz', emoji: '🏀', group: 'Miejsca' },
    { es: 'las gafas', pl: 'okulary', emoji: '👓', group: 'Opis osoby' },
    { es: 'el pelo rizado', pl: 'kręcone włosy', emoji: '🧑‍🦱', group: 'Opis osoby' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Llevar, vestir czy ponerse?',
      html: `
        <table class="grid">
          <tr><th>czasownik</th><th>znaczenie</th><th>przykład</th></tr>
          <tr><td><b>llevar</b></td><td>mieć na sobie, nosić (stan)</td><td><i>Hoy llevo vaqueros.</i></td></tr>
          <tr><td><b>vestir</b></td><td>mieć na sobie (trochę „książkowo”)</td><td><i>La modelo viste un vestido blanco.</i></td></tr>
          <tr><td><b>ponerse</b></td><td>zakładać, wkładać (czynność)</td><td><i>Me pongo el abrigo.</i></td></tr>
        </table>
        <p>💡 <b>llevar</b> to najczęstsze słowo – używaj go, gdy opisujesz, co ktoś ma na sobie. Pasuje też do okularów, plecaka, torebki: <i>Lleva gafas. Lleva una mochila.</i></p>
        <p>💡 <b>ponerse</b> – gdy mówisz, co <b>wkładasz</b> w danej sytuacji.</p>`,
      examples: [
        { es: 'La chica lleva una falda verde oscuro.', pl: 'Dziewczyna ma na sobie ciemnozieloną spódnicę.' },
        { es: 'El chico lleva unos pantalones vaqueros.', pl: 'Chłopak ma na sobie dżinsy.' },
        { es: 'La modelo viste un vestido blanco.', pl: 'Modelka ma na sobie białą sukienkę.' },
      ],
    },
    {
      id: 't2',
      title: 'Opis osoby',
      html: `
        <p>Tak wygląda opis z podręcznika – najpierw wygląd, potem ubranie:</p>
        <p lang="es"><i>Guille es un chico alto, moreno y delgado. Tiene el pelo rizado y lleva gafas. Hoy lleva una chaqueta azul marino, una camisa naranja, unos pantalones verdes…</i></p>
        <ul>
          <li><b>es</b> + cecha: es alto (jest wysoki), es moreno (ma ciemne włosy), es delgado (jest szczupły)</li>
          <li><b>tiene</b> + włosy: tiene el pelo rizado (ma kręcone włosy)</li>
          <li><b>lleva</b> + ubranie / okulary: lleva gafas, lleva una chaqueta</li>
        </ul>`,
      examples: [
        { es: 'Guille tiene el pelo rizado y lleva gafas.', pl: 'Guille ma kręcone włosy i nosi okulary.' },
        { es: 'Marta lleva unos pantalones cortos de color verde.', pl: 'Marta ma na sobie zielone szorty.' },
      ],
    },
    {
      id: 't3',
      title: 'Cuando… me pongo…',
      html: `
        <p>Żeby powiedzieć, co zakładasz w jakiejś sytuacji:</p>
        <p class="formula"><b>Cuando</b> + sytuacja, <b>me pongo</b> + ubranie.</p>
        <ul>
          <li>Cuando voy a la montaña, me pongo unas botas. (Kiedy jadę w góry…)</li>
          <li>Cuando hace frío, me pongo un gorro. (Kiedy jest zimno…)</li>
          <li>Cuando hace calor, me pongo unos pantalones cortos. (Kiedy jest gorąco…)</li>
        </ul>`,
      examples: [
        { es: 'Cuando voy al campo, me pongo unas botas cómodas.', pl: 'Kiedy jadę na wieś, wkładam wygodne buty.' },
        { es: 'Cuando voy a la piscina, me pongo un bañador.', pl: 'Kiedy idę na basen, wkładam strój kąpielowy.' },
        { es: 'Cuando hace frío, me pongo un abrigo.', pl: 'Kiedy jest zimno, wkładam płaszcz.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Który czasownik znaczy „zakładać, wkładać” (czynność)?', options: ['ponerse', 'llevar', 'vestir'], answer: 'ponerse', esOptions: true, explain: 'ponerse = zakładać; llevar = mieć na sobie.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „¿Qué llevas hoy?”', say: '¿Qué llevas hoy?', options: ['Co masz dziś na sobie?', 'Co dziś kupujesz?', 'Dokąd dziś idziesz?'], answer: 'Co masz dziś na sobie?', explain: 'llevar = mieć na sobie.', theory: 't1' },
    { type: 'gap', sentence: 'Graciela ___ unos vaqueros azules.', hint: '(llevar)', answer: ['lleva'], explain: 'Graciela = ella → lleva.', theory: 't1' },
    { type: 'gap', sentence: 'Los mariachis ___ el traje de charro.', hint: '(llevar)', answer: ['llevan'], explain: 'los mariachis = ellos → llevan.', theory: 't1' },
    { type: 'gap', sentence: 'Enrique ___ gafas porque no ve bien.', hint: '(llevar)', answer: ['lleva'], explain: 'Okulary też „llevamos”: Enrique lleva gafas.', theory: 't1' },
    { type: 'gap', sentence: 'La modelo ___ un vestido blanco.', hint: '(vestir)', answer: ['viste'], explain: 'ella → viste (e → i).', theory: 't1' },
    { type: 'truefalse', passage: 'guille', prompt: 'Przeczytaj tekst o Guille. Prawda czy fałsz?', statement: 'Guille lleva gafas.', answer: true, explain: '„Tiene el pelo rizado y lleva gafas.”', theory: 't2' },
    { type: 'truefalse', passage: 'guille', prompt: 'Przeczytaj tekst o Guille. Prawda czy fałsz?', statement: 'Guille lleva unos pantalones negros.', answer: false, explain: 'Ma zielone spodnie: „unos pantalones verdes”.', theory: 't2' },
    { type: 'truefalse', passage: 'guille', prompt: 'Przeczytaj tekst o Guille. Prawda czy fałsz?', statement: 'Lleva una mochila porque va a la playa.', answer: false, explain: 'Ma plecak, bo wraca ze szkoły: „vuelve de la escuela”.', theory: 't2' },
    { type: 'truefalse', passage: 'marta', prompt: 'Przeczytaj tekst o Marcie. Prawda czy fałsz?', statement: 'La camiseta de Marta es verde.', answer: false, explain: 'Koszulka jest czerwona (roja), zielone są szorty.', theory: 't2' },
    { type: 'pairs', prompt: 'Co zakładasz? Połącz miejsce z ubraniem.', pairs: [['la playa', 'strój kąpielowy'], ['la montaña', 'buty górskie'], ['el baile de fin de curso', 'elegancka sukienka'], ['el partido de baloncesto', 'buty sportowe']], explain: 'Ubranie dobieramy do sytuacji (podręcznik, str. 20, ćw. 9).', theory: 't3' },
    { type: 'gap', sentence: 'Cuando voy a la piscina, me pongo ___.', options: ['el bañador', 'el abrigo', 'la bufanda'], answer: ['el bañador'], explain: 'Na basen – strój kąpielowy.', theory: 't3' },
    { type: 'gap', sentence: 'Cuando hace frío, me pongo ___.', options: ['un gorro', 'unas sandalias', 'un bañador'], answer: ['un gorro'], explain: 'hace frío = jest zimno → czapka.', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „hace calor”?', say: 'hace calor', options: ['jest gorąco', 'jest zimno', 'pada deszcz'], answer: 'jest gorąco', explain: 'hace calor = jest gorąco; hace frío = jest zimno.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Dziś mam na sobie bluzę i dżinsy.”', answer: 'Hoy llevo una sudadera y unos vaqueros.', extra: ['pongo'], explain: 'llevo = mam na sobie.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Kiedy jadę w góry, zakładam kozaki.”', answer: 'Cuando voy a la montaña, me pongo unas botas.', extra: ['llevo'], explain: 'Cuando + sytuacja, me pongo + ubranie.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Mam na sobie koszulkę.', answer: ['Llevo una camiseta.', 'Yo llevo una camiseta.'], explain: 'yo → llevo; la camiseta (ż.) → una.', theory: 't1' },
    { type: 'choice', prompt: 'Jak powiesz: „Guille ma kręcone włosy”?', options: ['Guille tiene el pelo rizado.', 'Guille lleva el pelo rizado.', 'Guille es el pelo rizado.'], answer: 'Guille tiene el pelo rizado.', esOptions: true, explain: 'Włosy „mamy”: tiene el pelo…', theory: 't2' },
  ],
  test: [
    { type: 'truefalse', passage: 'guille', prompt: 'Przeczytaj tekst o Guille. Prawda czy fałsz?', statement: 'Hoy Guille lleva una chaqueta azul marino.', answer: true, explain: '„Hoy lleva una chaqueta azul marino”.', theory: 't2' },
    { type: 'truefalse', passage: 'guille', prompt: 'Przeczytaj tekst o Guille. Prawda czy fałsz?', statement: 'Guille tiene el pelo rizado.', answer: true, explain: '„Tiene el pelo rizado”.', theory: 't2' },
    { type: 'truefalse', passage: 'marta', prompt: 'Przeczytaj tekst o Marcie. Prawda czy fałsz?', statement: 'Marta lleva unos pantalones cortos.', answer: true, explain: '„Marta lleva unos pantalones cortos de color verde”.', theory: 't2' },
    { type: 'gap', sentence: 'Hoy yo ___ un jersey gris.', hint: '(llevar)', answer: ['llevo'], explain: 'yo → llevo.', theory: 't1' },
    { type: 'gap', sentence: 'Mis amigos ___ unas zapatillas deportivas.', hint: '(llevar)', answer: ['llevan'], explain: 'mis amigos = ellos → llevan.', theory: 't1' },
    { type: 'gap', sentence: 'Cuando voy a la playa, me pongo ___.', options: ['unas sandalias', 'unas botas', 'un abrigo'], answer: ['unas sandalias'], explain: 'Na plażę – sandały.', theory: 't3' },
    { type: 'gap', sentence: 'Cuando hace calor, me pongo ___.', options: ['unos pantalones cortos', 'una bufanda', 'un gorro'], answer: ['unos pantalones cortos'], explain: 'hace calor = jest gorąco → krótkie spodenki.', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „hace frío”?', say: 'hace frío', options: ['jest zimno', 'jest gorąco', 'jest ładnie'], answer: 'jest zimno', explain: 'hace frío = jest zimno.', theory: 't3' },
    { type: 'choice', prompt: 'Które zdanie opisuje, co ktoś MA NA SOBIE?', options: ['Ella lleva un vestido rojo.', 'Ella se pone un vestido rojo.', 'Ella compra un vestido rojo.'], answer: 'Ella lleva un vestido rojo.', esOptions: true, explain: 'llevar = mieć na sobie (stan); ponerse = zakładać.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Kiedy jest zimno, zakładam płaszcz.”', answer: 'Cuando hace frío, me pongo un abrigo.', extra: ['llevo'], explain: 'Cuando hace frío, me pongo…', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Ona nosi okulary.', answer: ['Ella lleva gafas.', 'Lleva gafas.', 'Ella lleva unas gafas.'], explain: 'Okulary: llevar gafas.', theory: 't1' },
    { type: 'pairs', pairs: [['la playa', 'plaża'], ['la montaña', 'góry'], ['la piscina', 'basen'], ['el campo', 'wieś']], explain: 'Powtórz miejsca z fiszek.', theory: 't3' },
  ],
};
