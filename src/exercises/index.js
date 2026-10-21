// Registry of exercise types. Each module exports:
//   type, check(item, value) -> {result, expected, explain, ...},
//   solution(item) -> value, say(item) -> Spanish text to read after answering | null,
//   render(item, el, ctx), optional reveal(el, checkResult).
import * as choice from './choice.js';
import * as listen from './listen.js';
import * as typeEx from './type.js';
import * as gap from './gap.js';
import * as pairs from './pairs.js';
import * as order from './order.js';
import * as dialog from './dialog.js';
import * as sort from './sort.js';
import * as table from './table.js';
import * as truefalse from './truefalse.js';

const modules = [choice, listen, typeEx, gap, pairs, order, dialog, sort, table, truefalse];
const registry = new Map(modules.map((m) => [m.type, m]));

export const TYPES = [...registry.keys()];

export function getExercise(type) {
  const mod = registry.get(type);
  if (!mod) throw new Error(`Nieznany typ ćwiczenia: ${type}`);
  return mod;
}
