import { useHeaderHeight } from '@react-navigation/elements';
import {
  Platform,
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  View,
  ViewProps,
} from 'react-native';

export type KeyboardAvoidingViewProps = ViewProps;

export const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps) => {
  const Wrapper = Platform.OS === 'ios' ? RnKeyboardAvoidingView : View;

  const headerHeight = useHeaderHeight();

  return <Wrapper behavior="padding" keyboardVerticalOffset={headerHeight} {...props} />;
};
