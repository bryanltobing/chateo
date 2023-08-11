import { memo, useMemo } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { Text } from './ui/Text';

import { colors } from '@/theme/colors';

const CircleCell = memo(() => {
  return <View style={circleStyle} />;
});

const TextCell = memo(({ value }: { value: string }) => {
  return <Text variant="heading1">{value}</Text>;
});

const circleStyle: ViewStyle = {
  width: 24,
  height: 24,
  backgroundColor: colors.palette.neutralLine,
  borderRadius: 12,
};

export type CodeInputProps = {
  value: string;
  /**
   * @default 6
   */
  cellCount?: number;
} & ViewProps;

export const CodeInput = ({ value, cellCount = 6, style, ...props }: CodeInputProps) => {
  const cellCountArray = useMemo(() => {
    return [...new Array(cellCount)];
  }, [cellCount]);

  return (
    <View style={[containerStyle, style]} {...props}>
      {cellCountArray.map((_, index) => {
        return (
          <View style={cellContainerStyle} key={index}>
            {value.charAt(index) !== '' ? (
              <TextCell value={value.charAt(index)} />
            ) : (
              <View style={circleContainerStyle}>
                <CircleCell />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const containerStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
};

const cellContainerStyle: ViewStyle = {
  flex: 1,
  alignItems: 'center',
};

const circleContainerStyle: ViewStyle = {
  height: 40,
  width: 32,
  justifyContent: 'center',
  alignItems: 'center',
};
