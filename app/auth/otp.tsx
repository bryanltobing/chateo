import { Link, Stack } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CodeInput } from '@/components/CodeInput';
import { Button } from '@/components/ui/Button';
import { Number, Backspace } from '@/components/ui/Number';
import { Text } from '@/components/ui/Text';
import { colors } from '@/theme/colors';

const OTP_CELL = 6;

export default function OtpPage() {
  const safeAreaInsets = useSafeAreaInsets();

  const [otpValue, setOtpValue] = useState('');

  const maxOtpValue = otpValue.length >= OTP_CELL;

  const handlePressBackspace = useCallback(() => {
    setOtpValue((prevText) => prevText.slice(0, -1));
  }, []);

  const handlePressNumber = useCallback(
    (number: number) => {
      if (maxOtpValue) {
        return;
      }

      setOtpValue((prevText) => prevText + number);
    },
    [maxOtpValue]
  );

  return (
    <>
      <Stack.Screen options={{ title: '' }} />

      <ScrollView bounces={false}>
        <View style={{ paddingTop: 79, paddingHorizontal: 40, gap: 8 }}>
          <Text variant="heading2" style={{ textAlign: 'center' }}>
            Enter Code
          </Text>
          <Text
            variant="body2"
            style={{ textAlign: 'center', maxWidth: 261, marginLeft: 'auto', marginRight: 'auto' }}
          >
            We have sent you an SMS with the code to +6282192840486
          </Text>
        </View>

        <View style={{ height: 48 }} />

        <CodeInput value={otpValue} />

        <Link asChild href="/(tabs)/chats">
          <Button variant="ghost" style={{ marginTop: 77 }}>
            Resend Code
          </Button>
        </Link>
      </ScrollView>

      <View
        style={[
          keyboardContainerStyle,
          {
            paddingBottom: safeAreaInsets.bottom + 16,
          },
        ]}
      >
        <View style={rowstyle}>
          <Number number={1} style={numberStyle} onPress={handlePressNumber} />
          <Number number={2} style={numberStyle} onPress={handlePressNumber} />
          <Number number={3} style={numberStyle} onPress={handlePressNumber} />
        </View>
        <View style={rowstyle}>
          <Number number={4} style={numberStyle} onPress={handlePressNumber} />
          <Number number={5} style={numberStyle} onPress={handlePressNumber} />
          <Number number={6} style={numberStyle} onPress={handlePressNumber} />
        </View>
        <View style={rowstyle}>
          <Number number={7} style={numberStyle} onPress={handlePressNumber} />
          <Number number={8} style={numberStyle} onPress={handlePressNumber} />
          <Number number={9} style={numberStyle} onPress={handlePressNumber} />
        </View>
        <View style={rowstyle}>
          <View style={numberStyle} />
          <Number number={0} style={numberStyle} onPress={handlePressNumber} />
          <Backspace style={numberStyle} onPress={handlePressBackspace} />
        </View>
      </View>
    </>
  );
}

const numberStyle: ViewStyle = {
  flex: 1,
};

const rowstyle: ViewStyle = {
  flexDirection: 'row',
  gap: 8,
};

const keyboardContainerStyle: ViewStyle = {
  gap: 12,
  backgroundColor: colors.palette.neutralOffWhite,
  padding: 16,
};
