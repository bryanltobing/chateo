import { Ref, forwardRef } from 'react';
import { Pressable, PressableProps, TextStyle, ViewStyle, StyleProp, View } from 'react-native';

import { Text } from './Text';

import { colors } from '@/theme/colors';

type Variants = keyof typeof viewVariants;

export type ButtonProps = {
  /**
   * One of the different types of button variants.
   * @default 'primary'
   */
  variant?: Variants;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
} & PressableProps;

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 * @note
 * If you wrap this within the Expo Router's Link component, you will need to pass the asChild prop to Link.
 */
export const Button = forwardRef(
  ({ variant = 'primary', style, children, ...props }: ButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        style={({ pressed, hovered, focused }) => [
          viewVariants[variant],
          style,
          (!!pressed || !!hovered) && pressedViewVariants[variant],
          !!focused && focusedViewVariants[variant],
          !!props.disabled && { opacity: 0.5 },
        ]}
        role="button"
        ref={ref}
        {...props}
      >
        {({ pressed, hovered, focused }) => (
          <Text
            variant="subHeading2"
            style={[
              textVariants[variant],
              (!!pressed || !!hovered) && pressedTextVariants[variant],
              !!focused && focusedTextVariants[variant],
            ]}
          >
            {children}
          </Text>
        )}
      </Pressable>
    );
  }
);

const baseViewStyle: ViewStyle = {
  flexDirection: 'row',
  paddingVertical: 12,
  paddingHorizontal: 48,
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 10,
  borderRadius: 30,
};

const baseTextStyle: TextStyle = {
  textAlign: 'center',
  flexShrink: 1,
  flexGrow: 0,
};

const viewVariants = {
  primary: [
    baseViewStyle,
    {
      backgroundColor: colors.palette.brandColorDefault,
    },
  ] as StyleProp<ViewStyle>,
  secondary: [
    baseViewStyle,
    {
      borderColor: colors.palette.brandColorDefault,
      borderWidth: 2,
    },
  ] as StyleProp<ViewStyle>,
  ghost: [baseViewStyle],
};

const textVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: [
    baseTextStyle,
    {
      color: colors.palette.neutralOffWhite,
    },
  ],
  secondary: [
    baseTextStyle,
    {
      color: colors.palette.brandColorDefault,
    },
  ],
  ghost: [
    baseTextStyle,
    {
      color: colors.palette.brandColorDefault,
    },
  ],
};

const pressedViewVariants: Record<Variants, StyleProp<ViewStyle>> = {
  primary: { backgroundColor: colors.palette.brandColorDark },
  secondary: { borderColor: colors.palette.brandColorDark },
  ghost: {},
};

const pressedTextVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: {},
  secondary: { color: colors.palette.brandColorDark },
  ghost: { color: colors.palette.brandColorDark },
};

const focusedViewVariants: Record<Variants, StyleProp<ViewStyle>> = {
  primary: { borderColor: colors.palette.brandColorBackground, borderWidth: 8 },
  secondary: { backgroundColor: colors.palette.neutralOffWhite, borderWidth: 4 },
  ghost: {
    backgroundColor: colors.palette.neutralLine,
    borderColor: colors.palette.neutralOffWhite,
    borderWidth: 8,
  },
};

const focusedTextVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: {},
  secondary: { color: colors.palette.brandColorDark },
  ghost: { color: colors.palette.brandColorDark },
};
