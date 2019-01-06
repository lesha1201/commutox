import * as React from 'react';

interface IProps extends React.SVGAttributes<SVGElement> {}

function Logo(props: IProps) {
  return (
    <svg data-name="CommutoX" viewBox="0 0 374 79" width="100%" {...props}>
      <text
        transform="translate(0 61.79)"
        fontSize="62.4"
        fill="#131314"
        fontFamily="Open Sans"
        fontWeight={700}
        letterSpacing=".06em"
      >
        C
        <tspan x="43.12" y={0} letterSpacing=".05em">
          o
        </tspan>
        <tspan x="84.24" y={0}>
          mm
        </tspan>
        <tspan x="210.48" y={0}>
          u
        </tspan>
        <tspan x="253.6" y={0}>
          t
        </tspan>
        <tspan x="281.72" y={0} letterSpacing=".05em">
          o
        </tspan>
      </text>
      <path
        fill="#006cff"
        d="M353.43 29.87L372.71 0h-10.89l-14.26 23.33L333.3 0H3.7v7.2h323.02l14.51 22.5-20.46 31.98h10.8l15.57-25.23 15.44 25.23h11.6l-20.75-31.81z"
      />
    </svg>
  );
}

export default Logo;
