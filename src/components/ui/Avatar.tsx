import React, { Ref, forwardRef } from 'react';
import { Image, Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';

import { Icons } from './Icons';
import { Text } from './Text';

import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

type State = 'noStory' | 'story' | 'online' | 'none';

export type AvatarProps = {
  /**
   * @default undefined
   */
  type?: 'noPhoto' | 'photo';
  /**
   * @default undefined
   */
  imageUri?: string;
  /**
   * @default 'NN'
   */
  name?: string;
  /**
   * @default
   */
  state?: State;
  /**
   * style
   */
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const OnlineBadge = () => (
  <View
    style={{
      width: 12,
      height: 12,
      backgroundColor: colors.palette.accentSuccess,
      borderRadius: 6,
    }}
  />
);

export const Avatar = forwardRef(
  (
    { type, state = 'noStory', imageUri, name = 'NN', style, ...props }: AvatarProps,
    ref: Ref<View>
  ) => {
    const showStory = state === 'story' || state === 'noStory';
    const isOnline = state === 'online';

    const pressableStyle: ViewStyle = {
      backgroundColor: 'white',
      padding: 2,
      borderWidth: showStory ? 2 : 0,
      borderColor:
        state === 'noStory' ? colors.palette.neutralDisabled : colors.palette.brandColorDefault,
      borderRadius: 18,
    };

    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => [pressableStyle, { opacity: pressed ? 0.5 : 1 }, style]}
        {...props}
      >
        <View
          style={{
            backgroundColor:
              state !== 'noStory'
                ? colors.palette.brandColorDefault
                : colors.palette.neutralOffWhite,
            width: 48,
            height: 48,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {isOnline && (
            <View
              style={{
                position: 'absolute',
                top: -4,
                right: -4,
                backgroundColor: 'white',
                borderRadius: 240,
                padding: 2,
              }}
            >
              <OnlineBadge />
            </View>
          )}

          {state === 'noStory' && (
            <Icons name="Add_Plus" size={24} color={colors.palette.neutralDisabled} />
          )}

          {type === 'noPhoto' && (
            <Text
              style={{ color: colors.palette.neutralOffWhite, fontFamily: typography.primary.bold }}
            >
              {`${name?.substr(0, 2).toUpperCase()}`}
            </Text>
          )}

          {type === 'photo' && (
            <Image
              source={{ uri: imageUri }}
              style={{ borderRadius: 16, width: '100%', height: '100%', zIndex: -1 }}
            />
          )}
        </View>
      </Pressable>
    );
  }
);
