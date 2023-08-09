import { useFocusEffect } from 'expo-router';
import React, { Ref, forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import {
  TextInput as RnTextInput,
  TextInputProps as RnTextInputProps,
  ViewStyle,
  Pressable,
  Platform,
  View,
  StyleProp,
} from 'react-native';

import { Icons, IconsProps } from './Icons';

import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export type TextInputProps = {
  /**
   * Icon rendered at the start / left of text input
   */
  startIcon?: IconsProps['name'];
  /**
   * Icon rendered at the end / right of text input
   */
  endIcon?: IconsProps['name'];
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * The most outer container style that wraps all components
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * View style that wraps text input
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * Whether TextInput is in focused on first render
   */
  autoFocus?: boolean;
} & RnTextInputProps;

export const TextInput = forwardRef(
  (
    {
      startIcon,
      endIcon,
      editable: editableOverride,
      disabled,
      containerStyle,
      inputWrapperStyle,
      autoFocus,
      ...props
    }: TextInputProps,
    ref: Ref<RnTextInput | null>
  ) => {
    const [focused, setFocused] = useState(false);

    const textInputRef = useRef<RnTextInput>(null);
    const editable = editableOverride ?? !disabled;

    useImperativeHandle(ref, () => textInputRef.current);

    const handleFocus = useCallback(() => {
      if (!editable) {
        return;
      }

      if (!autoFocus) {
        return;
      }

      textInputRef.current?.focus();
    }, [autoFocus, editable]);

    useFocusEffect(
      useCallback(() => {
        const timeout = setTimeout(
          () => {
            handleFocus();
          },
          // workaround for this issue https://github.com/software-mansion/react-native-screens/issues/1637
          Platform.OS === 'ios' ? 500 : 0
        );

        return () => clearTimeout(timeout);
      }, [handleFocus])
    );

    return (
      <Pressable onPress={handleFocus} style={containerStyle}>
        <View
          style={[
            {
              flexDirection: 'row',
              paddingTop: 6,
              paddingHorizontal: 8,
              backgroundColor: colors.palette.neutralOffWhite,
              borderRadius: 4,
              overflow: 'hidden',
              alignItems: 'center',
              opacity: editable ? 1 : 0.5,
              borderWidth: 2,
              borderColor: 'transparent',
            },
            !!focused && viewFocused,
            inputWrapperStyle,
          ]}
        >
          {/* workaround for https://github.com/facebook/react-native/pull/38359 */}
          {Platform.select({ ios: <View style={{ height: 24 }} /> })}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 }}>
            {startIcon && (
              <Icons
                name={startIcon}
                color={props.value ? colors.palette.neutralActive : colors.palette.neutralDisabled}
              />
            )}

            <RnTextInput
              ref={textInputRef}
              style={{
                ...Platform.select({ web: { outlineStyle: 'none' } }),
                fontFamily: typography.primary.semiBold,
                flex: 1,
                width: '100%',
                ...(Platform.OS !== 'ios' ? { lineHeight: 24 } : {}),
                color: colors.palette.neutralActive,
                paddingBottom: 6,
              }}
              placeholderTextColor={colors.palette.neutralDisabled}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              editable={editable}
              {...props}
            />

            {endIcon && (
              <Icons
                name={endIcon}
                color={props.value ? colors.palette.neutralActive : colors.palette.neutralDisabled}
              />
            )}
          </View>
        </View>
      </Pressable>
    );
  }
);

const viewFocused: ViewStyle = {
  borderWidth: 2,
  borderColor: colors.palette.neutralLine,
};
