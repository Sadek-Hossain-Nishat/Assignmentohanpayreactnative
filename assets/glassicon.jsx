import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GlassIcon(props) {
  return (
    <Svg
      width={18}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.236 1.591a2.481 2.481 0 00-3.487 0L.879 7.4a2.436 2.436 0 000 3.47l3.913 3.873a2.483 2.483 0 003.488 0l5.146-5.093 2.518-1.246a.624.624 0 00.162-1.004l-5.87-5.809zm4.368 6.081l-1.692.838H1.582c.048-.079.107-.153.176-.222l5.87-5.809a1.233 1.233 0 011.73 0l5.246 5.193zm1.05 8.816c.834 0 1.667-.494 1.667-1.875s-1.667-3.125-1.667-3.125-1.666 1.744-1.666 3.125.833 1.875 1.666 1.875z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}

export default GlassIcon;
