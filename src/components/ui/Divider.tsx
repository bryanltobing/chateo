import { memo } from 'react';
import { View, ViewProps } from 'react-native';

import { colors } from '@/theme/colors';

export type DividerProps = ViewProps;

export const Divider = memo(({ ...props }: DividerProps) => {
  return (
    <View
      style={[
        {
          width: '100%',
          height: 1,
          backgroundColor: colors.palette.neutralLine,
        },
      ]}
      {...props}
    />
  );
});
