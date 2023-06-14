import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SelectorIcon(props) {
  return (
    <Svg
      width={2}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.168 11.832V.999"
        stroke="#8F8C83"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SelectorIcon;
