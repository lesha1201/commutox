/**
 * Check a target object to have all keys presented in an input object.
 * If the target object doesn't contain some keys from the input object
 * then it returns false.
 *
 * @param target - The target object
 * @param obj - The input object
 * @returns True if the target object contains all keys presented in the input object
 */
function containsAllKeys(target: Record<any, unknown>, obj: Record<any, unknown>) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return false;
  }

  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      return false;
    }
  }

  return true;
}

export default containsAllKeys;
