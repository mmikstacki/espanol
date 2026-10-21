export default {
  id: 'colores',
  kind: 'lekcja',
  title: 'Kolory, wzory, opis ubrania',
  subtitle: 'rojo claro, de rayas, ancho…',
  vocab: [
    { es: 'claro', pl: 'jasny', emoji: '🌤️', group: 'Odcienie' },
    { es: 'oscuro', pl: 'ciemny', emoji: '🌑', group: 'Odcienie' },
    { es: 'azul marino', pl: 'granatowy', emoji: '⚓', group: 'Odcienie' },
    { es: 'verde oliva', pl: 'oliwkowy', emoji: '🫒', group: 'Odcienie' },
    { es: 'de rayas', pl: 'w paski', emoji: '🦓', group: 'Wzory' },
    { es: 'de cuadros', pl: 'w kratę', emoji: '🏁', group: 'Wzory' },
    { es: 'de lunares', pl: 'w grochy', emoji: '🐞', group: 'Wzory' },
    { es: 'estampado', pl: 'wzorzysty, z nadrukiem', emoji: '🌺', group: 'Wzory' },
    { es: 'liso', pl: 'gładki, jednolity', emoji: '⬜', group: 'Wzory' },
    { es: 'ancho', pl: 'szeroki', emoji: '↔️', group: 'Opis' },
    { es: 'estrecho', pl: 'wąski, obcisły', emoji: '➖', group: 'Opis' },
    { es: 'cómodo', pl: 'wygodny', emoji: '🛋️', group: 'Opis' },
    { es: 'elegante', pl: 'elegancki', emoji: '🎩', group: 'Opis' },
    { es: 'clásico', pl: 'klasyczny', emoji: '🏛️', group: 'Opis' },
    { es: 'moderno', pl: 'nowoczesny', emoji: '🚀', group: 'Opis' },
    { es: 'formal', pl: 'oficjalny, elegancki', emoji: '👔', group: 'Opis' },
    { es: 'informal', pl: 'codzienny, swobodny', emoji: '👕', group: 'Opis' },
    { es: 'de moda', pl: 'modny', emoji: '✨', group: 'Opis' },
    { es: 'a juego con', pl: 'pasujący do', emoji: '🤝', group: 'Opis' },
    { es: 'de manga corta', pl: 'z krótkim rękawem', emoji: '👕', group: 'Opis' },
    { es: 'de manga larga', pl: 'z długim rękawem', emoji: '🧥', group: 'Opis' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Kolory złożone się NIE odmieniają',
      html: `
        <p>Gdy kolor ma dodatek – <b>claro</b> (jasny), <b>oscuro</b> (ciemny), <b>marino</b>, <b>oliva</b> – cała para zostaje <b>bez zmian</b>, niezależnie od rzeczownika:</p>
        <table class="grid">
          <tr><th>l. poj.</th><th>l. mn.</th></tr>
          <tr><td>el vestido <b>rojo claro</b></td><td>los vestidos <b>rojo claro</b></td></tr>
          <tr><td>la camisa <b>rojo oscuro</b></td><td>las camisas <b>rojo oscuro</b></td></tr>
          <tr><td>el traje <b>azul marino</b></td><td>los trajes <b>azul marino</b></td></tr>
        </table>
        <p>❌ <s>una camisa roja oscura</s> → ✅ una camisa <b>rojo oscuro</b></p>
        <p>💡 Porównaj: sam kolor się odmienia (una falda roj<b>a</b>), kolor z dodatkiem – nie (una falda <b>rojo claro</b>).</p>`,
      examples: [
        { es: 'La chica lleva una falda verde oscuro.', pl: 'Dziewczyna ma na sobie ciemnozieloną spódnicę.' },
        { es: 'Me gustan estos pantalones verde oliva.', pl: 'Podobają mi się te oliwkowe spodnie.' },
        { es: 'El traje azul marino es elegante.', pl: 'Granatowy garnitur jest elegancki.' },
      ],
    },
    {
      id: 't2',
      title: 'Wzory: de rayas, de cuadros, de lunares',
      html: `
        <p>Wzór opisujemy przez <b>de</b> + liczba mnoga. Ta forma też się nie zmienia:</p>
        <ul>
          <li>una camiseta <b>de rayas</b> – koszulka w paski</li>
          <li>una camisa <b>de cuadros</b> – koszula w kratę</li>
          <li>un vestido <b>de lunares</b> – sukienka w grochy</li>
        </ul>
        <p>Tak samo rękawy: una camiseta <b>de manga corta</b> (z krótkim rękawem), un jersey <b>de manga larga</b>.</p>
        <p>Natomiast <b>estampado</b> (wzorzysty) i <b>liso</b> (gładki) to zwykłe przymiotniki: una falda estampad<b>a</b>, unos pantalones lis<b>os</b>.</p>`,
      examples: [
        { es: 'Mira, tenemos esta blanca de rayas.', pl: 'Popatrz, mamy tę białą w paski.' },
        { es: 'Sí, el negro de cuadros.', pl: 'Tak, ten czarny w kratę.' },
        { es: 'Quería una camiseta de manga corta.', pl: 'Chciałem/Chciałam koszulkę z krótkim rękawem.' },
      ],
    },
    {
      id: 't3',
      title: 'Jak opisać ubranie',
      html: `
        <p>Przydatne pary przeciwieństw:</p>
        <table class="grid">
          <tr><td>ancho</td><td>szeroki</td><td>≠</td><td>estrecho</td><td>wąski</td></tr>
          <tr><td>largo</td><td>długi</td><td>≠</td><td>corto</td><td>krótki</td></tr>
          <tr><td>claro</td><td>jasny</td><td>≠</td><td>oscuro</td><td>ciemny</td></tr>
          <tr><td>clásico</td><td>klasyczny</td><td>≠</td><td>moderno</td><td>nowoczesny</td></tr>
          <tr><td>formal</td><td>oficjalny</td><td>≠</td><td>informal</td><td>codzienny</td></tr>
        </table>
        <p><b>de moda</b> = modny: <i>Están muy de moda.</i></p>
        <p><b>a juego con</b> = pasujący do: <i>Los zapatos son marrones a juego con el bolso.</i></p>
        <p><b>ropa formal</b> – garnitur, koszula, eleganckie buty; <b>ropa informal</b> – koszulka, dżinsy, bluza.</p>`,
      examples: [
        { es: 'Los zapatos son marrones a juego con el bolso.', pl: 'Buty są brązowe, pasujące do torebki.' },
        { es: 'Están muy de moda.', pl: 'Są bardzo modne.' },
        { es: 'Prefiero unos pantalones anchos y cómodos.', pl: 'Wolę szerokie i wygodne spodnie.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „de rayas”?', say: 'de rayas', options: ['w paski', 'w kratę', 'w grochy', 'gładki'], answer: 'w paski', explain: 'de rayas = w paski 🦓.', theory: 't2' },
    { type: 'listen', say: 'de lunares', options: ['w grochy', 'w paski', 'w kratę', 'gładki'], answer: 'w grochy', explain: 'de lunares = w grochy (jak strój flamenco).', theory: 't2' },
    { type: 'pairs', pairs: [['claro', 'jasny'], ['oscuro', 'ciemny'], ['ancho', 'szeroki'], ['estrecho', 'wąski'], ['cómodo', 'wygodny']], explain: 'Powtórz słówka z fiszek.', theory: 't3' },
    { type: 'pairs', prompt: 'Połącz przeciwieństwa.', pairs: [['largo', 'corto'], ['claro', 'oscuro'], ['clásico', 'moderno'], ['formal', 'informal'], ['bonito', 'feo']], explain: 'To pary przeciwieństw z ramki w zeszycie.', theory: 't3' },
    { type: 'choice', prompt: 'Jak powiesz „granatowe spodnie”?', options: ['unos pantalones azul marino', 'unos pantalones azules marinos', 'unos pantalones marino azul'], answer: 'unos pantalones azul marino', esOptions: true, explain: 'Kolor złożony się nie odmienia: azul marino.', theory: 't1' },
    { type: 'gap', sentence: 'una camisa ___', options: ['rojo oscuro', 'roja oscura', 'rojos oscuros'], answer: ['rojo oscuro'], explain: 'Kolor z „oscuro” zostaje bez zmian, nawet przy rzeczowniku żeńskim.', theory: 't1' },
    { type: 'gap', sentence: 'unos vestidos ___', options: ['rojo claro', 'rojos claros', 'roja clara'], answer: ['rojo claro'], explain: 'Kolor złożony – bez liczby mnogiej: rojo claro.', theory: 't1' },
    { type: 'gap', sentence: 'una camiseta ___', options: ['de rayas', 'de raya', 'en rayas'], answer: ['de rayas'], explain: 'Wzór: de + liczba mnoga → de rayas.', theory: 't2' },
    { type: 'sort', prompt: 'Ropa formal czy informal?', categories: ['formal', 'informal'], items: [['un traje negro', 'formal'], ['una camisa blanca', 'formal'], ['unos zapatos elegantes', 'formal'], ['una camiseta naranja', 'informal'], ['unas zapatillas deportivas', 'informal'], ['una sudadera gris', 'informal']], explain: 'To zadanie z podręcznika (str. 17, ćw. 1).', theory: 't3' },
    { type: 'choice', prompt: 'W zdaniu „Me gustan estos pantalones verdes olivas.” jest błąd. Która wersja jest poprawna?', options: ['Me gustan estos pantalones verde oliva.', 'Me gustan estos pantalones verdes oliva.', 'Me gustan estos pantalones verde olivas.'], answer: 'Me gustan estos pantalones verde oliva.', esOptions: true, explain: 'verde oliva to kolor złożony – zostaje bez zmian (zeszyt, ćw. 16).', theory: 't1' },
    { type: 'choice', prompt: 'W zdaniu „Estos zapatos son rojos oscuros.” jest błąd. Która wersja jest poprawna?', options: ['Estos zapatos son rojo oscuro.', 'Estos zapatos son roja oscura.', 'Estos zapatos son rojos oscuro.'], answer: 'Estos zapatos son rojo oscuro.', esOptions: true, explain: 'rojo oscuro – bez odmiany (zeszyt, ćw. 16).', theory: 't1' },
    { type: 'gap', sentence: 'Él lleva una camiseta ___.', hint: '(jasnoczerwona: rojo + claro)', answer: ['rojo claro'], explain: 'Kolor złożony: rojo claro, nie „roja clara”.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „a juego con el bolso”?', say: 'a juego con el bolso', options: ['pasujący do torebki', 'z torebką w ręku', 'tańszy niż torebka'], answer: 'pasujący do torebki', explain: 'a juego con = pasujący do.', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „Quería una camiseta de manga corta”?', say: 'Quería una camiseta de manga corta.', options: ['Chciałem koszulkę z krótkim rękawem.', 'Chciałem krótką koszulkę.', 'Chciałem koszulkę w paski.'], answer: 'Chciałem koszulkę z krótkim rękawem.', explain: 'la manga = rękaw; de manga corta = z krótkim rękawem.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: spódnica w kratę', answer: ['una falda de cuadros', 'la falda de cuadros', 'falda de cuadros'], explain: 'de cuadros = w kratę.', theory: 't2' },
    { type: 'order', prompt: 'Ułóż: „Dziewczyna ma na sobie ciemnozieloną spódnicę.”', answer: 'La chica lleva una falda verde oscuro.', extra: ['verdes'], explain: 'verde oscuro – bez odmiany.', theory: 't1' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'unas camisas rojo oscuro', answer: true, explain: 'Tak – kolor złożony się nie odmienia.', theory: 't1' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'unos zapatos azules marinos', answer: false, explain: 'Poprawnie: unos zapatos azul marino.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „elegante”?', say: 'elegante', options: ['elegancki', 'wygodny', 'modny'], answer: 'elegancki', explain: 'elegante = elegancki; cómodo = wygodny; de moda = modny.', theory: 't3' },
    { type: 'gap', sentence: 'Los zapatos son marrones ___ el bolso.', options: ['a juego con', 'de moda', 'de rayas'], answer: ['a juego con'], explain: 'a juego con = pasujący do.', theory: 't3' },
  ],
  test: [
    { type: 'choice', prompt: 'Co znaczy „de cuadros”?', say: 'de cuadros', options: ['w kratę', 'w paski', 'w grochy', 'wzorzysty'], answer: 'w kratę', explain: 'de cuadros = w kratę.', theory: 't2' },
    { type: 'listen', say: 'de rayas', options: ['w paski', 'w grochy', 'w kratę', 'wzorzysty'], answer: 'w paski', explain: 'de rayas = w paski.', theory: 't2' },
    { type: 'gap', sentence: 'unas blusas ___', options: ['azul claro', 'azules claras', 'azul clara'], answer: ['azul claro'], explain: 'Kolor złożony zostaje bez zmian.', theory: 't1' },
    { type: 'gap', sentence: 'un traje ___', options: ['azul marino', 'azul marina', 'azules marinos'], answer: ['azul marino'], explain: 'azul marino = granatowy, bez odmiany.', theory: 't1' },
    { type: 'choice', prompt: 'W zdaniu „Él lleva una camiseta roja clara.” jest błąd. Która wersja jest poprawna?', options: ['Él lleva una camiseta rojo claro.', 'Él lleva una camiseta roja claro.', 'Él lleva una camiseta rojos claros.'], answer: 'Él lleva una camiseta rojo claro.', esOptions: true, explain: 'rojo claro – bez odmiany (zeszyt, ćw. 16).', theory: 't1' },
    { type: 'pairs', pairs: [['ancho', 'szeroki'], ['estrecho', 'wąski'], ['largo', 'długi'], ['corto', 'krótki']], explain: 'Pary przeciwieństw.', theory: 't3' },
    { type: 'choice', prompt: 'Jak powiesz „modny”?', options: ['de moda', 'a juego', 'cómodo'], answer: 'de moda', esOptions: true, explain: 'de moda = modny.', theory: 't3' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: sukienka w grochy', answer: ['un vestido de lunares', 'el vestido de lunares', 'vestido de lunares'], explain: 'el vestido + de lunares.', theory: 't2' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'los vestidos rojo claro', answer: true, explain: 'Tak – tak jest w ramce w podręczniku.', theory: 't1' },
    { type: 'sort', prompt: 'Ropa formal czy informal?', categories: ['formal', 'informal'], items: [['un vestido elegante', 'formal'], ['una corbata', 'formal'], ['unos vaqueros', 'informal'], ['una sudadera', 'informal']], explain: 'Elegancko – formal, na co dzień – informal.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Chłopak ma na sobie granatowe spodnie.”', answer: 'El chico lleva unos pantalones azul marino.', extra: ['azules'], explain: 'azul marino – bez odmiany.', theory: 't1' },
    { type: 'gap', sentence: 'Llevo una chaqueta ___.', hint: '(ciemnozielona: verde + oscuro)', answer: ['verde oscuro'], explain: 'verde oscuro – bez odmiany.', theory: 't1' },
  ],
};
