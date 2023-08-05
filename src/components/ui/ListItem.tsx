import { Ref, forwardRef } from 'react';
import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';

import { Icons, IconsProps } from './Icons';
import { Text } from './Text';

import { colors } from '@/theme/colors';

type ListItemProps = {
  /**
   * Action title
   */
  text: string;
  /**
   * Left icon
   */
  icon?: IconsProps['name'];
  /**
   * with horizontal padding or not
   * @default false
   */
  hSpace?: boolean;
} & PressableProps;

export const ListItem = forwardRef(
  ({ text, icon, hSpace = false, ...props }: ListItemProps, ref: Ref<View>) => {
    return (
      <Pressable
        {...props}
        style={({ pressed, hovered }) => [
          {
            flexDirection: 'row',
            paddingVertical: 8,
            alignItems: 'center',
            paddingHorizontal: hSpace ? 16 : 0,
          },
          (!!pressed || !!hovered) && pressedView,
        ]}
        android_ripple={{ color: colors.palette.neutralWeak }}
        ref={ref}
      >
        <View style={{ flexDirection: 'row', flex: 1, gap: 6, alignItems: 'center' }}>
          {icon && <Icons name={icon} />}
          <Text>{text}</Text>
        </View>
        {props.onPress && <Icons name="Chevron_Right" />}
      </Pressable>
    );
  }
);

const pressedView: StyleProp<ViewStyle> = {
  opacity: 0.5,
};
