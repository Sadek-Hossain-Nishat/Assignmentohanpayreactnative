import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ItalicIcon(props) {
  return (
    <Svg
      width={15}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.839.5H5.538c-.398 0-.72.32-.72.72 0 .4.322.72.72.72h3.351L5.002 14.89H1.22c-.398 0-.72.33-.72.72 0 .4.322.72.72.72h8.636a.719.719 0 100-1.44H6.505l3.886-12.95h3.783a.719.719 0 100-1.44H9.839z"
        fill="#8F8C83"
      />
    </Svg>
  );
}

export default ItalicIcon;
