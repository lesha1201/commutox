/**
 * debounce function
 *
 * @param {Function} fn - Function that will be executed after [wait] ms since the last function call
 * @param {number} wait - (ms) Time to wait before executing [fn]
 * @returns {Function} Returns the new debounced function
 */
function debounce(fn: (...args: any[]) => void, wait: number) {
  let timerId: number;

  return function debounced(this: any, ...args: any[]) {
    if (timerId) {
      window.clearTimeout(timerId);
    }

    timerId = window.setTimeout(fn.bind(this, ...args), wait);
  };
}

export default debounce;
