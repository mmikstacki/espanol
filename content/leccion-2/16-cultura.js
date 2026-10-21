export default {
  id: 'cultura',
  kind: 'lekcja',
  title: 'Kultura: flamenco i Meksyk',
  subtitle: 'czytanie',
  passages: {
    flamenco: {
      title: 'El traje de flamenca (zeszyt, str. 19)',
      text: 'El traje de flamenca es el vestido que llevan las bailaoras de flamenco durante sus representaciones y el que se lleva con carácter popular en las festividades y ferias celebradas en Andalucía. El modelo más común lo compone una prenda entallada y larga hasta el tobillo; se adorna con varios volantes que se colocan tanto en la falda como en las mangas. Se confecciona en alegres colores tanto en diseños lisos como estampados, siendo los más típicos los trajes de lunares. También es tradicional llevar el pelo recogido en un moño, flores en el pelo, pendientes grandes y zapatos de tacón ancho. Tiene el par masculino en el traje corto andaluz para hombre que se complementa con sombrero de "ala ancha", camisa (puede ser estampada), pantalón, chaquetilla corta y un pañuelo. Los diseños de trajes de flamenca se exponen en el Salón Internacional de la Moda Flamenca (SIMOF), certamen anual que tiene lugar a principios de cada año en Sevilla. En él exponen sus creaciones tanto diseñadores consagrados como nuevos talentos de la moda.',
    },
    mexico: {
      title: 'Stroje Meksyku (podręcznik, str. 20)',
      text: 'En Sonora la mujer viste un traje de dos piezas, compuesto por una blusa de un color y una falda de un color distinto. — En Saltillo el traje típico masculino es el sarape, que es un poncho de múltiples colores con diseños únicos. — En Guadalajara es típico el traje de charro, que llevan los mariachis. Normalmente es negro con elementos blancos. — En Veracruz los hombres llevan una camisa blanca con cuatro bolsillos y unos pantalones también blancos. En el cuello llevan un pañuelo de color rojo. — En Oaxaca el traje femenino es un vestido negro con muchas flores y símbolos indígenas. — En Yucatán es típico un vestido blanco con flores bordadas en vivos colores y con un cuello cuadrado.',
    },
  },
  vocab: [
    { es: 'el traje de flamenca', pl: 'strój flamenco', emoji: '💃', group: 'Flamenco' },
    { es: 'la bailaora', pl: 'tancerka flamenco', emoji: '💃', group: 'Flamenco' },
    { es: 'los volantes', pl: 'falbany', emoji: '🌊', group: 'Flamenco' },
    { es: 'los lunares', pl: 'grochy (wzór)', emoji: '🔴', group: 'Flamenco' },
    { es: 'el moño', pl: 'kok (fryzura)', emoji: '👱‍♀️', group: 'Flamenco' },
    { es: 'los pendientes', pl: 'kolczyki', emoji: '✨', group: 'Flamenco' },
    { es: 'el pañuelo', pl: 'chusta', emoji: '🟥', group: 'Flamenco' },
    { es: 'la manga', pl: 'rękaw', emoji: '🧥', group: 'Flamenco' },
    { es: 'el tobillo', pl: 'kostka (u nogi)', emoji: '🦶', group: 'Flamenco' },
    { es: 'entallado', pl: 'dopasowany w talii', emoji: '⏳', group: 'Flamenco' },
    { es: 'la feria', pl: 'jarmark, festyn', emoji: '🎡', group: 'Flamenco' },
    { es: 'el certamen', pl: 'konkurs', emoji: '🏆', group: 'Flamenco' },
    { es: 'el traje de charro', pl: 'strój charro (mariachi)', emoji: '🎸', group: 'Meksyk' },
    { es: 'los mariachis', pl: 'muzycy mariachi', emoji: '🎺', group: 'Meksyk' },
    { es: 'el sarape', pl: 'kolorowe poncho', emoji: '🌈', group: 'Meksyk' },
    { es: 'bordado', pl: 'haftowany', emoji: '🧵', group: 'Meksyk' },
    { es: 'el cuello', pl: 'szyja; kołnierz', emoji: '🦒', group: 'Meksyk' },
    { es: 'el bolsillo', pl: 'kieszeń', emoji: '👖', group: 'Meksyk' },
  ],
  theory: [
    {
      id: 't1',
      title: 'El traje de flamenca',
      html: `
        <p>Strój flamenco noszą tancerki flamenco (<b>las bailaoras</b>) podczas występów, a mieszkańcy <b>Andaluzji</b> (południe Hiszpanii) – na świętach i jarmarkach (<b>ferias</b>).</p>
        <ul>
          <li>suknia <b>dopasowana w talii</b> (entallada) i <b>długa do kostek</b> (hasta el tobillo)</li>
          <li><b>falbany</b> (volantes) na spódnicy i na rękawach</li>
          <li>wesołe kolory, najbardziej typowa – <b>w grochy</b> (de lunares)</li>
          <li>do tego: włosy w <b>kok</b> (moño), kwiaty we włosach, duże <b>kolczyki</b>, buty na szerokim obcasie</li>
        </ul>
        <p>Strój męski: kapelusz z szerokim rondem, koszula, spodnie, krótki żakiet (chaquetilla) i <b>chusta</b> (pañuelo).</p>
        <p>Projekty pokazuje się co roku w <b>Sewilli</b> na pokazie SIMOF.</p>`,
      examples: [
        { es: 'Los trajes más típicos son de lunares.', pl: 'Najbardziej typowe stroje są w grochy.' },
        { es: 'Las bailaoras llevan el pelo recogido en un moño.', pl: 'Tancerki noszą włosy upięte w kok.' },
      ],
    },
    {
      id: 't2',
      title: 'Stroje regionalne Meksyku',
      html: `
        <table class="grid">
          <tr><th>region</th><th>strój</th></tr>
          <tr><td>Sonora</td><td>kobieta: dwuczęściowy – bluzka w jednym kolorze, spódnica w innym; mocne kolory, geometryczne wzory</td></tr>
          <tr><td>Saltillo</td><td>mężczyzna: <b>el sarape</b> – wielokolorowe poncho</td></tr>
          <tr><td>Guadalajara</td><td><b>el traje de charro</b> mariachi – czarny z białymi ozdobami + sombrero</td></tr>
          <tr><td>Veracruz</td><td>mężczyźni: biała koszula z 4 kieszeniami, białe spodnie, <b>czerwona chusta</b> na szyi</td></tr>
          <tr><td>Oaxaca</td><td>kobieta: <b>czarna suknia</b> z kwiatami i symbolami indiańskimi (słońce, gwiazdy)</td></tr>
          <tr><td>Yucatán</td><td><b>biała suknia</b> z kolorowymi haftowanymi kwiatami i kwadratowym dekoltem</td></tr>
        </table>`,
      examples: [
        { es: 'En Guadalajara es típico el traje de charro.', pl: 'W Guadalajarze typowy jest strój charro.' },
        { es: 'En Yucatán es típico un vestido blanco con flores bordadas.', pl: 'Na Jukatanie typowa jest biała suknia z haftowanymi kwiatami.' },
      ],
    },
    {
      id: 't3',
      title: 'A po polsku? Strój łowicki',
      html: `
        <p>Podręcznik prosi o opis polskiego stroju ludowego (ćw. 11). Przykład, który możesz przerobić na swój:</p>
        <p lang="es"><i>El traje de Łowicz es muy alegre. Las mujeres llevan una falda larga de rayas de muchos colores, una blusa blanca y un chaleco negro con flores bordadas. Los hombres llevan unos pantalones de rayas y un sombrero negro.</i></p>
        <p>Strój łowicki jest bardzo wesoły. Kobiety noszą długą spódnicę w wielokolorowe paski, białą bluzkę i czarny gorset (chaleco) z haftowanymi kwiatami. Mężczyźni noszą spodnie w paski i czarny kapelusz.</p>`,
      examples: [
        { es: 'Las mujeres llevan una falda larga de rayas de muchos colores.', pl: 'Kobiety noszą długą spódnicę w wielokolorowe paski.' },
      ],
    },
  ],
  exercises: [
    { type: 'pairs', pairs: [['los volantes', 'falbany'], ['el moño', 'kok'], ['los pendientes', 'kolczyki'], ['los lunares', 'grochy'], ['el pañuelo', 'chusta']], explain: 'Słowa z obrazka w zeszycie (str. 19, ćw. 2).', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'El traje más popular se compone de una falda muy corta.', answer: false, explain: 'Suknia jest długa do kostek: „larga hasta el tobillo”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Los volantes se colocan solo en la falda.', answer: false, explain: 'Falbany są na spódnicy i na rękawach: „tanto en la falda como en las mangas”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'El traje de flamenca siempre es de color negro.', answer: false, explain: 'Szyje się go w wesołych kolorach: „en alegres colores”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'El traje de flamenca puede ser tanto estampado como liso.', answer: true, explain: '„tanto en diseños lisos como estampados”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Existe un modelo masculino del traje de flamenco.', answer: true, explain: 'To „el traje corto andaluz para hombre”.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „hasta el tobillo”?', say: 'larga hasta el tobillo', options: ['do kostek', 'do kolan', 'do pasa'], answer: 'do kostek', explain: 'el tobillo = kostka.', theory: 't1' },
    { type: 'choice', prompt: 'W którym regionie Hiszpanii nosi się strój flamenco na świętach?', options: ['Andalucía', 'Cataluña', 'Galicia'], answer: 'Andalucía', esOptions: true, explain: 'Andaluzja – południe Hiszpanii; pokaz SIMOF jest w Sewilli.', theory: 't1' },
    { type: 'choice', prompt: '„En Saltillo el traje típico masculino es…”', say: 'En Saltillo el traje típico masculino es el sarape.', options: ['el sarape', 'el traje de charro', 'un vestido blanco'], answer: 'el sarape', esOptions: true, explain: 'El sarape – wielokolorowe poncho.', theory: 't2' },
    { type: 'pairs', prompt: 'Połącz region Meksyku ze strojem.', pairs: [['Guadalajara', 'strój mariachi'], ['Saltillo', 'kolorowe poncho'], ['Veracruz', 'biało + czerwona chusta'], ['Oaxaca', 'czarna suknia w kwiaty'], ['Yucatán', 'biała haftowana suknia']], explain: 'Podręcznik, str. 20, ćw. 10.', theory: 't2' },
    { type: 'truefalse', passage: 'mexico', prompt: 'Przeczytaj teksty o Meksyku. Prawda czy fałsz?', statement: 'Los mariachis llevan el traje de charro.', answer: true, explain: '„el traje de charro, que llevan los mariachis”.', theory: 't2' },
    { type: 'truefalse', passage: 'mexico', prompt: 'Przeczytaj teksty o Meksyku. Prawda czy fałsz?', statement: 'En Veracruz los hombres llevan un pañuelo de color verde.', answer: false, explain: 'Chusta jest czerwona: „un pañuelo de color rojo”.', theory: 't2' },
    { type: 'gap', sentence: 'En Yucatán es típico un vestido ___ con flores bordadas.', options: ['blanco', 'negro', 'rojo'], answer: ['blanco'], explain: 'Na Jukatanie – biała suknia; czarna jest w Oaxace.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „bordado”?', say: 'bordado', options: ['haftowany', 'dopasowany', 'wzorzysty'], answer: 'haftowany', explain: 'flores bordadas = haftowane kwiaty.', theory: 't2' },
    { type: 'order', prompt: 'Ułóż: „Najbardziej typowe stroje są w grochy.”', answer: 'Los trajes más típicos son de lunares.', extra: ['rayas'], explain: 'de lunares = w grochy.', theory: 't1' },
    { type: 'gap', sentence: 'Las bailaoras llevan el pelo recogido en un ___.', options: ['moño', 'sombrero', 'pañuelo'], answer: ['moño'], explain: 'el moño = kok.', theory: 't1' },
  ],
  test: [
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Las bailaoras del flamenco llevan el pelo recogido durante sus representaciones.', answer: true, explain: '„También es tradicional llevar el pelo recogido en un moño.”', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Las bailaoras tradicionalmente combinan el traje con zapatos de tacón.', answer: true, explain: '„zapatos de tacón ancho”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Los diseños se exponen en Sevilla cada dos años.', answer: false, explain: 'Pokaz jest co roku: „certamen anual”.', theory: 't1' },
    { type: 'truefalse', passage: 'flamenco', prompt: 'Przeczytaj tekst o stroju flamenco. Prawda czy fałsz?', statement: 'Durante el certamen en Sevilla presentan sus creaciones tanto los diseñadores famosos como los nuevos.', answer: true, explain: '„tanto diseñadores consagrados como nuevos talentos”.', theory: 't1' },
    { type: 'truefalse', passage: 'mexico', prompt: 'Przeczytaj teksty o Meksyku. Prawda czy fałsz?', statement: 'En Oaxaca el traje femenino es un vestido blanco.', answer: false, explain: 'W Oaxace suknia jest czarna z kwiatami.', theory: 't2' },
    { type: 'pairs', pairs: [['la manga', 'rękaw'], ['el tobillo', 'kostka'], ['la feria', 'jarmark'], ['el bolsillo', 'kieszeń']], explain: 'Słówka z tekstów.', theory: 't1' },
    { type: 'choice', prompt: '„En Guadalajara es típico…”', say: 'En Guadalajara es típico el traje de charro.', options: ['el traje de charro', 'el sarape', 'el vestido negro con flores'], answer: 'el traje de charro', esOptions: true, explain: 'Guadalajara – strój mariachi (charro).', theory: 't2' },
    { type: 'choice', prompt: 'Jaki wzór jest najbardziej typowy dla stroju flamenco?', options: ['de lunares', 'de cuadros', 'de rayas'], answer: 'de lunares', esOptions: true, explain: '„siendo los más típicos los trajes de lunares”.', theory: 't1' },
    { type: 'gap', sentence: 'En Veracruz los hombres llevan una camisa ___.', options: ['blanca', 'negra', 'roja'], answer: ['blanca'], explain: 'Biała koszula z 4 kieszeniami.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „los volantes”?', say: 'los volantes', options: ['falbany', 'kolczyki', 'rękawy'], answer: 'falbany', explain: 'los volantes = falbany.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Na Jukatanie typowa jest biała suknia.”', answer: 'En Yucatán es típico un vestido blanco.', extra: ['blanca'], explain: 'el vestido (m.) → blanco.', theory: 't2' },
    { type: 'gap', sentence: 'El sarape es un poncho de ___ colores.', options: ['múltiples', 'pocos', 'dos'], answer: ['múltiples'], explain: '„un poncho de múltiples colores”.', theory: 't2' },
  ],
};
