export default {
  id: 'ropa',
  kind: 'lekcja',
  title: 'Ubrania, buty, dodatki',
  subtitle: 'la ropa, el calzado, los complementos',
  vocab: [
    { es: 'la ropa', pl: 'ubrania, odzież', emoji: '👚', group: 'Ogólne', note: 'liczba pojedyncza!' },
    { es: 'la prenda', pl: 'część garderoby', emoji: '🏷️', group: 'Ogólne' },
    { es: 'los complementos', pl: 'dodatki', emoji: '✨', group: 'Ogólne' },
    { es: 'la maleta', pl: 'walizka', emoji: '🧳', group: 'Ogólne' },
    { es: 'la camiseta', pl: 'koszulka, T-shirt', emoji: '👕', group: 'Ubrania' },
    { es: 'la camisa', pl: 'koszula', emoji: '👔', group: 'Ubrania' },
    { es: 'la blusa', pl: 'bluzka', emoji: '👚', group: 'Ubrania' },
    { es: 'el jersey', pl: 'sweter', emoji: '🧶', group: 'Ubrania' },
    { es: 'la sudadera', pl: 'bluza (z kapturem)', emoji: '🧑‍🎤', group: 'Ubrania' },
    { es: 'la chaqueta', pl: 'kurtka, marynarka', emoji: '🧥', group: 'Ubrania' },
    { es: 'el abrigo', pl: 'płaszcz', emoji: '🧥', group: 'Ubrania' },
    { es: 'los vaqueros', pl: 'dżinsy', emoji: '👖', group: 'Ubrania', note: 'też: los pantalones vaqueros' },
    { es: 'los pantalones', pl: 'spodnie', emoji: '👖', group: 'Ubrania' },
    { es: 'los pantalones cortos', pl: 'krótkie spodenki', emoji: '🩳', group: 'Ubrania' },
    { es: 'la falda', pl: 'spódnica', emoji: '💃', group: 'Ubrania' },
    { es: 'el vestido', pl: 'sukienka', emoji: '👗', group: 'Ubrania' },
    { es: 'el traje', pl: 'garnitur; strój', emoji: '🤵', group: 'Ubrania' },
    { es: 'el bañador', pl: 'strój kąpielowy', emoji: '🩱', group: 'Ubrania' },
    { es: 'los zapatos', pl: 'buty', emoji: '👞', group: 'Obuwie' },
    { es: 'los zapatos de tacón', pl: 'buty na obcasie', emoji: '👠', group: 'Obuwie' },
    { es: 'las botas', pl: 'kozaki, botki', emoji: '👢', group: 'Obuwie' },
    { es: 'las zapatillas (deportivas)', pl: 'buty sportowe', emoji: '👟', group: 'Obuwie', note: 'samo „zapatillas” to też kapcie' },
    { es: 'las sandalias', pl: 'sandały', emoji: '🩴', group: 'Obuwie' },
    { es: 'el gorro', pl: 'czapka (zimowa)', emoji: '❄️', group: 'Dodatki' },
    { es: 'la bufanda', pl: 'szalik', emoji: '🧣', group: 'Dodatki' },
    { es: 'el sombrero', pl: 'kapelusz', emoji: '🎩', group: 'Dodatki' },
    { es: 'las gafas', pl: 'okulary', emoji: '👓', group: 'Dodatki' },
    { es: 'las gafas de sol', pl: 'okulary przeciwsłoneczne', emoji: '🕶️', group: 'Dodatki' },
    { es: 'el bolso', pl: 'torebka', emoji: '👜', group: 'Dodatki' },
    { es: 'la mochila', pl: 'plecak', emoji: '🎒', group: 'Dodatki' },
    { es: 'el cinturón', pl: 'pasek', emoji: '➰', group: 'Dodatki' },
    { es: 'la corbata', pl: 'krawat', emoji: '👔', group: 'Dodatki' },
    { es: 'el pañuelo', pl: 'chusta, chusteczka', emoji: '🟥', group: 'Dodatki' },
    { es: 'los pendientes', pl: 'kolczyki', emoji: '✨', group: 'Dodatki' },
    { es: 'el anillo', pl: 'pierścionek', emoji: '💍', group: 'Dodatki' },
    { es: 'el collar', pl: 'naszyjnik', emoji: '📿', group: 'Dodatki' },
    { es: 'el reloj', pl: 'zegarek', emoji: '⌚', group: 'Dodatki' },
  ],
  theory: [
    {
      id: 't1',
      title: '¿Qué me pongo hoy?',
      html: `
        <p>Tytuł lekcji znaczy: <b>„Co dziś na siebie włożę?”</b></p>
        <p>Najważniejsze zdanie tej lekcji to <b>Llevo…</b> = „Mam na sobie…”.</p>
        <p>Ubrania dzielimy na trzy grupy:</p>
        <ul>
          <li><b>la ropa</b> – ubrania (koszulka, spodnie, sukienka…)</li>
          <li><b>el calzado</b> – obuwie (buty, kozaki, sandały…)</li>
          <li><b>los complementos</b> – dodatki (czapka, szalik, torebka, okulary…)</li>
        </ul>
        <p>⭐ Ucz się każdego słowa <b>z rodzajnikiem</b>: <i>la falda</i>, <i>el vestido</i>.</p>`,
      examples: [
        { es: '¿Qué me pongo hoy?', pl: 'Co dziś na siebie włożę?' },
        { es: 'Llevo una camiseta y unos vaqueros.', pl: 'Mam na sobie koszulkę i dżinsy.' },
        { es: '¿Qué llevas hoy?', pl: 'Co masz dziś na sobie?' },
      ],
    },
    {
      id: 't2',
      title: 'Ubrania w liczbie mnogiej',
      html: `
        <p>Niektóre rzeczy są zawsze w liczbie mnogiej – tak jak po polsku „spodnie”, „okulary”:</p>
        <ul>
          <li><b>los pantalones</b> – spodnie, <b>los vaqueros</b> – dżinsy</li>
          <li><b>las gafas</b> – okulary</li>
          <li>buty liczymy parami: <b>los zapatos</b>, <b>las botas</b>, <b>las sandalias</b></li>
        </ul>
        <p>Dlatego mówimy <i>Llevo <b>unos</b> vaqueros</i> (mam na sobie dżinsy – jedną parę), a nie „un vaquero”.</p>`,
      examples: [
        { es: 'Llevo unos pantalones cortos.', pl: 'Mam na sobie krótkie spodenki.' },
        { es: 'Enrique lleva gafas.', pl: 'Enrique nosi okulary.' },
        { es: 'Busco unas botas.', pl: 'Szukam kozaków.' },
      ],
    },
    {
      id: 't3',
      title: 'Pułapki',
      html: `
        <ul>
          <li><b>la ropa</b> = ubrania (wszystkie razem), ale gramatycznie to <b>liczba pojedyncza</b>: <i>La ropa es bonita.</i></li>
          <li><b>el jersey</b> = sweter (nie „dżersej”).</li>
          <li><b>la chaqueta</b> = kurtka <b>i</b> marynarka.</li>
          <li><b>el traje</b> = garnitur, ale też strój: <i>el traje de flamenca</i>.</li>
          <li><b>las zapatillas</b> = buty sportowe (pełniej: <i>zapatillas deportivas</i>), czasem też kapcie.</li>
          <li><b>el vestido</b> (sukienka) jest rodzaju <b>męskiego</b>!</li>
        </ul>`,
      examples: [
        { es: 'La modelo viste un vestido blanco.', pl: 'Modelka ma na sobie białą sukienkę.' },
        { es: 'Llevo unas zapatillas deportivas.', pl: 'Mam na sobie buty sportowe.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „la bufanda”?', say: 'la bufanda', options: ['szalik', 'czapka', 'pasek', 'krawat'], answer: 'szalik', explain: 'la bufanda = szalik 🧣.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „el abrigo”?', say: 'el abrigo', options: ['płaszcz', 'sweter', 'garnitur', 'bluza'], answer: 'płaszcz', explain: 'el abrigo = płaszcz.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „el jersey”?', say: 'el jersey', options: ['sweter', 'koszulka', 'kurtka', 'spodnie'], answer: 'sweter', explain: 'el jersey = sweter (nie „dżersej”!).', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „las zapatillas deportivas”?', say: 'las zapatillas deportivas', options: ['buty sportowe', 'sandały', 'kozaki', 'buty na obcasie'], answer: 'buty sportowe', explain: 'zapatillas deportivas = buty sportowe 👟.', theory: 't3' },
    { type: 'choice', prompt: 'Jak jest „spódnica”?', options: ['la falda', 'el vestido', 'la blusa', 'la camisa'], answer: 'la falda', esOptions: true, explain: 'la falda = spódnica; el vestido = sukienka.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest „torebka”?', options: ['el bolso', 'la mochila', 'la maleta', 'el bolsillo'], answer: 'el bolso', esOptions: true, explain: 'el bolso = torebka, la mochila = plecak, la maleta = walizka.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest „koszula”?', options: ['la camisa', 'la camiseta', 'la chaqueta', 'la sudadera'], answer: 'la camisa', esOptions: true, explain: 'la camisa = koszula, la camiseta = koszulka (T-shirt).', theory: 't1' },
    { type: 'listen', say: 'las gafas de sol', options: ['🕶️', '👓', '👜', '🎒'], answer: '🕶️', explain: 'las gafas de sol = okulary przeciwsłoneczne.', theory: 't2' },
    { type: 'listen', say: 'el vestido', options: ['👗', '👖', '👕', '🩳'], answer: '👗', explain: 'el vestido = sukienka.', theory: 't3' },
    { type: 'listen', say: 'las botas', options: ['👢', '👟', '👠', '🩴'], answer: '👢', explain: 'las botas = kozaki.', theory: 't2' },
    { type: 'listen', say: 'la mochila', options: ['plecak', 'torebka', 'walizka', 'pasek'], answer: 'plecak', explain: 'la mochila = plecak 🎒.', theory: 't1' },
    { type: 'pairs', pairs: [['la camiseta', 'koszulka'], ['los vaqueros', 'dżinsy'], ['la sudadera', 'bluza'], ['el traje', 'garnitur'], ['el bañador', 'strój kąpielowy']], explain: 'Powtórz słówka z grupy „Ubrania”.', theory: 't1' },
    { type: 'pairs', pairs: [['el gorro', 'czapka'], ['el cinturón', 'pasek'], ['los pendientes', 'kolczyki'], ['el reloj', 'zegarek'], ['el sombrero', 'kapelusz']], explain: 'Powtórz słówka z grupy „Dodatki”.', theory: 't1' },
    { type: 'sort', prompt: 'Ubranie, obuwie czy dodatek?', categories: ['ubranie', 'obuwie', 'dodatek'], items: [['la blusa', 'ubranie'], ['el abrigo', 'ubranie'], ['las sandalias', 'obuwie'], ['las botas', 'obuwie'], ['la bufanda', 'dodatek'], ['el collar', 'dodatek']], explain: 'la ropa = ubrania, el calzado = obuwie, los complementos = dodatki.', theory: 't1' },
    { type: 'sort', prompt: 'Zimą czy latem? (ropa de invierno / de verano)', categories: ['zima', 'lato'], items: [['el abrigo', 'zima'], ['la bufanda', 'zima'], ['el gorro', 'zima'], ['el bañador', 'lato'], ['las sandalias', 'lato'], ['los pantalones cortos', 'lato']], explain: 'To samo zadanie jest w podręczniku (str. 19, ćw. 5).', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): kurtka', answer: ['la chaqueta'], explain: 'la chaqueta = kurtka.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): spódnica', answer: ['la falda'], explain: 'la falda.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): dżinsy', answer: ['los vaqueros', 'los pantalones vaqueros'], explain: 'los vaqueros – zawsze liczba mnoga.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): buty', answer: ['los zapatos'], explain: 'los zapatos.', theory: 't2' },
    { type: 'choice', prompt: 'Zagadka: „Lo llevamos en la playa o en la piscina.” (Nosimy to na plaży albo na basenie.)', say: 'Lo llevamos en la playa o en la piscina.', options: ['el bañador', 'el abrigo', 'el jersey'], answer: 'el bañador', esOptions: true, explain: 'Na plażę i basen – strój kąpielowy.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „Nos la ponemos en el cuello para abrigarnos.” (Zakładamy ją na szyję, żeby było ciepło.)', say: 'Nos la ponemos en el cuello para abrigarnos.', options: ['la bufanda', 'la corbata', 'la falda'], answer: 'la bufanda', esOptions: true, explain: 'Na szyję, dla ciepła – szalik.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „Nos las ponemos en los ojos para protegernos del sol.”', say: 'Nos las ponemos en los ojos para protegernos del sol.', options: ['las gafas de sol', 'las botas', 'las sandalias'], answer: 'las gafas de sol', esOptions: true, explain: 'en los ojos = na oczy → okulary przeciwsłoneczne.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „¿Qué me pongo hoy?”', say: '¿Qué me pongo hoy?', options: ['Co dziś na siebie włożę?', 'Co dziś kupię?', 'Gdzie dziś idę?'], answer: 'Co dziś na siebie włożę?', explain: 'ponerse = zakładać na siebie.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Mam na sobie koszulkę i dżinsy.”', answer: 'Llevo una camiseta y unos vaqueros.', extra: ['unas'], explain: 'una camiseta (ż.), unos vaqueros (m. l. mn.).', theory: 't2' },
  ],
  test: [
    { type: 'choice', prompt: 'Co znaczy „la sudadera”?', say: 'la sudadera', options: ['bluza', 'spódnica', 'koszula', 'sukienka'], answer: 'bluza', explain: 'la sudadera = bluza.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest „kapelusz”?', options: ['el sombrero', 'el gorro', 'la gorra'], answer: 'el sombrero', esOptions: true, explain: 'el sombrero = kapelusz, el gorro = czapka zimowa.', theory: 't1' },
    { type: 'listen', say: 'los zapatos de tacón', options: ['👠', '👞', '👢', '👟'], answer: '👠', explain: 'zapatos de tacón = buty na obcasie.', theory: 't2' },
    { type: 'listen', say: 'el reloj', options: ['⌚', '💍', '📿', '👓'], answer: '⌚', explain: 'el reloj = zegarek.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): czapka (zimowa)', answer: ['el gorro'], explain: 'el gorro.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): koszulka (T-shirt)', answer: ['la camiseta'], explain: 'la camiseta (koszula to la camisa).', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): sukienka', answer: ['el vestido'], explain: 'el vestido – rodzaj męski!', theory: 't3' },
    { type: 'pairs', pairs: [['la falda', 'spódnica'], ['la bufanda', 'szalik'], ['el bolso', 'torebka'], ['las botas', 'kozaki']], explain: 'Powtórz słówka.', theory: 't1' },
    { type: 'sort', prompt: 'Zimą czy latem?', categories: ['zima', 'lato'], items: [['las botas', 'zima'], ['el jersey', 'zima'], ['la camiseta', 'lato'], ['las gafas de sol', 'lato']], explain: 'Ciepłe rzeczy – zima, lekkie – lato.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „Nos lo ponemos en la cabeza en invierno.”', say: 'Nos lo ponemos en la cabeza en invierno.', options: ['el gorro', 'el bolso', 'el cinturón'], answer: 'el gorro', esOptions: true, explain: 'en la cabeza = na głowę → czapka.', theory: 't1' },
    { type: 'gap', sentence: 'En verano llevo unas ___.', options: ['sandalias', 'botas', 'bufandas'], answer: ['sandalias'], explain: 'en verano = latem → sandały.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest „plecak”?', options: ['la mochila', 'la maleta', 'el bolso'], answer: 'la mochila', esOptions: true, explain: 'la mochila = plecak.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Ona ma na sobie sukienkę i kapelusz.”', answer: 'Ella lleva un vestido y un sombrero.', extra: ['una'], explain: 'el vestido i el sombrero są męskie → un.', theory: 't3' },
  ],
};
