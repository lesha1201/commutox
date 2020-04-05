import { render } from '@testing-library/react';
import * as React from 'react';

import Icon from '..';

describe('<Icon />', () => {
  it('should render icon properly', () => {
    const { container } = render(<Icon name="chat" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should throw error when [name] is invalid', () => {
    expect(() => {
      render(<Icon name="non-exist-icon" />);
    }).toThrowErrorMatchingInlineSnapshot(`"Icon name is invalid."`);
  });
});
