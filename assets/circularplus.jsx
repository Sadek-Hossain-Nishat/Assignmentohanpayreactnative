import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CircularplusIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 7v8m-4-4h8m-4 10C5.477 21 1 16.52 1 11S5.477 1 11 1s10 4.48 10 10-4.477 10-10 10z"
        stroke="#E74334"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CircularplusIcon;
