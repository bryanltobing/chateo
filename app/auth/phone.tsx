import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CountryCode } from '@/components/CountryCode';
import { KeyboardAvoidingView } from '@/components/KeyboardAvoidingView';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { TextInput } from '@/components/ui/TextInput';

export default function PhonePage() {
  const safeAreaInsets = useSafeAreaInsets();

  const [phoneNumber, setPhoneNumber] = useState('');

  const params = useLocalSearchParams<{ flag?: string; dialCode?: string }>();

  const countryData = useMemo(() => {
    if (!params.flag || !params.dialCode) {
      return {
        flag: '🇮🇩',
        phoneCode: '+62',
      };
    }
    return {
      flag: params.flag,
      phoneCode: params.dialCode,
    };
  }, [params.flag, params.dialCode]);

  return (
    <>
      <Stack.Screen options={{ title: '' }} />

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <View style={{ paddingTop: 79, paddingHorizontal: 40, gap: 8 }}>
            <Text variant="heading2" style={{ textAlign: 'center' }}>
              Enter Your Phone Number
            </Text>
            <Text variant="body2" style={{ textAlign: 'center' }}>
              Please confirm your country code and enter your phone number
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginTop: 48,
              paddingHorizontal: 24,
            }}
          >
            <Link asChild href="(modals)/phone-code">
              <CountryCode flag={countryData.flag} phoneCode={countryData.phoneCode} />
            </Link>
            <TextInput
              placeholder="Phone Number"
              containerStyle={{ flex: 1 }}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              keyboardType="number-pad"
              maxLength={30}
            />
          </View>
        </ScrollView>

        <View
          style={{
            paddingBottom: safeAreaInsets.bottom === 0 ? 32 : safeAreaInsets.bottom,
            paddingHorizontal: 24,
          }}
        >
          <Link asChild href="/settings/profile">
            <Button>Continue</Button>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
