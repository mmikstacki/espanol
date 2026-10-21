export default {
  id: 'final',
  kind: 'final',
  title: 'Sprawdzian całej lekcji',
  subtitle: 'mieszanka ze wszystkiego',
  vocab: [],
  theory: [
    {
      id: 't1',
      title: 'Co już umiesz',
      html: `
        <p>Ten krok to powtórka całej Lekcji 2 – jak „Revisa y consolida” w zeszycie. Sprawdź się w każdym punkcie:</p>
        <ul>
          <li>👕 Nazywam ubrania, buty i dodatki – z rodzajnikiem (krok 3).</li>
          <li>🎨 Opisuję ubranie: kolor po rzeczowniku, <i>rojo claro</i> bez odmiany, <i>de rayas</i> (kroki 4–5).</li>
          <li>🧥 Wiem, co ktoś ma na sobie (<i>lleva</i>) i co zakładam w danej sytuacji (<i>me pongo</i>) (kroki 6–7).</li>
          <li>👉 Wskazuję rzeczy: <i>este, ese, aquel</i> (krok 8).</li>
          <li>💶 Pytam o cenę i mówię ją: <i>¿Cuánto cuesta? – Cuesta ciento veinte euros</i> (kroki 9–10).</li>
          <li>🏪 Wiem, w jakim sklepie co kupić (krok 11).</li>
          <li>🪞 Mówię, co mi się podoba i jak leży: <i>me gusta, me queda bien</i> (krok 12).</li>
          <li>🛍️ Mówię krótko: <i>me lo llevo, ¿puedo probármela?</i> (krok 13).</li>
          <li>❔ Używam <i>algún, ningún, algo, nada</i> (krok 14).</li>
          <li>💬 Prowadzę rozmowę w sklepie (krok 15).</li>
        </ul>
        <p>💡 Jeśli w sprawdzianie coś nie wyjdzie, przy każdym błędzie zobaczysz, z którego kroku to jest – wróć tam i powtórz teorię.</p>`,
      examples: [
        { es: '¿Qué me pongo hoy?', pl: 'Co dziś na siebie włożę?' },
        { es: 'Me gusta esta camiseta. ¿Puedo probármela?', pl: 'Podoba mi się ta koszulka. Mogę ją przymierzyć?' },
      ],
    },
  ],
  exercises: [
    { type: 'dialog', prompt: 'Ułóż rozmowę (powtórka, czytanie): część 1.', lines: ['Buenas tardes. ¿En qué puedo ayudarte?', 'Quería una camiseta.', '¿Qué talla tienes?', 'Tengo la talla S.'], explain: 'Powitanie → czego szukasz → rozmiar (krok 15).', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż rozmowę: część 2.', lines: ['Mira, tenemos esta azul, esa verde y aquella amarilla. ¿Qué te parecen?', 'La amarilla no me gusta. ¿Puedo probarme la azul y la verde?', 'Sí, claro. Los probadores están al fondo.'], explain: 'Propozycja → wybór → przymierzalnia.', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż rozmowę: część 3.', lines: ['¿Qué tal te quedan?', 'La azul no me queda muy bien, pero la verde sí. ¿Cuánto cuesta?', 'Está rebajada. Solo 10 euros.', '¡Qué bien! Me la llevo.', '¿Quieres pagar con tarjeta o en efectivo?', 'En efectivo.'], explain: 'Ocena → cena → decyzja → płatność.', theory: 't1' },
    { type: 'gap', sentence: '¿Cuánto ___ estos zapatos amarillos?', options: ['cuestan', 'costan', 'questan'], answer: ['cuestan'], explain: 'costar o → ue, l. mn. → cuestan (krok 10).', theory: 't1' },
    { type: 'gap', sentence: '___ gafas que tienes en las manos me gustan mucho.', options: ['Esas', 'Aquellas', 'Estas'], answer: ['Esas'], explain: 'W twoich rękach → esas (krok 8).', theory: 't1' },
    { type: 'gap', sentence: '– ¿Necesitas algo más? – No, ___ más. Gracias.', options: ['nada', 'ninguno', 'ningún'], answer: ['nada'], explain: 'nada más = nic więcej (krok 14).', theory: 't1' },
    { type: 'gap', sentence: 'En la ___ compramos bollos y tartas.', options: ['panadería', 'floristería', 'heladería'], answer: ['panadería'], explain: 'Pieczywo i ciasta → panadería (krok 11).', theory: 't1' },
    { type: 'gap', sentence: 'Este vestido es muy bonito. ¿Puedo ___?', options: ['probármelo', 'probármela', 'próbarmela'], answer: ['probármelo'], explain: 'el vestido → -lo (krok 13).', theory: 't1' },
    { type: 'gap', sentence: 'Cuando hace mucho frío me pongo en la cabeza ___.', options: ['un gorro', 'una bufanda', 'un abrigo'], answer: ['un gorro'], explain: 'en la cabeza = na głowę → czapka (krok 3).', theory: 't1' },
    { type: 'gap', sentence: '– Quería unos vaqueros. – ¿Qué ___ tienes?', options: ['talla', 'caja', 'número'], answer: ['talla'], explain: 'Rozmiar ubrania → talla (krok 15).', theory: 't1' },
    { type: 'gap', sentence: '– ¿Quieres alguna cosa más? – Sí, busco ___ bañador negro.', options: ['algún', 'alguno', 'ningún'], answer: ['algún'], explain: 'Przed rzeczownikiem → algún (krok 14).', theory: 't1' },
    { type: 'gap', sentence: 'Cuando me voy a la montaña me pongo ___.', options: ['unas botas', 'unas sandalias', 'un bañador'], answer: ['unas botas'], explain: 'Góry → kozaki / buty górskie (krok 7).', theory: 't1' },
    { type: 'choice', prompt: 'Popraw błąd: „Cuando voy a la piscina me pono un bañador.”', options: ['Cuando voy a la piscina me pongo un bañador.', 'Cuando voy a la piscina me pone un bañador.', 'Cuando voy a la piscina me ponio un bañador.'], answer: 'Cuando voy a la piscina me pongo un bañador.', esOptions: true, explain: 'yo → me pongo (krok 6).', theory: 't1' },
    { type: 'choice', prompt: 'Popraw błąd: „Juana lleva unos zapatos azules con juego a un bolso.”', options: ['Juana lleva unos zapatos azules a juego con un bolso.', 'Juana lleva unos zapatos azules de juego con un bolso.', 'Juana lleva unos zapatos azules con juego de un bolso.'], answer: 'Juana lleva unos zapatos azules a juego con un bolso.', esOptions: true, explain: 'a juego con = pasujący do (krok 5).', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie cenę: 125 €', answer: ['ciento veinticinco euros', 'ciento veinticinco'], explain: '125 = ciento veinticinco (krok 10).', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Mam na sobie granatową kurtkę.', answer: ['Llevo una chaqueta azul marino.', 'Yo llevo una chaqueta azul marino.'], explain: 'llevo + una chaqueta + azul marino (bez odmiany).', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Podobają mi się te spodnie. Biorę je.”', answer: 'Me gustan estos pantalones. Me los llevo.', extra: ['gusta', 'las'], explain: 'gustan (l. mn.) i los (pantalones) – kroki 12–13.', theory: 't1' },
  ],
  test: [
    { type: 'gap', sentence: 'Normalmente me ___ unos vaqueros para ir a clase.', options: ['pongo', 'pono', 'pone'], answer: ['pongo'], explain: 'yo → me pongo.', theory: 't1' },
    { type: 'gap', sentence: 'Ella lleva una falda ___.', options: ['verde oscuro', 'verdes oscuras', 'verde oscura'], answer: ['verde oscuro'], explain: 'Kolor złożony bez odmiany.', theory: 't1' },
    { type: 'gap', sentence: 'Me ___ estas botas negras.', options: ['gustan', 'gusta', 'gusto'], answer: ['gustan'], explain: 'botas – l. mn. → gustan.', theory: 't1' },
    { type: 'gap', sentence: 'Esta chaqueta me queda bien. Me ___ llevo.', options: ['la', 'lo', 'las'], answer: ['la'], explain: 'la chaqueta → la.', theory: 't1' },
    { type: 'gap', sentence: '¿Tienen ___ vestido elegante en la talla 38?', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'Przed rzeczownikiem → algún.', theory: 't1' },
    { type: 'gap', sentence: '___ abrigo de allí es muy caro.', options: ['Aquel', 'Este', 'Esa'], answer: ['Aquel'], explain: 'allí = daleko → aquel.', theory: 't1' },
    { type: 'gap', sentence: 'Las manzanas las puedo comprar en una ___.', options: ['frutería', 'librería', 'zapatería'], answer: ['frutería'], explain: 'Owoce → frutería.', theory: 't1' },
    { type: 'gap', sentence: 'Vosotras ___ unas blusas muy elegantes.', hint: '(vestir)', answer: ['vestís'], explain: 'vosotras → vestís (e zostaje).', theory: 't1' },
    { type: 'gap', sentence: 'Nosotros ___ unos pantalones cortos.', hint: '(llevar)', answer: ['llevamos'], explain: 'nosotros → llevamos.', theory: 't1' },
    { type: 'listen', say: 'los zapatos de tacón', options: ['👠', '👞', '👟', '👢'], answer: '👠', explain: 'zapatos de tacón = buty na obcasie.', theory: 't1' },
    { type: 'listen', say: 'trescientos', options: ['300', '30', '13', '3000'], answer: '300', explain: 'trescientos = 300.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „¿Qué tal te queda?”', say: '¿Qué tal te queda?', options: ['Jak na tobie leży?', 'Ile to kosztuje?', 'Co dziś zakładasz?'], answer: 'Jak na tobie leży?', explain: 'quedar = leżeć (o ubraniu).', theory: 't1' },
    { type: 'choice', prompt: 'Popraw błąd: „Estos zapatos son rojos oscuros.”', options: ['Estos zapatos son rojo oscuro.', 'Estos zapatos son roja oscura.', 'Estos zapatos son rojo oscuros.'], answer: 'Estos zapatos son rojo oscuro.', esOptions: true, explain: 'Kolor złożony bez odmiany.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 515', answer: ['quinientos quince'], explain: '500 = quinientos (nieregularne).', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Mogę ją przymierzyć? (la falda)', answer: ['¿Puedo probármela?', '¿Me la puedo probar?'], explain: 'probar + me + la = probármela.', theory: 't1' },
    { type: 'sort', prompt: 'Zimą czy latem?', categories: ['zima', 'lato'], items: [['la bufanda', 'zima'], ['el abrigo', 'zima'], ['el bañador', 'lato'], ['las sandalias', 'lato']], explain: 'Ciepłe rzeczy – zima.', theory: 't1' },
    { type: 'pairs', pairs: [['la zapatería', 'sklep obuwniczy'], ['de rayas', 'w paski'], ['el cinturón', 'pasek'], ['barato', 'tani']], explain: 'Słówka z całej lekcji.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Kiedy jest zimno, zakładam szalik.”', answer: 'Cuando hace frío, me pongo una bufanda.', extra: ['llevo'], explain: 'Cuando hace frío, me pongo…', theory: 't1' },
  ],
};
