import * as React from 'react';
import { render } from 'react-testing-library';

import Input from '.';

describe('<Input />', () => {
  it('should render', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('with addons', () => {
    const { container } = render(<Input addonAfter="after" addonBefore="before" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
