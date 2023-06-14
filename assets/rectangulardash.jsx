import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RectDashIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.667 1.332H2.334a1 1 0 00-1 1v11.333a1 1 0 001 1h11.333a1 1 0 001-1V2.332a1 1 0 00-1-1z"
        stroke="#8F8C83"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default RectDashIcon;
