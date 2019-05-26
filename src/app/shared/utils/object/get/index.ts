/**
 * Gets the value of object. If there is no such path returns undefined.
 * @param obj - The object to query
 * @param path - The path of property to get
 * @param defaultValue - The default value
 */
function get(obj: any, path: Array<string | number>, defaultValue?: any) {
  if (obj === undefined || obj === null) {
    return defaultValue;
  }

  let result = obj;

  for (const key of path) {
    if (result[key] === undefined) {
      return defaultValue;
    }

    result = result[key];
  }

  return result;
}

export default get;
