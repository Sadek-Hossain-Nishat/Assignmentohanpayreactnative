import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HorizontalbarIcon(props) {
  return (
    <Svg
      width={20}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill="#fff" d="M0 0h20v14H0z" />
    </Svg>
  );
}

export default HorizontalbarIcon;
