/**
 * Checks [target] for equality to one of [predicates]
 *
 * @param target - Value to check for equality
 * @param predicates
 *
 * @example
 * // This equals to (A == B || A == C)
 * equalToOr(A, B, C);
 */
export function equalToOr(target: any, ...predicates: any[]) {
  for (const predicate of predicates) {
    if (predicate === target) {
      return true;
    }
  }

  return false;
}
