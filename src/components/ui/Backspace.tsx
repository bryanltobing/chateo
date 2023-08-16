import { memo } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

import { Icons } from './Icons';

import { colors } from '@/theme/colors';

export type BackspaceProps = { style?: ViewStyle } & PressableProps;

export const Backspace = memo(({ style, ...props }: BackspaceProps) => {
  return (
    <Pressable
      style={({ pressed, hovered }) => [
        containerStyle,
        (pressed || hovered) && { backgroundColor: colors.palette.neutralLine },
        style,
      ]}
      {...props}
    >
      <Icons name="Arrow_Left_LG" size={32} style={{ textAlign: 'center' }} />
    </Pressable>
  );
});

const containerStyle: ViewStyle = {
  paddingTop: 10,
  paddingBottom: 8,
  borderRadius: 6,
};
