export default {
  id: 'tienda',
  kind: 'lekcja',
  title: 'W sklepie: rozmowa',
  subtitle: 'dialogi z podręcznika',
  passages: {
    miguel: {
      title: 'Miguel w sklepie (podręcznik, str. 21)',
      text: 'Miguel: Buenas tardes. – Dependiente: Buenas tardes. ¿En qué puedo ayudarte? – Miguel: Quería unos pantalones vaqueros. – Dependiente: ¿Qué talla tienes? – Miguel: Creo que tengo la talla 40. – Dependiente: Mira, tenemos estos negros y estrechos. Están muy de moda. – Miguel: Me parece que esos son demasiado oscuros. No me queda muy bien la ropa oscura. ¿No tiene algunos en color azul? – Dependiente: En azul no nos quedan, pero tenemos estos en beis. – Miguel: No están mal, ¿puedo probármelos? – Dependiente: Sí, claro. Los probadores están al fondo. … – Dependiente: ¿Qué tal te quedan? – Miguel: Yo creo que me quedan bien. Me gustan. ¿Cuánto cuestan? – Dependiente: 30 euros. – Miguel: Son un poco caros, pero me los llevo. ¿Puedo pagar con tarjeta? – Dependiente: Por supuesto, vamos a la caja.',
    },
  },
  vocab: [
    { es: 'Buenas tardes.', pl: 'Dzień dobry (po południu).', emoji: '👋', group: 'Powitanie' },
    { es: '¿En qué puedo ayudarte?', pl: 'W czym mogę ci pomóc?', emoji: '🧑‍💼', group: 'Sprzedawca' },
    { es: '¿Qué talla tienes?', pl: 'Jaki masz rozmiar (ubrania)?', emoji: '📏', group: 'Sprzedawca' },
    { es: '¿Qué número usa?', pl: 'Jaki rozmiar butów pan nosi?', emoji: '👟', group: 'Sprzedawca' },
    { es: 'Los probadores están al fondo.', pl: 'Przymierzalnie są w głębi.', emoji: '🚪', group: 'Sprzedawca' },
    { es: 'Por supuesto.', pl: 'Oczywiście.', emoji: '👌', group: 'Sprzedawca' },
    { es: 'Vamos a la caja.', pl: 'Chodźmy do kasy.', emoji: '🧾', group: 'Sprzedawca' },
    { es: 'Quería…', pl: 'Chciałbym / Chciałabym…', emoji: '🙋', group: 'Klient' },
    { es: 'Busco…', pl: 'Szukam…', emoji: '🔎', group: 'Klient' },
    { es: 'Tengo la talla 38.', pl: 'Mam rozmiar 38.', emoji: '📏', group: 'Klient' },
    { es: 'No está mal.', pl: 'Nie jest zły / Może być.', emoji: '🙂', group: 'Klient' },
    { es: '¿Puedo pagar con tarjeta?', pl: 'Mogę zapłacić kartą?', emoji: '💳', group: 'Klient' },
    { es: 'en efectivo', pl: 'gotówką', emoji: '💶', group: 'Klient' },
    { es: 'rebajado', pl: 'przeceniony', emoji: '🏷️', group: 'Klient' },
    { es: 'demasiado', pl: 'za, zbyt (za dużo)', emoji: '⚠️', group: 'Klient' },
  ],
  theory: [
    {
      id: 't1',
      title: 'Jak przebiega rozmowa w sklepie',
      html: `
        <ol>
          <li><b>Powitanie:</b> Buenos días / Buenas tardes. – ¿En qué puedo ayudarte?</li>
          <li><b>Czego szukasz:</b> Quería… / Busco… unos pantalones vaqueros.</li>
          <li><b>Rozmiar:</b> ¿Qué talla tienes? – Tengo / Uso la talla 40.</li>
          <li><b>Kolor i model:</b> Mira, tenemos estos… – ¿No tiene algunos en color azul?</li>
          <li><b>Przymierzanie:</b> ¿Puedo probármelos? – Los probadores están al fondo.</li>
          <li><b>Ocena:</b> ¿Qué tal te quedan? – Me quedan bien.</li>
          <li><b>Cena:</b> ¿Cuánto cuestan? – 30 euros.</li>
          <li><b>Decyzja i płatność:</b> Me los llevo. ¿Puedo pagar con tarjeta? – Por supuesto, vamos a la caja.</li>
        </ol>
        <p>💡 <b>Quería</b> to grzeczne „chciałbym” – tak zaczyna się większość zakupów.</p>`,
      examples: [
        { es: 'Buenas tardes. ¿En qué puedo ayudarte?', pl: 'Dzień dobry. W czym mogę pomóc?' },
        { es: 'Quería unos pantalones vaqueros.', pl: 'Chciałbym dżinsy.' },
        { es: 'Son un poco caros, pero me los llevo.', pl: 'Są trochę drogie, ale je biorę.' },
      ],
    },
    {
      id: 't2',
      title: 'Kto co mówi?',
      html: `
        <table class="grid">
          <tr><th>dependiente (sprzedawca)</th><th>cliente (klient)</th></tr>
          <tr><td>¿En qué puedo ayudarte?</td><td>Quería una falda. / Busco unos pantalones.</td></tr>
          <tr><td>¿Qué talla tienes? ¿Qué número usa?</td><td>Tengo / Uso la talla 42.</td></tr>
          <tr><td>¿Qué tal te queda?</td><td>¿Cómo me queda? Me queda bien.</td></tr>
          <tr><td>De esa talla no nos queda ninguno.</td><td>¿Tienen la talla 38?</td></tr>
          <tr><td>Los probadores están al fondo.</td><td>¿Dónde están los probadores?</td></tr>
          <tr><td>Está rebajada. Solo 10 euros.</td><td>¿Cuánto cuesta? ¿Cuánto es?</td></tr>
          <tr><td>Lo siento, solo aceptamos efectivo.</td><td>¿Puedo pagar con tarjeta?</td></tr>
        </table>
        <p>💡 <b>la talla</b> = rozmiar ubrania, <b>el número</b> = rozmiar butów.</p>
        <p>💡 <i>No nos quedan</i> (u sprzedawcy) = już nie mamy, wyprzedane.</p>`,
      examples: [
        { es: 'En azul no nos quedan, pero tenemos estos en beis.', pl: 'Niebieskich już nie mamy, ale mamy te beżowe.' },
        { es: 'Lo siento, solo aceptamos efectivo.', pl: 'Przykro mi, przyjmujemy tylko gotówkę.' },
      ],
    },
  ],
  exercises: [
    { type: 'choice', prompt: 'Co znaczy „Quería una falda”?', say: 'Quería una falda.', options: ['Chciałabym spódnicę.', 'Kocham spódnice.', 'Mam spódnicę.'], answer: 'Chciałabym spódnicę.', explain: 'Quería = grzeczne „chciałbym / chciałabym”.', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż początek rozmowy (zeszyt, ćw. 7).', lines: ['Buenos días. ¿En qué puedo ayudarte?', 'Quería una camiseta de manga corta.', '¿Qué talla tienes?', 'Creo que tengo la talla 36.'], explain: 'Pytanie sprzedawcy → czego szukasz → rozmiar.', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż środek rozmowy.', lines: ['Mira, tenemos esta blanca de rayas. Están muy de moda.', 'Pues, no me queda bien la ropa clara. ¿No tiene alguna en color oscuro?', 'Sí, tenemos esta en verde oliva.', 'No está mal. ¿Puedo probármela?', 'Sí, claro. Los probadores están al fondo.'], explain: 'Propozycja → klientowi nie pasuje kolor → inna propozycja → przymierzanie.', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż koniec rozmowy.', lines: ['¿Qué tal te queda?', 'Creo que me queda bien. ¿Cuánto cuesta?', '15 euros.', 'Pues, me la llevo. ¿Puedo pagar con tarjeta?', 'Por supuesto, vamos a la caja.'], explain: 'Ocena → cena → decyzja i płatność → kasa.', theory: 't1' },
    { type: 'sort', prompt: 'Kto to mówi?', categories: ['dependiente', 'cliente'], items: [['¿Qué tal te queda?', 'dependiente'], ['De esa talla no nos queda ninguno.', 'dependiente'], ['Lo siento, solo aceptamos efectivo.', 'dependiente'], ['Me gusta esta blusa.', 'cliente'], ['¿Tienen la talla 38?', 'cliente'], ['Me lo llevo.', 'cliente']], explain: 'Podręcznik, ćw. 13: sprzedawca pyta i informuje, klient prosi i decyduje.', theory: 't2' },
    { type: 'sort', prompt: 'Kto to mówi?', categories: ['dependiente', 'cliente'], items: [['¿En qué puedo ayudarte?', 'dependiente'], ['Los probadores están al fondo.', 'dependiente'], ['Busco unos pantalones.', 'cliente'], ['¿Cómo me queda?', 'cliente'], ['¿Puedo pagar con tarjeta?', 'cliente']], explain: 'Klient pyta o rzeczy dla siebie; sprzedawca oferuje pomoc.', theory: 't2' },
    { type: 'truefalse', passage: 'miguel', prompt: 'Przeczytaj rozmowę Miguela. Prawda czy fałsz?', statement: 'Miguel está en una tienda de ropa.', answer: true, explain: 'Kupuje dżinsy w sklepie odzieżowym.', theory: 't1' },
    { type: 'truefalse', passage: 'miguel', prompt: 'Przeczytaj rozmowę Miguela. Prawda czy fałsz?', statement: 'Miguel compra los pantalones negros.', answer: false, explain: 'Czarne są za ciemne – kupuje beżowe.', theory: 't1' },
    { type: 'truefalse', passage: 'miguel', prompt: 'Przeczytaj rozmowę Miguela. Prawda czy fałsz?', statement: 'Los pantalones cuestan 30 euros.', answer: true, explain: '„¿Cuánto cuestan? – 30 euros.”', theory: 't1' },
    { type: 'gap', sentence: '– Buenos días. ¿Puedo ayudarla? – ___ un vestido elegante.', options: ['Quería', 'Cuesta', 'Me queda'], answer: ['Quería'], explain: 'Quería… = chciałabym (podręcznik, ćw. 14).', theory: 't1' },
    { type: 'gap', sentence: '– ¿Qué talla tiene? – ___', options: ['Uso la talla 38.', 'Cuesta 38 euros.', 'Me queda la 38.'], answer: ['Uso la talla 38.'], explain: 'Rozmiar: Tengo / Uso la talla…', theory: 't2' },
    { type: 'gap', sentence: '– ¿Qué tal le quedan los pantalones? – ___. Me los llevo.', options: ['Me quedan bien', 'Me gustan caros', 'Son la talla'], answer: ['Me quedan bien'], explain: 'pantalones → me quedan bien.', theory: 't1' },
    { type: 'gap', sentence: '– ¿___? – En total, son 40 euros.', options: ['Cuánto es', 'Qué talla tiene', 'Dónde está la caja'], answer: ['Cuánto es'], explain: '„En total, son…” odpowiada na ¿Cuánto es?', theory: 't2' },
    { type: 'gap', sentence: '– ¿___? – Claro, los probadores están allí: al fondo, a la derecha.', options: ['Puedo probármelo', 'Puedo pagar con tarjeta', 'Cuánto cuesta'], answer: ['Puedo probármelo'], explain: 'O przymierzalnię pytamy, gdy chcemy przymierzyć.', theory: 't1' },
    { type: 'choice', prompt: 'Pytasz klienta o rozmiar BUTÓW:', options: ['¿Qué número usa?', '¿Qué talla de pan usa?', '¿Cuántos zapatos tiene?'], answer: '¿Qué número usa?', esOptions: true, explain: 'Rozmiar butów to „el número”.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „en efectivo”?', say: 'en efectivo', options: ['gotówką', 'kartą', 'na raty'], answer: 'gotówką', explain: 'pagar en efectivo = płacić gotówką.', theory: 't2' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Mogę zapłacić kartą?', answer: ['¿Puedo pagar con tarjeta?'], explain: 'pagar con tarjeta (nie „en tarjeta”).', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „Są trochę drogie, ale je biorę.”', answer: 'Son un poco caros, pero me los llevo.', extra: ['las'], explain: 'los pantalones → me los llevo.', theory: 't1' },
  ],
  test: [
    { type: 'dialog', prompt: 'Ułóż początek rozmowy Miguela.', lines: ['Buenas tardes. ¿En qué puedo ayudarte?', 'Quería unos pantalones vaqueros.', '¿Qué talla tienes?', 'Creo que tengo la talla 40.', 'Mira, tenemos estos negros y estrechos. Están muy de moda.'], explain: 'Powitanie → czego szuka → rozmiar → propozycja.', theory: 't1' },
    { type: 'dialog', prompt: 'Ułóż koniec rozmowy Miguela.', lines: ['¿Qué tal te quedan?', 'Yo creo que me quedan bien. Me gustan. ¿Cuánto cuestan?', '30 euros.', 'Son un poco caros, pero me los llevo. ¿Puedo pagar con tarjeta?', 'Por supuesto, vamos a la caja.'], explain: 'Ocena → cena → decyzja → kasa.', theory: 't1' },
    { type: 'truefalse', passage: 'miguel', prompt: 'Przeczytaj rozmowę Miguela. Prawda czy fałsz?', statement: 'Miguel usa la talla 40.', answer: true, explain: '„Creo que tengo la talla 40.”', theory: 't1' },
    { type: 'truefalse', passage: 'miguel', prompt: 'Przeczytaj rozmowę Miguela. Prawda czy fałsz?', statement: 'A Miguel le queda bien la ropa oscura.', answer: false, explain: '„No me queda muy bien la ropa oscura.”', theory: 't1' },
    { type: 'sort', prompt: 'Kto to mówi?', categories: ['dependiente', 'cliente'], items: [['¿Qué talla tienes?', 'dependiente'], ['Vamos a la caja.', 'dependiente'], ['Quería una falda.', 'cliente'], ['¿Cuánto es?', 'cliente']], explain: 'Sprzedawca pyta i prowadzi; klient prosi i płaci.', theory: 't2' },
    { type: 'gap', sentence: '– Buenos días. Busco unos vaqueros. – Buenos días. ¿Qué ___ tienes?', options: ['talla', 'caja', 'número'], answer: ['talla'], explain: 'Rozmiar ubrania → talla (powtórka, ćw. 18).', theory: 't2' },
    { type: 'gap', sentence: '¿Puedo pagar con ___?', options: ['tarjeta', 'carta', 'efectivo'], answer: ['tarjeta'], explain: 'pagar con tarjeta (powtórka, ćw. 15).', theory: 't1' },
    { type: 'gap', sentence: 'Los probadores están al ___.', options: ['fondo', 'caja', 'talla'], answer: ['fondo'], explain: 'al fondo = w głębi.', theory: 't2' },
    { type: 'choice', prompt: 'Co znaczy „Está rebajada”?', say: 'Está rebajada.', options: ['Jest przeceniona.', 'Jest za mała.', 'Jest wyprzedana.'], answer: 'Jest przeceniona.', explain: 'rebajado = przeceniony.', theory: 't2' },
    { type: 'choice', prompt: 'W zdaniu „¿Puedo pagar en tarjeta?” jest błąd. Poprawnie:', options: ['¿Puedo pagar con tarjeta?', '¿Puedo pagar de tarjeta?', '¿Puedo pagar a tarjeta?'], answer: '¿Puedo pagar con tarjeta?', esOptions: true, explain: 'pagar con tarjeta (zeszyt, ćw. 16).', theory: 't1' },
    { type: 'type', prompt: 'Napisz po hiszpańsku: Chciałbym koszulkę.', answer: ['Quería una camiseta.', 'Quiero una camiseta.'], explain: 'Grzecznie: Quería…', theory: 't1' },
    { type: 'order', prompt: 'Ułóż: „W czym mogę ci pomóc?”', answer: '¿En qué puedo ayudarte?', extra: ['quedan'], explain: '¿En qué puedo ayudarte? – pierwsze zdanie sprzedawcy.', theory: 't1' },
  ],
};
