import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LinkIcon(props) {
  return (
    <Svg
      width={11}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.27 3.06l.571-.57a4.863 4.863 0 016.864 0 4.85 4.85 0 010 6.86l-.572.58"
        stroke="#8F8C83"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default LinkIcon;
