export default {
  id: 'indefinidos',
  kind: 'lekcja',
  title: 'Algún, ningún, algo, nada',
  subtitle: 'zaimki nieokreślone',
  vocab: [
    { es: 'algún / alguno', pl: 'jakiś', emoji: '❔', group: 'Coś jest' },
    { es: 'alguna', pl: 'jakaś', emoji: '❔', group: 'Coś jest' },
    { es: 'algunos', pl: 'jacyś, kilka (m.)', emoji: '❔', group: 'Coś jest' },
    { es: 'algunas', pl: 'jakieś, kilka (ż.)', emoji: '❔', group: 'Coś jest' },
    { es: 'algo', pl: 'coś', emoji: '📦', group: 'Coś jest' },
    { es: 'ningún / ninguno', pl: 'żaden', emoji: '🚫', group: 'Niczego nie ma' },
    { es: 'ninguna', pl: 'żadna', emoji: '🚫', group: 'Niczego nie ma' },
    { es: 'nada', pl: 'nic', emoji: '🕳️', group: 'Niczego nie ma' },
    { es: '¿Algo más?', pl: 'Coś jeszcze?', emoji: '➕', group: 'W sklepie' },
    { es: 'Nada más, gracias.', pl: 'Nic więcej, dziękuję.', emoji: '🙏', group: 'W sklepie' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Jakiś / żaden',
      html: `
        <table class="grid">
          <tr><th>hiszpański</th><th>polski</th><th>hiszpański</th><th>polski</th></tr>
          <tr><td>algún / alguno</td><td>jakiś</td><td>ningún / ninguno</td><td>żaden</td></tr>
          <tr><td>alguna</td><td>jakaś</td><td>ninguna</td><td>żadna</td></tr>
          <tr><td>algunos</td><td>jacyś</td><td></td><td></td></tr>
          <tr><td>algunas</td><td>jakieś</td><td></td><td></td></tr>
          <tr><td>algo</td><td>coś</td><td>nada</td><td>nic</td></tr>
        </table>
        <p>Dopasowują się do rzeczownika: <i>alguna camisa</i>, <i>algunos zapatos</i>, <i>algunas blusas</i>.</p>
        <p>💡 <b>ninguno / ninguna</b> prawie nigdy nie ma liczby mnogiej.</p>`,
      examples: [
        { es: 'Quería ver algunas camisas.', pl: 'Chciałbym zobaczyć jakieś koszule.' },
        { es: '¿Necesitas algo más?', pl: 'Potrzebujesz czegoś jeszcze?' },
        { es: 'No, nada más, gracias.', pl: 'Nie, nic więcej, dziękuję.' },
      ],
    },
    {
      id: 't2',
      title: 'Algún czy alguno?',
      html: `
        <p>To najczęstsza pułapka:</p>
        <ul>
          <li><b>algún / ningún</b> – tuż <b>przed</b> rzeczownikiem rodzaju męskiego l. poj.: <i>¿Tienen <b>algún</b> abrigo verde?</i></li>
          <li><b>alguno / ninguno</b> – <b>samodzielnie</b>, bez rzeczownika: <i>¿Te gusta <b>alguno</b>? – No me gusta <b>ninguno</b>.</i></li>
        </ul>
        <p>❌ <s>¿Tienen alguno vestido elegante?</s> → ✅ ¿Tienen <b>algún</b> vestido elegante?</p>
        <p>❌ <s>No me gusta ningún.</s> → ✅ No me gusta <b>ninguno</b>.</p>
        <p>Przykładowy dialog z podręcznika:</p>
        <p lang="es"><i>–¿Tienen algún abrigo de color verde?<br>–Sí, tenemos algunos. Mira, ¿te gusta alguno de estos?<br>–La verdad es que no me gusta ninguno.<br>–¿Quiere ver algo más?<br>–No, nada más, gracias.</i></p>`,
      examples: [
        { es: '¿Tienen algún abrigo de color verde?', pl: 'Mają państwo jakiś zielony płaszcz?' },
        { es: 'Mira, ¿te gusta alguno de estos?', pl: 'Popatrz, podoba ci się któryś z tych?' },
        { es: 'La verdad es que no me gusta ninguno.', pl: 'Prawdę mówiąc, nie podoba mi się żaden.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „algo”?', say: 'algo', options: ['coś', 'nic', 'jakiś', 'żaden'], answer: 'coś', explain: 'algo = coś, nada = nic.', theory: 't1' },
    { type: 'pairs', pairs: [['algo', 'coś'], ['nada', 'nic'], ['alguna', 'jakaś'], ['ninguno', 'żaden']], explain: 'Powtórz słówka z fiszek.', theory: 't1' },
    { type: 'gap', sentence: '¿Tienen ___ abrigo de color verde?', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'Przed rzeczownikiem m. lp. → algún.', theory: 't2' },
    { type: 'gap', sentence: 'Mira, ¿te gusta ___ de estos?', options: ['alguno', 'algún', 'algo'], answer: ['alguno'], explain: 'Bez rzeczownika → alguno.', theory: 't2' },
    { type: 'gap', sentence: 'La verdad es que no me gusta ___.', options: ['ninguno', 'ningún', 'nada de'], answer: ['ninguno'], explain: 'Samodzielnie → ninguno.', theory: 't2' },
    { type: 'gap', sentence: 'Quería ver ___ camisas.', options: ['algunas', 'algunos', 'algún'], answer: ['algunas'], explain: 'camisas (ż. lm.) → algunas (zeszyt, ćw. 13).', theory: 't1' },
    { type: 'gap', sentence: '¿Prefieres ___ color especial?', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'color (m. lp.) przed rzeczownikiem → algún.', theory: 't2' },
    { type: 'gap', sentence: 'Me gustaría comprarme ___ traje elegante.', options: ['algún', 'alguna', 'algunos'], answer: ['algún'], explain: 'traje (m. lp.) → algún.', theory: 't2' },
    { type: 'gap', sentence: 'No puedo encontrar vestidos elegantes en ___ sitio.', options: ['ningún', 'ninguno', 'nada'], answer: ['ningún'], explain: 'Przed „sitio” (m. lp.) → ningún.', theory: 't2' },
    { type: 'gap', sentence: '¿Por qué no miras en ___ tienda de la segunda planta?', options: ['alguna', 'algún', 'algunas'], answer: ['alguna'], explain: 'tienda (ż. lp.) → alguna.', theory: 't1' },
    { type: 'gap', sentence: '– ¿Necesitas algo más? – No, ___ más, gracias.', options: ['nada', 'ninguno', 'algo'], answer: ['nada'], explain: 'nic więcej → nada más.', theory: 't1' },
    { type: 'gap', sentence: '– ¿Quieres ver ___ cosa más? – Sí, necesito también unas botas de montaña.', options: ['alguna', 'algún', 'algo'], answer: ['alguna'], explain: 'cosa (ż.) → alguna.', theory: 't1' },
    { type: 'choice', prompt: 'W zdaniu „¿Tienen alguno vestido elegante en la talla 38?” jest błąd. Poprawnie:', options: ['¿Tienen algún vestido elegante en la talla 38?', '¿Tienen alguna vestido elegante en la talla 38?', '¿Tienen algunos vestido elegante en la talla 38?'], answer: '¿Tienen algún vestido elegante en la talla 38?', esOptions: true, explain: 'Przed rzeczownikiem → algún (zeszyt, ćw. 16).', theory: 't2' },
    { type: 'choice', prompt: 'W zdaniu „No me gusta ningún.” jest błąd. Poprawnie:', options: ['No me gusta ninguno.', 'No me gusta ninguna.', 'No me gusta nada ningún.'], answer: 'No me gusta ninguno.', esOptions: true, explain: 'Bez rzeczownika → ninguno (zeszyt, ćw. 16).', theory: 't2' },
    { type: 'gap', sentence: 'Busco ___ jersey gris.', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'algún + rzeczownik (jersey, m. lp.).', theory: 't2' },
    { type: 'order', prompt: 'Ułóż: „Nic więcej, dziękuję.”', answer: 'Nada más, gracias.', extra: ['algo'], explain: 'nada más = nic więcej.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Coś jeszcze?', answer: ['¿Algo más?', 'Algo más'], explain: '¿Algo más? – częste pytanie sprzedawcy.', theory: 't1' },
  ],
  test: [
    { type: 'gap', sentence: '¿Tienen ___ bañador negro?', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'Przed rzeczownikiem m. lp. → algún.', theory: 't2' },
    { type: 'gap', sentence: '– ¿Quieres alguna cosa más? – Sí, busco ___ bañador negro.', options: ['algún', 'alguno', 'ningún'], answer: ['algún'], explain: 'Przed „bañador” → algún (powtórka, ćw. 19).', theory: 't2' },
    { type: 'gap', sentence: 'Busco unas gafas de sol rojas. ¿Tenéis ___?', options: ['algunas', 'algunos', 'alguna'], answer: ['algunas'], explain: 'gafas (ż. lm.), bez rzeczownika → algunas.', theory: 't1' },
    { type: 'gap', sentence: 'Mira, ¿te gusta ___ abrigo de estos?', options: ['algún', 'alguno', 'algo'], answer: ['algún'], explain: 'Przed „abrigo” → algún.', theory: 't2' },
    { type: 'gap', sentence: 'Lo siento, no tenemos ___ en este color.', options: ['ninguno', 'ningún', 'nada de'], answer: ['ninguno'], explain: 'Samodzielnie → ninguno.', theory: 't2' },
    { type: 'gap', sentence: '– ¿Necesitas algo más? – No, ___ más. Gracias.', options: ['nada', 'ninguno', 'ningún'], answer: ['nada'], explain: 'nada más = nic więcej (powtórka, ćw. 13).', theory: 't1' },
    { type: 'gap', sentence: '¿Necesitas ___? – Sí, quiero alguna cosa para regalar.', options: ['algo', 'alguno', 'nada'], answer: ['algo'], explain: 'algo = coś.', theory: 't1' },
    { type: 'gap', sentence: '¿Has encontrado ___ traje bonito?', options: ['algún', 'alguno', 'alguna'], answer: ['algún'], explain: 'Przed „traje” → algún.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „No me gusta ninguno”?', say: 'No me gusta ninguno.', options: ['Nie podoba mi się żaden.', 'Nie podoba mi się nic.', 'Podoba mi się każdy.'], answer: 'Nie podoba mi się żaden.', explain: 'ninguno = żaden.', theory: 't2' },
    { type: 'pairs', pairs: [['algunos', 'jacyś'], ['algunas', 'jakieś'], ['ninguna', 'żadna'], ['nada', 'nic']], explain: 'Powtórz formy.', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Nic więcej, dziękuję.', answer: ['Nada más, gracias.', 'No, nada más, gracias.'], explain: 'nada más = nic więcej.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Macie jakiś zielony płaszcz?”', answer: '¿Tienen algún abrigo verde?', extra: ['alguno'], explain: 'algún + abrigo.', theory: 't2' },
  ],
};
