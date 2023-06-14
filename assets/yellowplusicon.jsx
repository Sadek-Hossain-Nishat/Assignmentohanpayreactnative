import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function YellowplusIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.143 0h-.286C6.652 0 0 6.652 0 14.857v.286C0 23.348 6.652 30 14.857 30h.286C23.348 30 30 23.348 30 15.143v-.286C30 6.652 23.348 0 15.143 0z"
        fill="#787880"
        fillOpacity={0.2}
      />
    </Svg>
  );
}

export default YellowplusIcon;
