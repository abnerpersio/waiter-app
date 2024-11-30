import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { AppText } from '../text';
import { COLORS, styles } from './styles';

type Props = Omit<PressableProps, 'style'> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: 'default' | 'white';
  loading?: boolean;
};

export function Button(props: Props) {
  const { style, disabled, children, color = 'default', loading, ...restProps } = props;

  const isDisabled = disabled || loading;

  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        android_ripple={{
          color: COLORS[color].ripple,
        }}
        disabled={isDisabled}
        style={({ pressed }) => [
          styles.button,
          styles[`button-${color}`],
          pressed && styles.buttonActive,
          isDisabled && styles.buttonDisabled,
          style,
        ]}
        {...restProps}
      >
        {loading && <ActivityIndicator color="#fff" />}

        {!loading && (
          <AppText weight="600" color={COLORS[color].text}>
            {children}
          </AppText>
        )}
      </Pressable>
    </View>
  );
}
