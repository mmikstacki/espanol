// Lekcja 2 „¿Qué me pongo hoy?” – 17 kroków, po jednym pliku na krok w content/leccion-2/.
// Schemat: design/2026-10-21-espanol-app-design.md §7. Źródło: source/leccion-2-*.md.
import osoby from './leccion-2/01-osoby.js';
import rodzaj from './leccion-2/02-rodzaj.js';
import ropa from './leccion-2/03-ropa.js';
import przymiotnik from './leccion-2/04-przymiotnik.js';
import colores from './leccion-2/05-colores.js';
import zwrotne from './leccion-2/06-zwrotne.js';
import llevar from './leccion-2/07-llevar.js';
import demostrativos from './leccion-2/08-demostrativos.js';
import numeros100 from './leccion-2/09-numeros-100.js';
import numeros from './leccion-2/10-numeros.js';
import tiendas from './leccion-2/11-tiendas.js';
import gustar from './leccion-2/12-gustar.js';
import pronombres from './leccion-2/13-pronombres.js';
import indefinidos from './leccion-2/14-indefinidos.js';
import tienda from './leccion-2/15-tienda.js';
import cultura from './leccion-2/16-cultura.js';
import final from './leccion-2/17-final.js';

const steps = [
  osoby,
  rodzaj,
  ropa,
  przymiotnik,
  colores,
  zwrotne,
  llevar,
  demostrativos,
  numeros100,
  numeros,
  tiendas,
  gustar,
  pronombres,
  indefinidos,
  tienda,
  cultura,
  final,
];

// Numer kroku i id każdej pozycji (do dziennika i walidacji).
steps.forEach((step, i) => {
  step.num = i + 1;
  step.exercises.forEach((item, j) => { item.id ??= `${step.id}-e${j + 1}`; });
  step.test.forEach((item, j) => { item.id ??= `${step.id}-t${j + 1}`; });
});

export default {
  id: 'leccion-2',
  title: 'Lección 2 – ¿Qué me pongo hoy?',
  steps,
};
