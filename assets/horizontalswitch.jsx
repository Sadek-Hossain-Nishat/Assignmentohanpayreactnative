import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SwitchIcon(props) {
  return (
    <Svg
      width={254}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M236 0H18C8.059 0 0 8.059 0 18s8.059 18 18 18h218c9.941 0 18-8.059 18-18s-8.059-18-18-18z"
        fill="url(#prefix__paint0_linear_4_51)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_4_51"
          x1={0}
          y1={33.388}
          x2={217.14}
          y2={33.388}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BE38F3" stopOpacity={0.01} />
          <Stop offset={1} stopColor="#BE38F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SwitchIcon;
