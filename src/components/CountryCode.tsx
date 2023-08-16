import { Ref, forwardRef } from 'react';
import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';

import { Text } from './ui/Text';

import { colors } from '@/theme/colors';

export type CountryCodeProps = {
  flag: React.ReactNode;
  phoneCode: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<PressableProps, 'children'>;

export const CountryCode = forwardRef(
  ({ containerStyle, flag, phoneCode, ...props }: CountryCodeProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        style={({ pressed, hovered }) => [
          containerStyle,
          { opacity: pressed || hovered ? 0.5 : 1 },
        ]}
        {...props}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            paddingVertical: 6,
            paddingHorizontal: 8,
            backgroundColor: colors.palette.neutralOffWhite,
            borderRadius: 4,
          }}
        >
          {typeof flag === 'string' ? <Text>{flag}</Text> : flag}
          <Text style={{ color: colors.palette.neutralDisabled }}>{phoneCode}</Text>
        </View>
      </Pressable>
    );
  }
);

CountryCode.displayName = 'CountryCode';
