import { Pressable, PressableProps, Text, TextStyle, ViewStyle, StyleProp } from 'react-native';

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
 */
export function Button({ variant = 'primary', style, children, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed, hovered, focused }) => [
        viewVariants[variant],
        style,
        (!!pressed || !!hovered) && pressedViewVariants[variant],
        !!focused && focusedViewVariants[variant],
        !!props.disabled && { opacity: 0.5 },
      ]}
      accessibilityRole="button"
      {...props}>
      {({ pressed, hovered, focused }) => (
        <Text
          style={[
            textVariants[variant],
            (!!pressed || !!hovered) && pressedTextVariants[variant],
            !!focused && focusedTextVariants[variant],
          ]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}

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
  fontSize: 16,
  lineHeight: 28,
  textAlign: 'center',
  flexShrink: 1,
  flexGrow: 0,
  fontWeight: '600',
};

const viewVariants = {
  primary: [
    baseViewStyle,
    {
      backgroundColor: '#002DE3',
    },
  ] as StyleProp<ViewStyle>,
  secondary: [
    baseViewStyle,
    {
      borderColor: '#002DE3',
      borderWidth: 2,
    },
  ] as StyleProp<ViewStyle>,
  ghost: [baseViewStyle],
};

const textVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: [
    baseTextStyle,
    {
      color: '#F7F7FC',
    },
  ],
  secondary: [
    baseTextStyle,
    {
      color: '#002DE3',
    },
  ],
  ghost: [
    baseTextStyle,
    {
      color: '#002DE3',
    },
  ],
};

const pressedViewVariants: Record<Variants, StyleProp<ViewStyle>> = {
  primary: { backgroundColor: '#001A83' },
  secondary: { borderColor: '#001A83' },
  ghost: {},
};

const pressedTextVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: {},
  secondary: { color: '#001A83' },
  ghost: { color: '#001A83' },
};

const focusedViewVariants: Record<Variants, StyleProp<ViewStyle>> = {
  primary: { borderColor: '#D2D5F9', borderWidth: 8 },
  secondary: { backgroundColor: '#F7F7FC', borderWidth: 4 },
  ghost: { backgroundColor: '#EDEDED', borderColor: '#F7F7FC', borderWidth: 8 },
};

const focusedTextVariants: Record<Variants, StyleProp<TextStyle>> = {
  primary: {},
  secondary: { color: '#001A83' },
  ghost: { color: '#001A83' },
};
