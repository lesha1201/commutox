import { render } from '@testing-library/react';
import * as React from 'react';

import Label from '.';

describe('<Label />', () => {
  it('should render', () => {
    const { container } = render(<Label htmlFor="id" style={{ fontSize: '20px' }} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
