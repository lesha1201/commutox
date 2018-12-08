import * as React from 'react';
import { render } from 'react-testing-library';

import Input from '.';

describe('Input', () => {
  test('render', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
