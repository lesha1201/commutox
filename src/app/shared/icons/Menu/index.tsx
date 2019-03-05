import * as React from 'react';

interface IProps extends React.SVGAttributes<SVGElement> {}

function Menu(props: IProps) {
  return (
    <svg width="100%" viewBox="0 0 210.87 148.96" {...props}>
      <g transform="translate(0 -40.883)">
        <rect y="106.27" width="210.87" height="17.992" rx="6.613" ry="6.699" />
        <rect y="40.883" width="183.89" height="17.992" rx="5.767" ry="6.699" />
        <rect y="171.85" width="183.89" height="17.992" rx="5.767" ry="6.699" />
      </g>
    </svg>
  );
}

export default Menu;
