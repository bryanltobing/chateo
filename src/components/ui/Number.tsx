import { memo, useCallback } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import { Icons } from './Icons';
import { Text } from './Text';

import { colors } from '@/theme/colors';

export type BackspaceProps = { style?: ViewStyle } & PressableProps;

export const Backspace = memo(({ style, ...props }: BackspaceProps) => {
  return (
    <Pressable
      style={({ pressed, hovered }) => [
        numberStyle,
        (pressed || hovered) && { backgroundColor: colors.palette.neutralLine },
        style,
      ]}
      {...props}
    >
      <Icons name="Arrow_Left_LG" size={32} style={{ textAlign: 'center' }} />
    </Pressable>
  );
});

export type NumberProps = {
  number: number;
  style?: StyleProp<ViewStyle>;
  onPress?: (number: number) => void;
} & Omit<PressableProps, 'onPress'>;

export const Number = memo(({ number, style, onPress }: NumberProps) => {
  const handlePressNumber = useCallback(() => {
    onPress?.(number);
  }, [number, onPress]);

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        numberStyle,
        (pressed || hovered) && { backgroundColor: colors.palette.neutralLine },
        style,
      ]}
      onPress={handlePressNumber}
    >
      <Text variant="heading2" style={{ textAlign: 'center' }} selectable={false}>
        {number}
      </Text>
    </Pressable>
  );
});

const numberStyle: ViewStyle = {
  paddingTop: 10,
  paddingBottom: 8,
  borderRadius: 6,
};
