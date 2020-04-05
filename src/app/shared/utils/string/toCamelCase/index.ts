import capitalize from '../capitalize';

/**
 * Converts to camel case
 *
 * @param str string to convert to camel case
 */
function toCamelCase(str: string) {
  let isFirstWordSkipped = false;

  return str.split(/([^A-Za-z]+)/).reduce((acc, chunk) => {
    if (/[^\d$A-Za-z]+/.test(chunk)) {
      return acc;
    }

    if (!isFirstWordSkipped && /[A-Za-z]+/.test(chunk)) {
      isFirstWordSkipped = true;
      return acc + chunk;
    }

    return acc + capitalize(chunk);
  }, '');
}

export default toCamelCase;
