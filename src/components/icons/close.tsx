import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export function CloseIcon(props: Props) {
  const { color } = props;

  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 8 8 8m0-8-8 8"
      />
    </Svg>
  );
}
