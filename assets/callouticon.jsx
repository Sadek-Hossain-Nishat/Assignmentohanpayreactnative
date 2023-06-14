import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CalloutIcon(props) {
  return (
    <Svg
      width={18}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.125 14.62a.623.623 0 01-1.027.48c-4.094-3.43-8.348-3.6-8.348-3.6H4.625c-.829 0-1.624-.33-2.21-.92A3.113 3.113 0 011.5 8.37c0-.82.329-1.62.915-2.21a3.146 3.146 0 012.21-.91H7.75s4.254-.17 8.348-3.6a.557.557 0 01.32-.14.626.626 0 01.707.61v12.5z"
        stroke="#8F8C83"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalloutIcon;
