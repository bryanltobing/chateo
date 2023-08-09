import { Platform, View, ViewProps, useWindowDimensions } from 'react-native';

import { useFixedHeaderHeight } from '@/hooks/useFixedHeaderHeight';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';

export type KeyboardAvoidingViewProps = ViewProps;

export const KeyboardAvoidingView = ({ style, ...props }: KeyboardAvoidingViewProps) => {
  const headerHeight = useFixedHeaderHeight();
  const keyboardHeight = useKeyboardHeight();
  const windowDimensions = useWindowDimensions();

  return (
    <View
      style={[
        {
          height:
            Platform.OS === 'ios'
              ? windowDimensions.height - keyboardHeight - headerHeight
              : 'auto',
          flex: Platform.OS === 'ios' ? undefined : 1,
        },
        style,
      ]}
      {...props}
    />
  );
};
