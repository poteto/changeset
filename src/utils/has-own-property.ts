/**
 * Shorthand for `Object.prototype.hasOwnProperty`. Returns a boolean indicating
 * whether the object has the specified property as own (not inherited)
 * property. Useful when the object was created with `Object.create(null)`.
 *
 * ```ts
 * hasOwnProperty({ foo: 1 }, 'foo'); // true
 * ```
 *
 * @param obj
 * @param args
 */
export default function hasOwnProperty<T>(
  obj: T,
  ...args: [string | number | symbol]
): boolean {
  return Object.prototype.hasOwnProperty.apply(obj, args);
}
