export default {
  id: 'zwrotne',
  kind: 'fundament',
  title: 'Czasowniki zwrotne i nieregularne „yo”',
  subtitle: 'me pongo, te pones, visto',
  vocab: [
    { es: 'ponerse', pl: 'zakładać (na siebie)', emoji: '🧥', group: 'Czasowniki z „się”' },
    { es: 'quitarse', pl: 'zdejmować (z siebie)', emoji: '🧦', group: 'Czasowniki z „się”' },
    { es: 'vestirse', pl: 'ubierać się', emoji: '👗', group: 'Czasowniki z „się”' },
    { es: 'llamarse', pl: 'nazywać się', emoji: '🏷️', group: 'Czasowniki z „się”' },
    { es: 'me pongo', pl: 'zakładam', emoji: '🙋', group: 'Formy' },
    { es: 'te pones', pl: 'zakładasz', emoji: '👉', group: 'Formy' },
    { es: 'se pone', pl: 'zakłada', emoji: '👩', group: 'Formy' },
    { es: 'tengo', pl: 'mam (tener)', emoji: '🤲', group: 'Nieregularne „yo”' },
    { es: 'hago', pl: 'robię (hacer)', emoji: '🛠️', group: 'Nieregularne „yo”' },
    { es: 'salgo', pl: 'wychodzę (salir)', emoji: '🚪', group: 'Nieregularne „yo”' },
    { es: 'visto', pl: 'ubieram się, noszę (vestir)', emoji: '👔', group: 'Nieregularne „yo”' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Czasowniki z „się”: ponerse',
      html: `
        <p>Niektóre czasowniki mają na końcu <b>-se</b> – to jak polskie „się”: <i>ponerse</i> = zakładać (na siebie), <i>llamarse</i> = nazywać się.</p>
        <p>Przy odmianie <b>-se</b> odpada i zamienia się w małe słówko <b>przed</b> czasownikiem:</p>
        <table class="grid">
          <tr><th>osoba</th><th>zaimek</th><th>ponerse</th></tr>
          <tr><td>yo</td><td>me</td><td><b>me</b> pongo</td></tr>
          <tr><td>tú</td><td>te</td><td><b>te</b> pones</td></tr>
          <tr><td>él / ella / usted</td><td>se</td><td><b>se</b> pone</td></tr>
          <tr><td>nosotros</td><td>nos</td><td><b>nos</b> ponemos</td></tr>
          <tr><td>vosotros</td><td>os</td><td><b>os</b> ponéis</td></tr>
          <tr><td>ellos / ustedes</td><td>se</td><td><b>se</b> ponen</td></tr>
        </table>
        <p>💡 Znasz to już: <i><b>Me</b> llamo Kuba</i> = Nazywam się Kuba.</p>`,
      examples: [
        { es: 'Me pongo un jersey.', pl: 'Zakładam sweter.' },
        { es: '¿Te pones el abrigo?', pl: 'Zakładasz płaszcz?' },
        { es: 'Nos ponemos las botas.', pl: 'Zakładamy kozaki.' },
      ],
    },
    {
      id: 't2',
      title: 'Nieregularne „yo”: pongo, tengo, hago, salgo',
      html: `
        <p>Kilka ważnych czasowników ma dziwną formę <b>tylko przy „yo”</b> – reszta odmienia się normalnie:</p>
        <table class="grid">
          <tr><th>bezokolicznik</th><th>yo</th><th>tú</th></tr>
          <tr><td>poner (kłaść)</td><td><b>pongo</b></td><td>pones</td></tr>
          <tr><td>tener (mieć)</td><td><b>tengo</b></td><td>tienes</td></tr>
          <tr><td>hacer (robić)</td><td><b>hago</b></td><td>haces</td></tr>
          <tr><td>salir (wychodzić)</td><td><b>salgo</b></td><td>sales</td></tr>
        </table>
        <p>❌ <s>me pono</s> → ✅ <b>me pongo</b> (ten błąd jest w zeszycie, ćw. 16).</p>`,
      examples: [
        { es: 'Cuando voy a la piscina, me pongo un bañador.', pl: 'Kiedy idę na basen, zakładam strój kąpielowy.' },
        { es: 'Tengo un examen.', pl: 'Mam egzamin.' },
        { es: 'Salgo al cine con un amigo.', pl: 'Wychodzę do kina z kolegą.' },
      ],
    },
    {
      id: 't3',
      title: 'Vestir: e → i',
      html: `
        <p><b>vestir</b> (ubierać się, mieć na sobie) zmienia <b>e</b> na <b>i</b> – ale nie przy nosotros i vosotros:</p>
        <table class="grid">
          <tr><th>osoba</th><th>vestir</th></tr>
          <tr><td>yo</td><td>v<b>i</b>sto</td></tr>
          <tr><td>tú</td><td>v<b>i</b>stes</td></tr>
          <tr><td>él / ella / usted</td><td>v<b>i</b>ste</td></tr>
          <tr><td>nosotros</td><td>v<b>e</b>stimos</td></tr>
          <tr><td>vosotros</td><td>v<b>e</b>stís</td></tr>
          <tr><td>ellos / ustedes</td><td>v<b>i</b>sten</td></tr>
        </table>
        <p>💡 Zapamiętaj kształt: <b>i</b>, <b>i</b>, <b>i</b>, e, e, <b>i</b>. Uwaga na pisownię: ve<b>s</b>tís (nie „vetís”).</p>`,
      examples: [
        { es: 'Tú siempre vistes muy bien.', pl: 'Ty zawsze ubierasz się bardzo dobrze.' },
        { es: 'Vosotras vestís unas blusas muy elegantes.', pl: 'Wy macie na sobie bardzo eleganckie bluzki.' },
      ],
    },
    {
      id: 't4',
      title: 'Po „me gusta”, „prefiero”: ponerme, ponernos…',
      html: `
        <p>Gdy czasownik zwrotny stoi w <b>bezokoliczniku</b> (po <i>me gusta, prefiero, puedo, quiero</i>), jego końcówka <b>-se</b> też się zmienia i pasuje do osoby:</p>
        <table class="grid">
          <tr><th>kto?</th><th>bezokolicznik</th></tr>
          <tr><td>yo</td><td>poner<b>me</b></td></tr>
          <tr><td>tú</td><td>poner<b>te</b></td></tr>
          <tr><td>él / ella</td><td>poner<b>se</b></td></tr>
          <tr><td>nosotros</td><td>poner<b>nos</b></td></tr>
          <tr><td>vosotros</td><td>poner<b>os</b></td></tr>
        </table>
        <p>❌ <s>A nosotros nos gusta ponerse la ropa deportiva.</s><br>✅ A nosotros nos gusta poner<b>nos</b> la ropa deportiva.</p>
        <p>💡 Zasada: <b>nos</b> gusta → poner<b>nos</b>, <b>me</b> gusta → poner<b>me</b>. To samo słówko na początku i na końcu.</p>`,
      examples: [
        { es: 'Prefiero ponerme unos pantalones cómodos.', pl: 'Wolę włożyć wygodne spodnie.' },
        { es: 'A nosotros nos gusta ponernos la ropa deportiva.', pl: 'Lubimy zakładać ubrania sportowe.' },
        { es: '¿Te gusta ponerte gorros?', pl: 'Lubisz zakładać czapki?' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „ponerse”?', say: 'ponerse', options: ['zakładać (na siebie)', 'zdejmować', 'kupować', 'nosić'], answer: 'zakładać (na siebie)', explain: 'ponerse = zakładać na siebie; quitarse = zdejmować.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „Me llamo Kuba”?', say: 'Me llamo Kuba.', options: ['Nazywam się Kuba.', 'Dzwonię do Kuby.', 'Lubię Kubę.'], answer: 'Nazywam się Kuba.', explain: 'llamarse = nazywać się; me llamo = nazywam się.', theory: 't1' },
    { type: 'table', title: 'ponerse', prompt: 'Odmień „ponerse” (zakładać).', rows: [['yo', 'me pongo'], ['tú', 'te pones'], ['él / ella', 'se pone'], ['nosotros', 'nos ponemos'], ['vosotros', 'os ponéis'], ['ellos / ellas', 'se ponen']], explain: 'me/te/se/nos/os/se + pongo, pones, pone, ponemos, ponéis, ponen.', theory: 't1' },
    { type: 'gap', sentence: 'Yo ___ un jersey.', options: ['me pongo', 'me pono', 'se pone'], answer: ['me pongo'], explain: 'yo → me pongo (nieregularne „yo”, nie „me pono”).', theory: 't2' },
    { type: 'gap', sentence: 'Tú ___ unas botas.', options: ['te pones', 'te pongo', 'se ponen'], answer: ['te pones'], explain: 'tú → te pones.', theory: 't1' },
    { type: 'gap', sentence: 'Ella ___ un vestido.', options: ['se pone', 'me pone', 'se pongo'], answer: ['se pone'], explain: 'ella → se pone.', theory: 't1' },
    { type: 'gap', sentence: 'Nosotros ___ el abrigo.', hint: '(ponerse)', answer: ['nos ponemos'], explain: 'nosotros → nos ponemos.', theory: 't1' },
    { type: 'gap', sentence: 'Ellos ___ gorros.', hint: '(ponerse)', answer: ['se ponen'], explain: 'ellos → se ponen.', theory: 't1' },
    { type: 'gap', sentence: 'Vosotras ___ sandalias.', hint: '(ponerse)', answer: ['os ponéis'], explain: 'vosotras → os ponéis (z akcentem).', theory: 't1' },
    { type: 'pairs', prompt: 'Połącz bezokolicznik z formą „yo”.', pairs: [['poner', 'pongo'], ['tener', 'tengo'], ['hacer', 'hago'], ['salir', 'salgo'], ['vestir', 'visto']], explain: 'Te formy „yo” trzeba zapamiętać.', theory: 't2' },
    { type: 'gap', sentence: 'Yo ___ un examen.', hint: '(tener)', answer: ['tengo'], explain: 'tener → yo tengo.', theory: 't2' },
    { type: 'gap', sentence: 'Yo ___ al cine con un amigo.', hint: '(salir)', answer: ['salgo'], explain: 'salir → yo salgo.', theory: 't2' },
    { type: 'table', title: 'vestir', prompt: 'Odmień „vestir” (e → i).', rows: [['yo', 'visto'], ['tú', 'vistes'], ['él / ella', 'viste'], ['nosotros', 'vestimos'], ['vosotros', 'vestís'], ['ellos / ellas', 'visten']], explain: 'i, i, i, e, e, i.', theory: 't3' },
    { type: 'gap', sentence: 'Tú siempre ___ muy bien, a la moda.', hint: '(vestir)', answer: ['vistes'], explain: 'tú → vistes (e → i).', theory: 't3' },
    { type: 'gap', sentence: 'Vosotras ___ unas blusas muy elegantes.', hint: '(vestir)', answer: ['vestís'], explain: 'vosotras → vestís (tu e zostaje; pisownia z „s”).', theory: 't3' },
    { type: 'gap', sentence: 'A nosotros nos gusta ___ la ropa deportiva.', options: ['ponernos', 'ponerse', 'ponemos'], answer: ['ponernos'], explain: '„nos gusta” → poner„nos”: to samo słówko na końcu.', theory: 't4' },
    { type: 'gap', sentence: 'Prefiero ___ unos pantalones cómodos.', options: ['ponerme', 'ponerse', 'me pongo'], answer: ['ponerme'], explain: 'Ja wolę → ponerme.', theory: 't4' },
    { type: 'gap', sentence: 'Cuando juegas un partido de baloncesto, ___ unas zapatillas deportivas.', options: ['te pones', 'se pone', 'me pongo'], answer: ['te pones'], explain: '„juegas” to tú → te pones.', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Nigdy nie zakładam sukienek.”', answer: 'Yo nunca me pongo vestidos.', extra: ['se'], explain: 'yo → me pongo; nunca = nigdy.', theory: 't1' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'A nosotros nos gusta ponerse la ropa deportiva.', answer: false, explain: 'Poprawnie: nos gusta ponernos.', theory: 't4' },
  ],
  test: [
    { type: 'gap', sentence: 'Yo ___ una bufanda.', options: ['me pongo', 'me poneo', 'se pone'], answer: ['me pongo'], explain: 'yo → me pongo.', theory: 't2' },
    { type: 'gap', sentence: 'Él ___ el sombrero.', hint: '(ponerse)', answer: ['se pone'], explain: 'él → se pone.', theory: 't1' },
    { type: 'gap', sentence: 'Nosotras ___ las botas.', hint: '(ponerse)', answer: ['nos ponemos'], explain: 'nosotras → nos ponemos.', theory: 't1' },
    { type: 'gap', sentence: 'Yo ___ una falda negra a juego con mi bolso.', hint: '(vestir)', answer: ['visto'], explain: 'yo → visto (e → i).', theory: 't3' },
    { type: 'gap', sentence: 'Ellos ___ muy bien.', hint: '(vestir)', answer: ['visten'], explain: 'ellos → visten.', theory: 't3' },
    { type: 'gap', sentence: 'Yo ___ mucho trabajo.', hint: '(tener)', answer: ['tengo'], explain: 'tener → tengo.', theory: 't2' },
    { type: 'gap', sentence: 'Me gusta ___ ropa cómoda.', options: ['ponerme', 'ponerse', 'me pongo'], answer: ['ponerme'], explain: '„me gusta” → ponerme.', theory: 't4' },
    { type: 'gap', sentence: '¿Os gusta ___ gorros?', options: ['poneros', 'ponerse', 'os ponéis'], answer: ['poneros'], explain: '„os gusta” → poneros.', theory: 't4' },
    { type: 'choice', prompt: 'Kto to mówi? „Me pongo el abrigo.”', say: 'Me pongo el abrigo.', options: ['yo', 'tú', 'él'], answer: 'yo', esOptions: true, explain: 'me + pongo = yo.', theory: 't1' },
    { type: 'pairs', prompt: 'Połącz bezokolicznik z formą „yo”.', pairs: [['poner', 'pongo'], ['hacer', 'hago'], ['salir', 'salgo'], ['tener', 'tengo']], explain: 'Nieregularne formy „yo”.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: „zakładam” (ponerse)', answer: ['me pongo', 'yo me pongo'], explain: 'yo → me pongo.', theory: 't2' },
    { type: 'truefalse', prompt: 'Czy tak jest poprawnie?', statement: 'Prefiero ponerme unos vaqueros.', answer: true, explain: 'Tak: prefiero (ja) → ponerme.', theory: 't4' },
    { type: 'order', prompt: 'Ułóż: „Kiedy jest zimno, zakładam czapkę.”', answer: 'Cuando hace frío, me pongo un gorro.', extra: ['se'], explain: 'hace frío = jest zimno; me pongo = zakładam.', theory: 't2' },
  ],
};
