import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BlackBoxIcon(props) {
  return (
    <Svg
      width={82}
      height={82}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M72 0H10C4.477 0 0 4.477 0 10v62c0 5.523 4.477 10 10 10h62c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10z"
        fill="#000"
      />
    </Svg>
  );
}

export default BlackBoxIcon;
