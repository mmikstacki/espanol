export default {
  id: 'pronombres',
  kind: 'lekcja',
  title: 'Lo, la, los, las',
  subtitle: 'me lo llevo',
  vocab: [
    { es: 'lo', pl: 'go (rzecz rodzaju męskiego)', emoji: '♂️', group: 'Zaimki' },
    { es: 'la', pl: 'ją (rzecz rodzaju żeńskiego)', emoji: '♀️', group: 'Zaimki' },
    { es: 'los', pl: 'je (rzeczy, rodzaj męski)', emoji: '♂️♂️', group: 'Zaimki' },
    { es: 'las', pl: 'je (rzeczy, rodzaj żeński)', emoji: '♀️♀️', group: 'Zaimki' },
    { es: 'Me lo llevo.', pl: 'Biorę go. (kupuję)', emoji: '🛍️', group: 'W sklepie' },
    { es: 'Me la llevo.', pl: 'Biorę ją.', emoji: '🛍️', group: 'W sklepie' },
    { es: '¿Puedo probármelo?', pl: 'Mogę go przymierzyć?', emoji: '🪞', group: 'W sklepie' },
    { es: '¿Puedo probármela?', pl: 'Mogę ją przymierzyć?', emoji: '🪞', group: 'W sklepie' },
    { es: 'probarse', pl: 'przymierzać', emoji: '🪞', group: 'W sklepie' },
    { es: 'el probador', pl: 'przymierzalnia', emoji: '🚪', group: 'W sklepie' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Lo, la, los, las zastępują rzecz',
      html: `
        <p>Żeby nie powtarzać nazwy rzeczy, zastępujemy ją małym słówkiem – tak jak po polsku „go”, „ją”, „je”:</p>
        <p>– ¿Te gusta <b>la falda</b>? – Sí, <b>la</b> compro. (Tak, kupuję <b>ją</b>.)</p>
        <table class="grid">
          <tr><th>rzecz</th><th>zastępujemy</th></tr>
          <tr><td><b>el</b> vestido</td><td><b>lo</b></td></tr>
          <tr><td><b>la</b> blusa</td><td><b>la</b></td></tr>
          <tr><td><b>los</b> pantalones</td><td><b>los</b></td></tr>
          <tr><td><b>las</b> gafas</td><td><b>las</b></td></tr>
        </table>
        <p>💡 Prawie jak rodzajnik: tylko <b>el → lo</b>, reszta bez zmian.</p>`,
      examples: [
        { es: '¿El vestido? Lo compro.', pl: 'Sukienka? Kupuję ją.' },
        { es: '¿Las sandalias? Las quiero ver.', pl: 'Sandały? Chcę je zobaczyć.' },
      ],
    },
    {
      id: 't2',
      title: 'Gdzie stawiamy lo / la?',
      html: `
        <p><b>1. Przed odmienionym czasownikiem:</b></p>
        <ul>
          <li><i>Me <b>la</b> llevo.</i> – Biorę ją.</li>
          <li><i>¿<b>Los</b> tiene en una talla más grande?</i> – Ma je pan w większym rozmiarze?</li>
        </ul>
        <p><b>2. Doklejone na końcu bezokolicznika:</b></p>
        <ul>
          <li><i>¿Puedo ver<b>los</b>?</i> – Mogę je zobaczyć?</li>
          <li><i>¿Puedo cambiar<b>las</b>?</i> – Mogę je wymienić?</li>
        </ul>
        <p>Przy „przymierzaniu” doklejamy dwa słówka: <b>me</b> + <b>la</b>: probar + me + la = <b>probármela</b>. Pojawia się akcent: prob<b>á</b>rmela.</p>`,
      examples: [
        { es: 'Me la llevo.', pl: 'Biorę ją.' },
        { es: '¿Puedo verlos?', pl: 'Mogę je zobaczyć?' },
        { es: '¿Puedo probármela?', pl: 'Mogę ją przymierzyć?' },
      ],
    },
    {
      id: 't3',
      title: 'Przymierzanie i kupowanie',
      html: `
        <table class="grid">
          <tr><th>pełne zdanie</th><th>z zaimkiem</th></tr>
          <tr><td>¿Puedo probarme <b>este</b> vestido?</td><td>¿Puedo probárme<b>lo</b>?</td></tr>
          <tr><td>¿Puedo probarme <b>esta</b> blusa?</td><td>¿Puedo probárme<b>la</b>?</td></tr>
          <tr><td>¿Puedo probarme <b>estos</b> pantalones?</td><td>¿Puedo probárme<b>los</b>?</td></tr>
          <tr><td>¿Puedo probarme <b>estas</b> gafas?</td><td>¿Puedo probárme<b>las</b>?</td></tr>
          <tr><td>Me llevo <b>este</b> vestido.</td><td>Me <b>lo</b> llevo.</td></tr>
          <tr><td>Me llevo <b>esta</b> blusa.</td><td>Me <b>la</b> llevo.</td></tr>
          <tr><td>Me llevo <b>estos</b> pantalones.</td><td>Me <b>los</b> llevo.</td></tr>
          <tr><td>Me llevo <b>estas</b> gafas.</td><td>Me <b>las</b> llevo.</td></tr>
        </table>
        <p>💡 <b>Me lo llevo</b> w sklepie znaczy „biorę to” = kupuję.</p>`,
      examples: [
        { es: 'Me gusta esta camiseta de rayas. ¿Puedo probármela?', pl: 'Podoba mi się ta koszulka w paski. Mogę ją przymierzyć?' },
        { es: 'Esta falda me queda muy bien. Me la llevo.', pl: 'Ta spódnica świetnie leży. Biorę ją.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Czym zastąpisz „el vestido”?', options: ['lo', 'la', 'los', 'las'], answer: 'lo', esOptions: true, explain: 'el → lo.', theory: 't1' },
    { type: 'choice', prompt: 'Czym zastąpisz „las gafas”?', options: ['las', 'los', 'la', 'lo'], answer: 'las', esOptions: true, explain: 'las → las.', theory: 't1' },
    { type: 'sort', prompt: 'lo czy la?', categories: ['lo', 'la'], items: [['el sombrero', 'lo'], ['la blusa', 'la'], ['el bolso', 'lo'], ['la chaqueta', 'la'], ['el vestido', 'lo'], ['la bufanda', 'la']], explain: 'el → lo, la → la.', theory: 't1' },
    { type: 'gap', sentence: 'Esta falda me queda muy bien. Me ___ llevo.', options: ['la', 'lo', 'las'], answer: ['la'], explain: 'la falda → la (zeszyt, ćw. 10).', theory: 't2' },
    { type: 'gap', sentence: 'El vestido del escaparate es precioso. ¿Me ___ puedo probar?', options: ['lo', 'la', 'los'], answer: ['lo'], explain: 'el vestido → lo.', theory: 't2' },
    { type: 'gap', sentence: 'Estos pantalones me están un poco pequeños. ¿___ tiene en una talla más grande?', options: ['Los', 'Las', 'Lo'], answer: ['Los'], explain: 'los pantalones → Los.', theory: 't2' },
    { type: 'gap', sentence: 'Esas sandalias son muy bonitas. ¿Puedo ver___?', options: ['las', 'los', 'la'], answer: ['las'], explain: 'las sandalias → verlas (doklejone).', theory: 't2' },
    { type: 'gap', sentence: 'Estos zapatos me están un poco grandes. ¿Puedo cambiar___?', options: ['los', 'las', 'lo'], answer: ['los'], explain: 'los zapatos → cambiarlos.', theory: 't2' },
    { type: 'gap', sentence: '– Quería un vestido. – ¿Cómo ___ quiere, largo o corto?', options: ['lo', 'la', 'le'], answer: ['lo'], explain: 'un vestido → lo.', theory: 't2' },
    { type: 'gap', sentence: 'Me gusta esta camiseta de rayas. ¿Puedo ___?', options: ['probármela', 'probármelo', 'próbarmela'], answer: ['probármela'], explain: 'la camiseta → -la; akcent na „á”.', theory: 't3' },
    { type: 'gap', sentence: 'Este vestido es muy bonito. ¿Puedo ___?', options: ['probármelo', 'probármela', 'próbarmelo'], answer: ['probármelo'], explain: 'el vestido → -lo (powtórka, ćw. 16).', theory: 't3' },
    { type: 'pairs', prompt: 'Połącz pełne zdanie z krótszym.', pairs: [['Me llevo este vestido.', 'Me lo llevo.'], ['Me llevo esta blusa.', 'Me la llevo.'], ['Me llevo estos pantalones.', 'Me los llevo.'], ['Me llevo estas gafas.', 'Me las llevo.']], explain: 'este → lo, esta → la, estos → los, estas → las.', theory: 't3' },
    { type: 'choice', prompt: 'Zagadka: „Lo llevamos en la playa o en la piscina.”', say: 'Lo llevamos en la playa o en la piscina.', options: ['el bañador', 'la camiseta'], answer: 'el bañador', esOptions: true, explain: '„Lo” – rzecz rodzaju męskiego → el bañador.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „La visten las mujeres y puede ser larga o corta.”', say: 'La visten las mujeres y puede ser larga o corta.', options: ['la falda', 'el vestido'], answer: 'la falda', esOptions: true, explain: '„La” i „larga/corta” – rodzaj żeński → la falda.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „Nos los ponemos en los pies, pueden ser de tacón.”', say: 'Nos los ponemos en los pies, pueden ser de tacón.', options: ['los zapatos', 'las zapatillas'], answer: 'los zapatos', esOptions: true, explain: '„los” → rodzaj męski l. mn. → los zapatos.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Biorę je.” (los pantalones)', answer: 'Me los llevo.', extra: ['las'], explain: 'los pantalones → los.', theory: 't3' },
    { type: 'type', prompt: 'Napisz krócej: „Me llevo esta chaqueta.”', answer: ['Me la llevo.'], explain: 'esta chaqueta → la.', theory: 't3' },
  ],
  test: [
    { type: 'choice', prompt: 'Czym zastąpisz „los zapatos”?', options: ['los', 'las', 'lo'], answer: 'los', esOptions: true, explain: 'los → los.', theory: 't1' },
    { type: 'gap', sentence: 'Me gusta esta blusa. Me ___ llevo.', options: ['la', 'lo', 'las'], answer: ['la'], explain: 'la blusa → la.', theory: 't2' },
    { type: 'gap', sentence: '¿Te gusta el abrigo? – Sí, ___ compro.', options: ['lo', 'la', 'le'], answer: ['lo'], explain: 'el abrigo → lo.', theory: 't1' },
    { type: 'gap', sentence: 'Estas camisetas son para mi hija. Si no le quedan bien, ¿___ puedo cambiar?', options: ['las', 'los', 'la'], answer: ['las'], explain: 'las camisetas → las (podręcznik, ćw. 15).', theory: 't2' },
    { type: 'gap', sentence: 'Estos zapatos son muy bonitos. ¿Puedo ver___?', options: ['los', 'las', 'lo'], answer: ['los'], explain: 'los zapatos → verlos.', theory: 't2' },
    { type: 'gap', sentence: 'Me encanta esta falda. ¿Puedo ___?', options: ['probármela', 'probármelo', 'probármelas'], answer: ['probármela'], explain: 'la falda → probármela.', theory: 't3' },
    { type: 'gap', sentence: 'Me gustan estas gafas. ¿Puedo ___?', options: ['probármelas', 'probármelos', 'probármela'], answer: ['probármelas'], explain: 'las gafas → probármelas.', theory: 't3' },
    { type: 'choice', prompt: 'Zagadka: „Nos lo ponemos en la cabeza y nos protege del frío.”', say: 'Nos lo ponemos en la cabeza y nos protege del frío.', options: ['el gorro', 'la bufanda'], answer: 'el gorro', esOptions: true, explain: '„lo” → rodzaj męski → el gorro.', theory: 't1' },
    { type: 'choice', prompt: 'Zagadka: „Nos las ponemos en los pies en invierno para calentarnos.”', say: 'Nos las ponemos en los pies en invierno para calentarnos.', options: ['las botas', 'las sandalias'], answer: 'las botas', esOptions: true, explain: 'Zimą, dla ciepła → las botas.', theory: 't1' },
    { type: 'sort', prompt: 'los czy las?', categories: ['los', 'las'], items: [['los vaqueros', 'los'], ['las botas', 'las'], ['los calcetines', 'los'], ['las gafas', 'las']], explain: 'los → los, las → las.', theory: 't1' },
    { type: 'type', prompt: 'Napisz krócej: „Me llevo este jersey.”', answer: ['Me lo llevo.'], explain: 'este jersey → lo.', theory: 't3' },
    { type: 'order', prompt: 'Ułóż: „Mogę je zobaczyć?” (las sandalias)', answer: '¿Puedo verlas?', extra: ['los'], explain: 'Doklejone: verlas.', theory: 't2' },
  ],
};
