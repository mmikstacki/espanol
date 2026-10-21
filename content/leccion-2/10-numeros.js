export default {
  id: 'numeros',
  kind: 'lekcja',
  title: 'Liczby do miliona i ceny',
  subtitle: '¿Cuánto cuesta?',
  vocab: [
    { es: 'cien', pl: '100 (równo)', emoji: '💯', group: 'Setki' },
    { es: 'ciento', pl: '100 w liczbach 101–199', emoji: '1️⃣', group: 'Setki' },
    { es: 'doscientos', pl: '200', emoji: '2️⃣', group: 'Setki' },
    { es: 'trescientos', pl: '300', emoji: '3️⃣', group: 'Setki' },
    { es: 'cuatrocientos', pl: '400', emoji: '4️⃣', group: 'Setki' },
    { es: 'quinientos', pl: '500 (nieregularne!)', emoji: '5️⃣', group: 'Setki' },
    { es: 'seiscientos', pl: '600', emoji: '6️⃣', group: 'Setki' },
    { es: 'setecientos', pl: '700 (nieregularne!)', emoji: '7️⃣', group: 'Setki' },
    { es: 'ochocientos', pl: '800', emoji: '8️⃣', group: 'Setki' },
    { es: 'novecientos', pl: '900 (nieregularne!)', emoji: '9️⃣', group: 'Setki' },
    { es: 'mil', pl: '1000', emoji: '🔢', group: 'Duże liczby' },
    { es: 'dos mil', pl: '2000', emoji: '🔢', group: 'Duże liczby' },
    { es: 'un millón', pl: 'milion', emoji: '💰', group: 'Duże liczby' },
    { es: 'el euro', pl: 'euro', emoji: '💶', group: 'Ceny' },
    { es: 'el céntimo', pl: 'cent', emoji: '🪙', group: 'Ceny' },
    { es: '¿Cuánto cuesta?', pl: 'Ile kosztuje? (jedna rzecz)', emoji: '🏷️', group: 'Ceny' },
    { es: '¿Cuánto cuestan?', pl: 'Ile kosztują? (kilka rzeczy)', emoji: '🏷️', group: 'Ceny' },
    { es: '¿Cuánto es?', pl: 'Ile płacę? (razem)', emoji: '🧾', group: 'Ceny' },
    { es: 'caro', pl: 'drogi', emoji: '💸', group: 'Ceny' },
    { es: 'barato', pl: 'tani', emoji: '👛', group: 'Ceny' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Setki: cien, ciento, doscientos…',
      html: `
        <p><b>100</b> samo to <b>cien</b>. Gdy coś stoi po nim, mówimy <b>ciento</b>: 101 = ciento uno, 125 = ciento veinticinco.</p>
        <table class="grid">
          <tr><td>200 doscientos</td><td>500 <b>quinientos</b></td><td>800 ochocientos</td></tr>
          <tr><td>300 trescientos</td><td>600 seiscientos</td><td>900 <b>novecientos</b></td></tr>
          <tr><td>400 cuatrocientos</td><td>700 <b>setecientos</b></td><td></td></tr>
        </table>
        <p>⚠️ Pogrubione są nieregularne – nie „cincocientos”, „sietecientos”, „nuevecientos”.</p>
        <p>⚠️ Setki 200–900 <b>odmieniają się przez rodzaj</b>: doscient<b>os</b> coches, doscient<b>as</b> páginas. Też: trescient<b>as</b> <b>una</b> páginas (301 stron).</p>`,
      examples: [
        { es: 'ciento cincuenta y siete coches', pl: '157 samochodów' },
        { es: 'trescientas cuarenta y ocho chicas', pl: '348 dziewczyn' },
        { es: 'quinientos quince chicos', pl: '515 chłopców' },
      ],
    },
    {
      id: 't2',
      title: 'Tysiące i miliony',
      html: `
        <ul>
          <li><b>mil</b> = 1000 (nie „un mil”), <b>dos mil</b> = 2000 (nie „dos miles”)</li>
          <li>1.236 = mil doscientos treinta y seis</li>
          <li><b>un millón</b> = 1.000.000, <b>dos millones</b> = 2.000.000</li>
          <li>Po okrągłym milionie stawiamy <b>de</b>: <i>un millón <b>de</b> euros</i></li>
        </ul>
        <p>💡 W Hiszpanii <b>kropka</b> oddziela tysiące (1.000.000), a <b>przecinek</b> – grosze (12,50 €). Tak jak u nas.</p>`,
      examples: [
        { es: 'dos mil ochocientos sesenta y dos habitantes', pl: '2862 mieszkańców' },
        { es: 'El móvil cuesta un millón de euros.', pl: 'Telefon kosztuje milion euro.' },
      ],
    },
    {
      id: 't3',
      title: 'Ceny: ¿Cuánto cuesta?',
      html: `
        <p>Czasownik <b>costar</b> (kosztować) zmienia <b>o → ue</b>:</p>
        <ul>
          <li>jedna rzecz: <b>¿Cuánto cuesta</b> la falda? – <b>Cuesta</b> 25 euros.</li>
          <li>kilka rzeczy: <b>¿Cuánto cuestan</b> los zapatos? – <b>Cuestan</b> 40 euros.</li>
          <li>razem, przy kasie: <b>¿Cuánto es?</b> – <b>Son</b> 12 euros.</li>
        </ul>
        <p>12,50 € = <i>doce euros <b>con</b> cincuenta (céntimos)</i>.</p>
        <p>❌ <s>¿Cuánto cuesta estos zapatos?</s> → ✅ ¿Cuánto <b>cuestan</b> estos zapatos? (zeszyt, ćw. 16)</p>`,
      examples: [
        { es: '¿Cuánto cuesta esta camiseta?', pl: 'Ile kosztuje ta koszulka?' },
        { es: 'Cuesta doce euros con cincuenta céntimos.', pl: 'Kosztuje 12,50 euro.' },
        { es: 'Son cuatro euros con sesenta.', pl: 'Razem 4,60 euro.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Jak jest 100 (równo)?', options: ['cien', 'ciento', 'cientos'], answer: 'cien', esOptions: true, explain: 'Samo 100 = cien; 101–199 = ciento…', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest 500?', options: ['quinientos', 'cincocientos', 'cinco cientos'], answer: 'quinientos', esOptions: true, explain: '500 = quinientos (nieregularne).', theory: 't1' },
    { type: 'pairs', pairs: [['doscientos', '200'], ['quinientos', '500'], ['setecientos', '700'], ['novecientos', '900'], ['mil', '1000']], explain: 'Uważaj na 500, 700 i 900.', theory: 't1' },
    { type: 'listen', say: 'setecientos', options: ['700', '600', '70', '7000'], answer: '700', explain: 'setecientos = 700.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 157 (coches)', answer: ['ciento cincuenta y siete', 'ciento cincuenta y siete coches'], explain: 'ciento + cincuenta y siete (zeszyt, ćw. 15).', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 515 (chicos)', answer: ['quinientos quince', 'quinientos quince chicos'], explain: 'quinientos + quince.', theory: 't1' },
    { type: 'gap', sentence: '348 = ___ cuarenta y ocho chicas', say: 'trescientas cuarenta y ocho chicas', options: ['trescientas', 'trescientos', 'tres cientas'], answer: ['trescientas'], explain: 'chicas – rodzaj żeński → trescientAS.', theory: 't1' },
    { type: 'gap', sentence: '200 = ___ páginas', say: 'doscientas páginas', options: ['doscientas', 'doscientos', 'dos cientas'], answer: ['doscientas'], explain: 'páginas – rodzaj żeński → doscientas.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 923 (libros)', answer: ['novecientos veintitrés', 'novecientos veintitrés libros'], explain: 'novecientos + veintitrés.', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest 2000?', options: ['dos mil', 'dos miles', 'dosmil'], answer: 'dos mil', esOptions: true, explain: 'mil się nie odmienia: dos mil.', theory: 't2' },
    { type: 'choice', prompt: 'Jak powiesz „milion euro”?', options: ['un millón de euros', 'un millón euros', 'mil millón euros'], answer: 'un millón de euros', esOptions: true, explain: 'Po okrągłym milionie: de.', theory: 't2' },
    { type: 'gap', sentence: '¿Cuánto ___ estos zapatos de tacón?', options: ['cuestan', 'cuesta', 'costan'], answer: ['cuestan'], explain: 'zapatos – l. mn. → cuestan (zeszyt, ćw. 16).', theory: 't3' },
    { type: 'gap', sentence: '¿Cuánto ___ esta camiseta?', options: ['cuesta', 'cuestan', 'costa'], answer: ['cuesta'], explain: 'camiseta – jedna rzecz → cuesta.', theory: 't3' },
    { type: 'choice', prompt: 'Jak powiesz cenę 12,50 €?', options: ['doce euros con cincuenta', 'doce euros y cincuenta', 'doce coma cincuenta euros'], answer: 'doce euros con cincuenta', esOptions: true, explain: 'Grosze dodajemy przez „con”.', theory: 't3' },
    { type: 'pairs', pairs: [['caro', 'drogi'], ['barato', 'tani'], ['el céntimo', 'cent'], ['¿Cuánto es?', 'Ile płacę?']], explain: 'Słówka do cen.', theory: 't3' },
    { type: 'choice', prompt: 'Gra logiczna (podręcznik, str. 26): „El bolso cuesta 500.000 euros. El móvil cuesta dos veces más que el bolso.” Ile kosztuje telefon?', options: ['un millón de euros', 'doscientos cincuenta mil euros', 'quinientos mil euros'], answer: 'un millón de euros', esOptions: true, explain: '2 × 500 000 = 1 000 000 = un millón.', theory: 't2' },
    { type: 'gap', sentence: 'Esta falda cuesta ___ euros.', hint: '(125)', answer: ['ciento veinticinco'], explain: '125 = ciento veinticinco (zeszyt, ćw. 14).', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Ile kosztują te buty?”', answer: '¿Cuánto cuestan estos zapatos?', extra: ['cuesta'], explain: 'zapatos – l. mn. → cuestan.', theory: 't3' },
  ],
  test: [
    { type: 'choice', prompt: 'Jak jest 900?', options: ['novecientos', 'nuevecientos', 'nueve cientos'], answer: 'novecientos', esOptions: true, explain: '900 = novecientos (nieregularne).', theory: 't1' },
    { type: 'listen', say: 'quinientos', options: ['500', '50', '5000', '400'], answer: '500', explain: 'quinientos = 500.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 101', answer: ['ciento uno'], explain: '101 = ciento uno.', theory: 't1' },
    { type: 'type', prompt: 'Napisz słownie: 216', answer: ['doscientos dieciséis'], explain: 'doscientos + dieciséis.', theory: 't1' },
    { type: 'gap', sentence: '791 = ___ noventa y una páginas', say: 'setecientas noventa y una páginas', options: ['setecientas', 'setecientos', 'sietecientas'], answer: ['setecientas'], explain: 'páginas – ż. → setecientAS (i „una”).', theory: 't1' },
    { type: 'choice', prompt: 'Jak jest 1.236 (palabras)?', options: ['mil doscientas treinta y seis', 'un mil doscientas treinta y seis', 'mil doscientos treinta seis'], answer: 'mil doscientas treinta y seis', esOptions: true, explain: 'mil (bez „un”), palabras – ż. → doscientas.', theory: 't2' },
    { type: 'gap', sentence: '¿Cuánto ___ estos zapatos amarillos?', options: ['cuestan', 'costan', 'questan'], answer: ['cuestan'], explain: 'costar: o → ue; l. mn. → cuestan.', theory: 't3' },
    { type: 'gap', sentence: 'El sombrero ___ treinta euros.', options: ['cuesta', 'cuestan', 'costa'], answer: ['cuesta'], explain: 'jedna rzecz → cuesta.', theory: 't3' },
    { type: 'choice', prompt: 'Przy kasie pytasz, ile płacisz razem:', options: ['¿Cuánto es?', '¿Cuántos son?', '¿Qué cuesta?'], answer: '¿Cuánto es?', esOptions: true, explain: '¿Cuánto es? – ile razem.', theory: 't3' },
    { type: 'pairs', pairs: [['cuatrocientos', '400'], ['seiscientos', '600'], ['ochocientos', '800'], ['un millón', '1.000.000']], explain: 'Setki i milion.', theory: 't1' },
    { type: 'gap', sentence: 'Estos pantalones cuestan ___ euros.', hint: '(216)', answer: ['doscientos dieciséis'], explain: '216 = doscientos dieciséis.', theory: 't1' },
    { type: 'choice', prompt: 'Co znaczy „barato”?', say: 'barato', options: ['tani', 'drogi', 'ładny'], answer: 'tani', explain: 'barato = tani; caro = drogi.', theory: 't3' },
  ],
};
