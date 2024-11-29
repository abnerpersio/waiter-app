import Svg, { Path } from 'react-native-svg';

export function CheckCircleIcon() {
  return (
    <Svg width={25} height={24} fill="none">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.75 14.25 9.5 12M15.5 10.5l-3.75 3.75"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
