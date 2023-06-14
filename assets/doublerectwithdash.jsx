import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DoubleRectwithDashIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.176 8.126v1.938c0 .967.783 1.75 1.75 1.75h8.138a1.75 1.75 0 001.75-1.75V1.926a1.75 1.75 0 00-1.75-1.75H8.127v1.5h1.937a.25.25 0 01.25.25v8.138a.25.25 0 01-.25.25H1.926a.25.25 0 01-.25-.25V8.126h-1.5z"
        fill="#8F8C83"
      />
    </Svg>
  );
}

export default DoubleRectwithDashIcon;
