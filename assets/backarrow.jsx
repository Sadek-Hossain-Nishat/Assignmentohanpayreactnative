import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrow(props) {
  return (
    <Svg
      width={6}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 11L1 6l4-5"
        stroke="#AF8E39"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrow;
