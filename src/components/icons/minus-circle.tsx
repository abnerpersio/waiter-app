import Svg, { Path } from 'react-native-svg';

export function MinusCircleIcon() {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke="#D73035"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 12H8"
      />
      <Path
        stroke="#D73035"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21v0a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
