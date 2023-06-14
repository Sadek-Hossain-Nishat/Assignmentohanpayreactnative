import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CircularIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
        fill={props.circularcolor}
      />
    </Svg>
  );
}

export default CircularIcon;
