import * as React from 'react';
import { render } from 'react-testing-library';

import Button from '.';

describe('<Button />', () => {
  it('should render', () => {
    render(<Button>button</Button>);
  });
});
