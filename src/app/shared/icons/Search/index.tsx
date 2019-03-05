import * as React from 'react';

interface IProps extends React.SVGAttributes<SVGElement> {}

function Search(props: IProps) {
  return (
    <svg width="100%" viewBox="0 0 115.9 115.9" {...props}>
      <path d="M45.1 90.2c11 0 21-3.9 28.8-10.5l35 35c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8C90.2 20.2 70 0 45.1 0 20.3 0 0 20.3 0 45.1 0 70 20.3 90.2 45.1 90.2zm0-82C65.5 8.2 82 24.8 82 45.1 82 65.5 65.5 82 45.1 82S8.2 65.4 8.2 45.1 24.8 8.2 45.1 8.2z" />
    </svg>
  );
}

export default Search;
