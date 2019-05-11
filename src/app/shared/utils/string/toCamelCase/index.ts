import { capitalize } from '../index';

/**
 * Converts to camel case
 *
 * @param str string to convert to camel case
 */
function toCamelCase(str: string) {
  let isFirstWordSkipped = false;

  return str.split(/([^a-zA-Z]+)/).reduce((acc, chunk) => {
    if (/[^a-zA-Z\d$]+/.test(chunk)) {
      return acc;
    }

    if (!isFirstWordSkipped && /[a-zA-Z]+/.test(chunk)) {
      isFirstWordSkipped = true;
      return acc + chunk;
    }

    return acc + capitalize(chunk);
  }, '');
}

export default toCamelCase;
