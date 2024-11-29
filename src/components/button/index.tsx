import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';
import { AppText } from '../text';
import { styles } from './styles';

type Props = Omit<PressableProps, 'style'> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Button(props: Props) {
  const { style, disabled, children, ...restProps } = props;

  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        android_ripple={{
          color: '#eb2f35',
        }}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          style,
        ]}
        {...restProps}
      >
        <AppText weight="600" color="#fff">
          {children}
        </AppText>
      </Pressable>
    </View>
  );
}
