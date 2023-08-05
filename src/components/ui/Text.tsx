import { Text as RnText, TextProps as RnTextProps, StyleProp, TextStyle } from 'react-native';

import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
type Variants = keyof typeof textVariants;

export type TextProps = {
  /**
   * One of the different types of text variants.
   */
  variant?: Variants;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
} & RnTextProps;

export function Text({ variant = 'body1', children, style, ...props }: TextProps) {
  return (
    <RnText style={[textVariants[variant], style]} {...props}>
      {children}
    </RnText>
  );
}

const baseStyle: StyleProp<TextStyle> = [
  { color: colors.palette.neutralActive, fontFamily: typography.primary.semiBold },
];

const textVariants = {
  heading1: [baseStyle, { fontSize: 32 }] satisfies StyleProp<TextStyle>,
  heading2: [baseStyle, { fontSize: 24 }] satisfies StyleProp<TextStyle>,
  subHeading1: [baseStyle, { fontSize: 18, lineHeight: 30 }] satisfies StyleProp<TextStyle>,
  subHeading2: [baseStyle, { fontSize: 16, lineHeight: 28 }] satisfies StyleProp<TextStyle>,
  body1: [baseStyle, { fontSize: 14, lineHeight: 24 }] satisfies StyleProp<TextStyle>,
  body2: [baseStyle, { fontSize: 14, lineHeight: 24 }] satisfies StyleProp<TextStyle>,
  metadata1: [baseStyle, { fontSize: 12, lineHeight: 20 }] satisfies StyleProp<TextStyle>,
  metadata2: [baseStyle, { fontSize: 10, lineHeight: 16 }] satisfies StyleProp<TextStyle>,
  metadata3: [baseStyle, { fontSize: 10, lineHeight: 16 }] satisfies StyleProp<TextStyle>,
};
