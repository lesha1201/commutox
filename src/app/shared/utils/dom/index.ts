/**
 * Checks if [node] is instanceof Element
 *
 * @param node
 * @param ownerDocument - This param is useful when using iframe, because iframe has its own document
 */
export function isElement(node: any): node is Element {
  const doc = (node && node.ownerDocument) || document;
  const defaultView = doc.defaultView || window;

  return Boolean(node instanceof defaultView.Element);
}

/**
 * Finds the first scrollable (vertically) parent
 *
 * @param elem - The element to start from
 * @param ownerDocument - This param is useful when using iframe, because iframe has its own document
 */
export function getScrollParent(elem: Element | null): Element {
  const doc = (elem && elem.ownerDocument) || document;

  function getScrollParentRec(node: Element | null): Element {
    if (!isElement(node)) {
      return doc.scrollingElement || doc.documentElement || doc.body;
    }

    const overflowY = window.getComputedStyle(node).overflowY;
    const isScrollable = overflowY && overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollable && node.scrollHeight > node.clientHeight && node !== doc.body) {
      return node;
    }

    return getScrollParentRec(node.parentNode as Element);
  }

  return getScrollParentRec(elem);
}
