import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BoldIcon(props) {
  return (
    <Svg
      width={13}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.9.67A2.73 2.73 0 00.166 3.4v11.62c0 1.28 1.038 2.31 2.317 2.31h5.259a4.54 4.54 0 004.545-4.54c0-1.95-1.228-3.61-2.953-4.26a4.538 4.538 0 001.438-3.32A4.54 4.54 0 006.227.67H2.9zm3.327 7.57c1.673 0 3.03-1.35 3.03-3.03 0-1.67-1.357-3.03-3.03-3.03H2.9c-.673 0-1.219.55-1.219 1.22v4.84h4.546zM1.681 9.76v5.26c0 .44.359.8.802.8h5.259c1.673 0 3.03-1.36 3.03-3.03 0-1.67-1.357-3.03-3.03-3.03H1.681z"
        fill="#8F8C83"
      />
    </Svg>
  );
}

export default BoldIcon;
