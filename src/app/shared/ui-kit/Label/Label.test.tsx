import * as React from 'react';
import { render } from 'react-testing-library';

import Label from '.';

describe('<Label />', () => {
  it('should render', () => {
    const { container } = render(<Label htmlFor="id" style={{ fontSize: '20px' }} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
