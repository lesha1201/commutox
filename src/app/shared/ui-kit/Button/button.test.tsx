import * as React from 'react';
import { render } from 'react-testing-library';

import Button from '.';

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button>button</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  // it("should accept any button's dom attrs", () => {
  // });

  describe('themes', () => {
    it('with theme "painted"', () => {
      const { container } = render(<Button theme="painted">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with theme "outlined"', () => {
      const { container } = render(<Button theme="outlined">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('colors', () => {
    it('with color "primary"', () => {
      const { container } = render(<Button mainColor="primary">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with color "success"', () => {
      const { container } = render(<Button mainColor="success">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with color "danger"', () => {
      const { container } = render(<Button mainColor="danger">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('sizes', () => {
    it('with size "wide"', () => {
      const { container } = render(<Button size="wide">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with size "full"', () => {
      const { container } = render(<Button size="full">button</Button>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
