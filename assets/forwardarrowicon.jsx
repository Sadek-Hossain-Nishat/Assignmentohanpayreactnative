import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ForwardArrowIcon(props) {
  return (
    <Svg
      width={6}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 1l4 5-4 5"
        stroke="#8F8C83"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ForwardArrowIcon;
