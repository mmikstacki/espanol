export default {
  id: 'tiendas',
  kind: 'lekcja',
  title: 'Sklepy i produkty',
  subtitle: 'panadería, zapatería…',
  vocab: [
    { es: 'la frutería', pl: 'sklep z owocami, warzywniak', emoji: '🍎', group: 'Sklepy' },
    { es: 'la tienda de ropa', pl: 'sklep odzieżowy', emoji: '👗', group: 'Sklepy' },
    { es: 'la tienda de informática', pl: 'sklep komputerowy', emoji: '💻', group: 'Sklepy' },
    { es: 'la zapatería', pl: 'sklep obuwniczy', emoji: '👞', group: 'Sklepy' },
    { es: 'la floristería', pl: 'kwiaciarnia', emoji: '💐', group: 'Sklepy' },
    { es: 'la panadería', pl: 'piekarnia', emoji: '🥖', group: 'Sklepy' },
    { es: 'la librería', pl: 'księgarnia (nie biblioteka!)', emoji: '📚', group: 'Sklepy' },
    { es: 'la heladería', pl: 'lodziarnia', emoji: '🍦', group: 'Sklepy' },
    { es: 'el panadero', pl: 'piekarz', emoji: '👨‍🍳', group: 'Ludzie' },
    { es: 'el dependiente', pl: 'sprzedawca', emoji: '🧑‍💼', group: 'Ludzie' },
    { es: 'el cliente', pl: 'klient', emoji: '🙋', group: 'Ludzie' },
    { es: 'las manzanas', pl: 'jabłka', emoji: '🍎', group: 'Produkty' },
    { es: 'las naranjas', pl: 'pomarańcze', emoji: '🍊', group: 'Produkty' },
    { es: 'los plátanos', pl: 'banany', emoji: '🍌', group: 'Produkty' },
    { es: 'las uvas', pl: 'winogrona', emoji: '🍇', group: 'Produkty' },
    { es: 'el pan', pl: 'chleb', emoji: '🍞', group: 'Produkty' },
    { es: 'las magdalenas', pl: 'babeczki, magdalenki', emoji: '🧁', group: 'Produkty' },
    { es: 'los cruasanes', pl: 'rogaliki, croissanty', emoji: '🥐', group: 'Produkty' },
    { es: 'las rosas', pl: 'róże', emoji: '🌹', group: 'Produkty' },
    { es: 'los claveles', pl: 'goździki', emoji: '🌸', group: 'Produkty' },
    { es: 'el libro', pl: 'książka', emoji: '📕', group: 'Produkty' },
    { es: 'el diccionario', pl: 'słownik', emoji: '📖', group: 'Produkty' },
    { es: 'el ordenador', pl: 'komputer', emoji: '💻', group: 'Produkty' },
    { es: 'la videoconsola', pl: 'konsola do gier', emoji: '🎮', group: 'Produkty' },
    { es: 'el helado', pl: 'lody', emoji: '🍨', group: 'Produkty' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Sklep na -ería, sprzedawca na -ero',
      html: `
        <p>Wiele nazw sklepów powstaje od produktu + <b>-ería</b>, a sprzedawcy + <b>-ero</b>:</p>
        <table class="grid">
          <tr><th>produkt</th><th>sklep</th><th>sprzedawca</th></tr>
          <tr><td>el pan (chleb)</td><td>la pan<b>adería</b></td><td>el pan<b>adero</b></td></tr>
          <tr><td>la fruta (owoce)</td><td>la frut<b>ería</b></td><td>el frut<b>ero</b></td></tr>
          <tr><td>el zapato (but)</td><td>la zapat<b>ería</b></td><td>el zapat<b>ero</b></td></tr>
          <tr><td>el helado (lody)</td><td>la helad<b>ería</b></td><td>el helad<b>ero</b></td></tr>
          <tr><td>el libro (książka)</td><td>la libr<b>ería</b></td><td>el libr<b>ero</b></td></tr>
        </table>
        <p>⚠️ <b>la librería</b> to <b>księgarnia</b> (sklep z książkami). Biblioteka to <i>la biblioteca</i>.</p>
        <p>Inne sklepy: <b>la floristería</b> (kwiaciarnia), <b>la tienda de ropa</b>, <b>la tienda de informática</b>.</p>`,
      examples: [
        { es: 'Voy a la panadería.', pl: 'Idę do piekarni.' },
        { es: '¿Quién es el señor? Es el panadero.', pl: 'Kim jest ten pan? To piekarz.' },
        { es: 'En la floristería compramos rosas.', pl: 'W kwiaciarni kupujemy róże.' },
      ],
    },
    {
      id: 't2',
      title: '¿Dónde puedo comprar…?',
      html: `
        <p>Pytanie i odpowiedź z podręcznika:</p>
        <p>– ¿Dónde puedes comprar los libros?<br>– <b>Los</b> puedo comprar en una librería.</p>
        <p>Małe słówko na początku odpowiedzi zastępuje rzecz i pasuje do jej rodzajnika:</p>
        <table class="grid">
          <tr><th>rzecz</th><th>odpowiedź</th></tr>
          <tr><td><b>el</b> gorro</td><td><b>Lo</b> puedo comprar en una tienda de ropa.</td></tr>
          <tr><td><b>la</b> begonia</td><td><b>La</b> puedo comprar en una floristería.</td></tr>
          <tr><td><b>los</b> zapatos</td><td><b>Los</b> puedo comprar en una zapatería.</td></tr>
          <tr><td><b>las</b> uvas</td><td><b>Las</b> puedo comprar en una frutería.</td></tr>
        </table>
        <p>💡 el → lo, la → la, los → los, las → las. Dokładniej poznasz to w kroku 13.</p>`,
      examples: [
        { es: 'Lo puedo comprar en una tienda de informática.', pl: 'Mogę go kupić w sklepie komputerowym.' },
        { es: 'Las puedo comprar en una frutería.', pl: 'Mogę je kupić w warzywniaku.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „la librería”?', say: 'la librería', options: ['księgarnia', 'biblioteka', 'piekarnia', 'kwiaciarnia'], answer: 'księgarnia', explain: 'Pułapka! la librería = księgarnia; biblioteka = la biblioteca.', theory: 't1' },
    { type: 'listen', say: 'la panadería', options: ['🥖', '🍎', '💐', '👞'], answer: '🥖', explain: 'la panadería = piekarnia.', theory: 't1' },
    { type: 'listen', say: 'la floristería', options: ['💐', '🍦', '📚', '💻'], answer: '💐', explain: 'la floristería = kwiaciarnia.', theory: 't1' },
    { type: 'pairs', prompt: 'Gdzie to kupisz? Połącz produkt ze sklepem.', pairs: [['las manzanas', 'frutería'], ['el pan', 'panadería'], ['las rosas', 'floristería'], ['el diccionario', 'librería'], ['las botas', 'zapatería']], explain: 'To samo co ćw. 11 w zeszycie.', theory: 't1' },
    { type: 'sort', prompt: 'W którym sklepie?', categories: ['frutería', 'panadería', 'librería'], items: [['los plátanos', 'frutería'], ['las naranjas', 'frutería'], ['las magdalenas', 'panadería'], ['los bollos', 'panadería'], ['la novela histórica', 'librería'], ['los libros', 'librería']], explain: 'Owoce – frutería, pieczywo – panadería, książki – librería.', theory: 't1' },
    { type: 'sort', prompt: 'W którym sklepie?', categories: ['tienda de ropa', 'informática', 'floristería'], items: [['la chaqueta', 'tienda de ropa'], ['el abrigo', 'tienda de ropa'], ['el ordenador', 'informática'], ['la tarjeta gráfica', 'informática'], ['los claveles', 'floristería'], ['las margaritas', 'floristería']], explain: 'To podział z zeszytu (ćw. 11).', theory: 't1' },
    { type: 'gap', sentence: 'pan → panadería → ___', options: ['panadero', 'panadera', 'pandero'], answer: ['panadero'], explain: 'Sprzedawca: -ero → panadero.', theory: 't1' },
    { type: 'gap', sentence: 'helado → ___ → heladero', options: ['heladería', 'heladera', 'heladoría'], answer: ['heladería'], explain: 'Sklep: -ería → heladería.', theory: 't1' },
    { type: 'choice', prompt: 'Gdzie kupisz chleb?', options: ['en la panadería', 'en la frutería', 'en la librería'], answer: 'en la panadería', esOptions: true, explain: 'el pan → la panadería.', theory: 't1' },
    { type: 'choice', prompt: 'W którym sklepie kupujemy „bollos y tartas”?', say: 'En la panadería compramos bollos y tartas.', options: ['la panadería', 'la floristería', 'la heladería'], answer: 'la panadería', esOptions: true, explain: 'Słodkie pieczywo i ciasta – piekarnia.', theory: 't1' },
    { type: 'gap', sentence: 'los libros → ___ puedo comprar en una librería.', options: ['Los', 'Las', 'Lo'], answer: ['Los'], explain: 'los libros → Los.', theory: 't2' },
    { type: 'gap', sentence: 'el monitor → ___ puedo comprar en una tienda de informática.', options: ['Lo', 'La', 'Los'], answer: ['Lo'], explain: 'el monitor → Lo.', theory: 't2' },
    { type: 'gap', sentence: 'las uvas → ___ puedo comprar en una frutería.', options: ['Las', 'Los', 'La'], answer: ['Las'], explain: 'las uvas → Las.', theory: 't2' },
    { type: 'gap', sentence: 'la begonia → La puedo comprar en una ___.', options: ['floristería', 'librería', 'zapatería'], answer: ['floristería'], explain: 'Begonia to kwiat → floristería.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): sklep obuwniczy', answer: ['la zapatería'], explain: 'el zapato → la zapatería.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): lodziarnia', answer: ['la heladería'], explain: 'el helado → la heladería.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Mogę je kupić w warzywniaku.” (las manzanas)', answer: 'Las puedo comprar en una frutería.', extra: ['Los'], explain: 'las manzanas → Las.', theory: 't2' },
  ],
  test: [
    { type: 'listen', say: 'la zapatería', options: ['👞', '🥖', '🍦', '📚'], answer: '👞', explain: 'la zapatería = sklep obuwniczy.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „la frutería”?', say: 'la frutería', options: ['sklep z owocami', 'sklep odzieżowy', 'lodziarnia'], answer: 'sklep z owocami', explain: 'la fruta → la frutería.', theory: 't1' },
    { type: 'pairs', prompt: 'Połącz produkt ze sklepem.', pairs: [['el helado', 'heladería'], ['los claveles', 'floristería'], ['el ordenador', 'informática'], ['las uvas', 'frutería']], explain: 'Produkt → sklep.', theory: 't1' },
    { type: 'sort', prompt: 'W którym sklepie?', categories: ['zapatería', 'tienda de ropa', 'librería'], items: [['las sandalias', 'zapatería'], ['las botas de montaña', 'zapatería'], ['los pantalones cortos', 'tienda de ropa'], ['el diccionario', 'librería']], explain: 'Buty – zapatería, ubrania – tienda de ropa, książki – librería.', theory: 't1' },
    { type: 'gap', sentence: 'zapato → zapatería → ___', options: ['zapatero', 'zapatera', 'zapatería'], answer: ['zapatero'], explain: 'Sprzedawca: zapatero.', theory: 't1' },
    { type: 'gap', sentence: 'el gorro → ___ puedo comprar en una tienda de ropa.', options: ['Lo', 'La', 'Los'], answer: ['Lo'], explain: 'el gorro → Lo.', theory: 't2' },
    { type: 'gap', sentence: 'las botas de montaña → ___ puedo comprar en una zapatería.', options: ['Las', 'Los', 'La'], answer: ['Las'], explain: 'las botas → Las.', theory: 't2' },
    { type: 'gap', sentence: 'la tarta de Santiago → La puedo comprar en una ___.', options: ['panadería', 'frutería', 'heladería'], answer: ['panadería'], explain: 'Ciasto kupujemy w piekarni (cukierni).', theory: 't2' },
    { type: 'choice', prompt: 'Gdzie kupisz dżinsy?', options: ['en la tienda de ropa', 'en la zapatería', 'en la floristería'], answer: 'en la tienda de ropa', esOptions: true, explain: 'Ubrania – tienda de ropa.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku (z rodzajnikiem): piekarnia', answer: ['la panadería'], explain: 'el pan → la panadería.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest „biblioteka”?', options: ['la biblioteca', 'la librería', 'el libro'], answer: 'la biblioteca', esOptions: true, explain: 'la librería = księgarnia; la biblioteca = biblioteka.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Mogę ją kupić w kwiaciarni.” (la rosa)', answer: 'La puedo comprar en una floristería.', extra: ['Lo'], explain: 'la rosa → La.', theory: 't2' },
  ],
};
