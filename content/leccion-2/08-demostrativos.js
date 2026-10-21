export default {
  id: 'demostrativos',
  kind: 'lekcja',
  title: 'Este, ese, aquel',
  subtitle: 'blisko, dalej, daleko',
  vocab: [
    { es: 'este', pl: 'ten (przy mnie)', emoji: '👇', group: 'Blisko mnie' },
    { es: 'esta', pl: 'ta (przy mnie)', emoji: '👇', group: 'Blisko mnie' },
    { es: 'estos', pl: 'ci, te (przy mnie)', emoji: '👇', group: 'Blisko mnie' },
    { es: 'estas', pl: 'te (przy mnie)', emoji: '👇', group: 'Blisko mnie' },
    { es: 'ese', pl: 'ten (przy tobie)', emoji: '👉', group: 'Blisko ciebie' },
    { es: 'esa', pl: 'ta (przy tobie)', emoji: '👉', group: 'Blisko ciebie' },
    { es: 'aquel', pl: 'tamten (daleko)', emoji: '🔭', group: 'Daleko' },
    { es: 'aquella', pl: 'tamta (daleko)', emoji: '🔭', group: 'Daleko' },
    { es: 'aquí', pl: 'tutaj', emoji: '📍', group: 'Gdzie?' },
    { es: 'ahí', pl: 'tam (przy tobie)', emoji: '👉', group: 'Gdzie?' },
    { es: 'allí', pl: 'tam (daleko)', emoji: '🏔️', group: 'Gdzie?' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Trzy odległości',
      html: `
        <p>Po polsku mamy „ten” i „tamten”. Po hiszpańsku są <b>trzy</b> odległości:</p>
        <table class="grid">
          <tr><th>słowo</th><th>gdzie jest rzecz?</th><th>miejsce</th></tr>
          <tr><td><b>este</b> bolso</td><td>przy mnie (mówiącym)</td><td>aquí – tutaj</td></tr>
          <tr><td><b>ese</b> bolso</td><td>przy tobie (rozmówcy) albo trochę dalej</td><td>ahí – tam</td></tr>
          <tr><td><b>aquel</b> bolso</td><td>daleko od nas obu</td><td>allí – tam daleko</td></tr>
        </table>
        <p>💡 Obrazek z podręcznika: dziewczyna trzyma swoją torbę – <i>este bolso</i>; koleżanka obok trzyma swoją – <i>ese bolso</i>; torba leży daleko na półce – <i>aquel bolso</i>.</p>`,
      examples: [
        { es: 'Me gusta este bolso.', pl: 'Podoba mi się ta torebka (przy mnie).' },
        { es: '¿Cuánto cuesta ese bolso?', pl: 'Ile kosztuje ta torebka (przy tobie)?' },
        { es: 'Aquel bolso es muy caro.', pl: 'Tamta torebka (daleko) jest bardzo droga.' },
      ],
    },
    {
      id: 't2',
      title: 'Wszystkie formy',
      html: `
        <p>Każde słowo dopasowuje się do rzeczownika – rodzaj i liczba:</p>
        <table class="grid">
          <tr><th></th><th>blisko mnie</th><th>blisko ciebie</th><th>daleko</th></tr>
          <tr><td>m. lp.</td><td>este bolso</td><td>ese bolso</td><td>aquel bolso</td></tr>
          <tr><td>ż. lp.</td><td>esta blusa</td><td>esa blusa</td><td>aquella blusa</td></tr>
          <tr><td>m. lm.</td><td>estos bolsos</td><td>esos bolsos</td><td>aquellos bolsos</td></tr>
          <tr><td>ż. lm.</td><td>estas blusas</td><td>esas blusas</td><td>aquellas blusas</td></tr>
        </table>
        <p>⚠️ Męski l. poj. <b>nie</b> ma -o: <b>este</b>, <b>ese</b>, <b>aquel</b> (nie „esto”, „eso”).</p>`,
      examples: [
        { es: 'esta camiseta', pl: 'ta koszulka (przy mnie)' },
        { es: 'esos pantalones', pl: 'te spodnie (przy tobie)' },
        { es: 'aquellas gafas', pl: 'tamte okulary (daleko)' },
      ],
    },
    {
      id: 't3',
      title: 'Bez rzeczownika: „Me gusta esa.”',
      html: `
        <p>Gdy wiadomo, o czym mowa, rzeczownik można pominąć:</p>
        <ul>
          <li>– ¿Qué sudadera te gusta más, esta, esa o aquella? – Me gusta más <b>esa</b>.</li>
          <li>– ¿Cuáles son tus gafas? – <b>Estas</b>.</li>
        </ul>
        <p>💡 Rzeczy, które ktoś trzyma w rękach (<i>en las manos</i>), są przy nim → <b>esas</b> gafas que tienes en las manos.</p>`,
      examples: [
        { es: 'Me gusta más esa.', pl: 'Bardziej podoba mi się ta (przy tobie).' },
        { es: 'Prefiero aquellos amarillos.', pl: 'Wolę tamte żółte.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Gdzie jest rzecz, gdy mówisz „este bolso”?', say: 'este bolso', options: ['przy mnie', 'przy tobie', 'daleko od nas'], answer: 'przy mnie', explain: 'este = blisko mówiącego.', theory: 't1' },
    { type: 'choice', prompt: 'Gdzie jest rzecz, gdy mówisz „aquel abrigo”?', say: 'aquel abrigo', options: ['daleko od nas', 'przy mnie', 'przy tobie'], answer: 'daleko od nas', explain: 'aquel = daleko.', theory: 't1' },
    { type: 'pairs', pairs: [['aquí', 'tutaj'], ['ahí', 'tam (przy tobie)'], ['allí', 'tam (daleko)']], explain: 'aquí – este, ahí – ese, allí – aquel.', theory: 't1' },
    { type: 'gap', sentence: '___ falda', hint: '(przy mnie)', options: ['esta', 'este', 'estas'], answer: ['esta'], explain: 'falda (ż. lp.), blisko mnie → esta.', theory: 't2' },
    { type: 'gap', sentence: '___ zapatos', hint: '(przy mnie)', options: ['estos', 'estas', 'este'], answer: ['estos'], explain: 'zapatos (m. lm.), blisko mnie → estos.', theory: 't2' },
    { type: 'gap', sentence: '___ camisa', hint: '(przy tobie)', options: ['esa', 'ese', 'esas'], answer: ['esa'], explain: 'camisa (ż. lp.), przy tobie → esa.', theory: 't2' },
    { type: 'gap', sentence: '___ pantalones', hint: '(przy tobie)', options: ['esos', 'esas', 'ese'], answer: ['esos'], explain: 'pantalones (m. lm.), przy tobie → esos.', theory: 't2' },
    { type: 'gap', sentence: '___ abrigo', hint: '(daleko)', options: ['aquel', 'aquella', 'aquellos'], answer: ['aquel'], explain: 'abrigo (m. lp.), daleko → aquel.', theory: 't2' },
    { type: 'gap', sentence: '___ gafas', hint: '(daleko)', options: ['aquellas', 'aquellos', 'aquella'], answer: ['aquellas'], explain: 'gafas (ż. lm.), daleko → aquellas.', theory: 't2' },
    { type: 'sort', prompt: 'Gdzie jest rzecz?', categories: ['przy mnie', 'przy tobie', 'daleko'], items: [['este', 'przy mnie'], ['estas', 'przy mnie'], ['esa', 'przy tobie'], ['esos', 'przy tobie'], ['aquel', 'daleko'], ['aquellas', 'daleko']], explain: 'est- = blisko mnie, es- = przy tobie, aquel- = daleko.', theory: 't1' },
    { type: 'table', title: 'el bolso', prompt: 'Wpisz właściwe słowo.', rows: [['przy mnie', 'este'], ['przy tobie', 'ese'], ['daleko', 'aquel']], explain: 'Rodzaj męski l. poj.: este, ese, aquel.', theory: 't2' },
    { type: 'table', title: 'las blusas', prompt: 'Wpisz właściwe słowo.', rows: [['przy mnie', 'estas'], ['przy tobie', 'esas'], ['daleko', 'aquellas']], explain: 'Rodzaj żeński l. mn.: estas, esas, aquellas.', theory: 't2' },
    { type: 'gap', sentence: '¿Qué zapatos te gustan, estos rojos, esos azules o aquellos amarillos? – Prefiero ___ amarillos.', options: ['aquellos', 'estos', 'esos'], answer: ['aquellos'], explain: 'Żółte stoją najdalej → aquellos (podręcznik, ćw. 18).', theory: 't3' },
    { type: 'gap', sentence: '___ gafas que tienes en las manos me gustan mucho.', options: ['Esas', 'Estas', 'Aquellas'], answer: ['Esas'], explain: 'Okulary są w TWOICH rękach → przy tobie → esas.', theory: 't3' },
    { type: 'gap', sentence: '___ gorro de allí es muy bonito.', options: ['Aquel', 'Este', 'Ese'], answer: ['Aquel'], explain: 'allí = tam daleko → aquel.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „allí”?', say: 'allí', options: ['tam (daleko)', 'tutaj', 'tam (przy tobie)'], answer: 'tam (daleko)', explain: 'aquí – tutaj, ahí – przy tobie, allí – daleko.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Podoba mi się ta koszulka w paski.” (przy mnie)', answer: 'Me gusta esta camiseta de rayas.', extra: ['este'], explain: 'camiseta (ż.) → esta.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: te buty (przy mnie)', answer: ['estos zapatos'], explain: 'zapatos (m. lm.) → estos.', theory: 't2' },
  ],
  test: [
    { type: 'gap', sentence: '___ chaqueta', hint: '(przy mnie)', options: ['esta', 'este', 'esa'], answer: ['esta'], explain: 'ż. lp., przy mnie → esta.', theory: 't2' },
    { type: 'gap', sentence: '___ vestido', hint: '(przy tobie)', options: ['ese', 'esa', 'eso'], answer: ['ese'], explain: 'm. lp., przy tobie → ese.', theory: 't2' },
    { type: 'gap', sentence: '___ botas', hint: '(daleko)', options: ['aquellas', 'aquellos', 'esas'], answer: ['aquellas'], explain: 'ż. lm., daleko → aquellas.', theory: 't2' },
    { type: 'gap', sentence: '___ sombreros', hint: '(przy mnie)', options: ['estos', 'estas', 'esos'], answer: ['estos'], explain: 'm. lm., przy mnie → estos.', theory: 't2' },
    { type: 'gap', sentence: '¿Qué sudadera te gusta más, esta, esa o aquella? – Me gusta más ___.', hint: '(ta przy tobie)', options: ['esa', 'esta', 'aquella'], answer: ['esa'], explain: 'Przy tobie → esa.', theory: 't3' },
    { type: 'gap', sentence: '¿Cuáles son tus gafas? – ___.', hint: '(te przy mnie)', options: ['Estas', 'Esas', 'Aquellas'], answer: ['Estas'], explain: 'Przy mnie → estas.', theory: 't3' },
    { type: 'choice', prompt: 'Co znaczy „aquí”?', say: 'aquí', options: ['tutaj', 'tam (daleko)', 'tam (przy tobie)'], answer: 'tutaj', explain: 'aquí = tutaj.', theory: 't1' },
    { type: 'sort', prompt: 'Gdzie jest rzecz?', categories: ['przy mnie', 'przy tobie', 'daleko'], items: [['esta', 'przy mnie'], ['ese', 'przy tobie'], ['aquellos', 'daleko']], explain: 'est- / es- / aquel-.', theory: 't1' },
    { type: 'table', title: 'los zapatos', prompt: 'Wpisz właściwe słowo.', rows: [['przy mnie', 'estos'], ['przy tobie', 'esos'], ['daleko', 'aquellos']], explain: 'Rodzaj męski l. mn.: estos, esos, aquellos.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: tamta spódnica (daleko)', answer: ['aquella falda'], explain: 'falda (ż.), daleko → aquella.', theory: 't2' },
    { type: 'order', prompt: 'Ułóż: „Ile kosztuje ta torebka?” (przy tobie)', answer: '¿Cuánto cuesta ese bolso?', extra: ['esa'], explain: 'bolso (m.) → ese.', theory: 't2' },
    { type: 'choice', prompt: 'Który zapis jest poprawny?', options: ['este bolso', 'esto bolso', 'esta bolso'], answer: 'este bolso', esOptions: true, explain: 'Męski l. poj.: este (bez -o).', theory: 't2' },
  ],
};
