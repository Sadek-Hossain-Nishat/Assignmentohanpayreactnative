import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChecklistIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.25 7.5l2.645 2.12c.62.49 1.52.42 2.052-.17L15.75 3m.75 3.75v6.75c0 1.66-1.343 3-3 3h-9c-1.657 0-3-1.34-3-3v-9c0-1.66 1.343-3 3-3h8.25"
        stroke="#8F8C83"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChecklistIcon;
