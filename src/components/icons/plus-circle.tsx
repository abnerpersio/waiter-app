import Svg, { Path, SvgProps } from 'react-native-svg';

export function PlusCircleIcon(props: SvgProps) {
  return (
    <Svg width={22} height={24} fill="none" {...props}>
      <Path
        stroke="#D73035"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v8M16 12H8"
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
