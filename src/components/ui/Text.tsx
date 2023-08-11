import { Text as RnText, TextProps as RnTextProps, StyleProp, TextStyle } from 'react-native';

import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
type Variants = keyof typeof textVariants;

export type TextProps = {
  /**
   * One of the different types of text variants.
   * @default 'body1'
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
    <RnText style={[baseStyle, textVariants[variant], style]} {...props}>
      {children}
    </RnText>
  );
}

const baseStyle: StyleProp<TextStyle> = [
  { color: colors.palette.neutralActive, fontFamily: typography.primary.semiBold },
];

const textVariants = {
  heading1: [
    { fontSize: 32, lineHeight: 40, fontFamily: typography.primary.bold },
  ] satisfies StyleProp<TextStyle>,
  heading2: [{ fontSize: 24, fontFamily: typography.primary.bold }] satisfies StyleProp<TextStyle>,
  subHeading1: [{ fontSize: 18, lineHeight: 30 }] satisfies StyleProp<TextStyle>,
  subHeading2: [{ fontSize: 16, lineHeight: 28 }] satisfies StyleProp<TextStyle>,
  body1: [{ fontSize: 14, lineHeight: 24 }] satisfies StyleProp<TextStyle>,
  body2: [
    { fontSize: 14, lineHeight: 24, fontFamily: typography.primary.regular },
  ] satisfies StyleProp<TextStyle>,
  metadata1: [
    { fontSize: 12, lineHeight: 20, fontFamily: typography.primary.regular },
  ] satisfies StyleProp<TextStyle>,
  metadata2: [
    { fontSize: 10, lineHeight: 16, fontFamily: typography.primary.regular },
  ] satisfies StyleProp<TextStyle>,
  metadata3: [
    { fontSize: 10, lineHeight: 16, fontFamily: typography.primary.semiBold },
  ] satisfies StyleProp<TextStyle>,
};
