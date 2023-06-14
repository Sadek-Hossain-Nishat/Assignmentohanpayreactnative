import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BlackBallIcon(props) {
  return (
    <Svg
      width={31}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M30.25 15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15z"
        fill="#000"
      />
    </Svg>
  );
}

export default BlackBallIcon;
