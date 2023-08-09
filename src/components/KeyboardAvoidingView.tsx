import { ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';

export type KeyboardAvoidingViewProps = ViewProps;

export const KeyboardAvoidingView = ({ style, ...props }: KeyboardAvoidingViewProps) => {
  const keyboardHeight = useKeyboardHeight();

  const paddingBottomValue = useSharedValue(0);

  const paddingBottomAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom: withTiming(paddingBottomValue.value + keyboardHeight, {
      duration: 230,
    }),
  }));

  return <Animated.View style={[{ flex: 1 }, paddingBottomAnimatedStyle, style]} {...props} />;
};
