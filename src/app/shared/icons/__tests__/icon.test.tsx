import * as React from 'react';
import { render } from 'react-testing-library';

import Icon from '../';

describe('<Icon />', () => {
  it('should render icon properly', () => {
    const { container } = render(<Icon name="chat" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should throw error when [name] is invalid', () => {
    try {
      render(<Icon name="non-exist-icon" />);
    } catch (error) {
      expect(error).toMatchSnapshot();
    }
  });
});
