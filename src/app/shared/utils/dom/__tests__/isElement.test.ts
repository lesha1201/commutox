import { isElement } from '..';

describe('isElement util', () => {
  document.body.innerHTML = '<div></div>';

  it('works with Element', () => {
    const elem = document.querySelector('div');
    expect(isElement(elem)).toBeTruthy();
  });

  it('works with not Element', () => {
    expect(isElement(window)).toBeFalsy();
    expect(isElement('')).toBeFalsy();
    expect(isElement({})).toBeFalsy();
    expect(isElement(0)).toBeFalsy();
    expect(isElement(true)).toBeFalsy();
  });
});
