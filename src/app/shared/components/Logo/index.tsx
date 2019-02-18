import * as React from 'react';

interface IProps extends React.SVGAttributes<SVGElement> {}

function Logo(props: IProps) {
  return (
    <svg data-name="CommutoX" viewBox="0 0 370.51 61.684" width="100%" {...props}>
      <text
        x="-3.625"
        y="61.075"
        fill="#131314"
        fontFamily="Open Sans"
        fontSize="62.393"
        fontWeight={700}
        letterSpacing=".06em"
      >
        C
        <tspan x="39.49" y="61.075" letterSpacing=".05em">
          o
        </tspan>
        <tspan x="80.605" y="61.075">
          mm
        </tspan>
        <tspan x="206.83" y="61.075">
          u
        </tspan>
        <tspan x="249.946" y="61.075">
          t
        </tspan>
        <tspan x="278.062" y="61.075" letterSpacing=".05em">
          o
        </tspan>
      </text>
      <path
        fill="#006cff"
        d="M369.044 0h-10.89l-14.258 23.327L329.638 0H.074v7.2H323.06l14.508 22.497-20.458 31.976h10.8l15.567-25.227 15.439 25.227h11.598l-20.747-31.806z"
      />
    </svg>
  );
}

export default Logo;
