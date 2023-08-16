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
import countries from '@/countries.json';

export default function PhonePage() {
  const safeAreaInsets = useSafeAreaInsets();

  const [phoneNumber, setPhoneNumber] = useState('');

  const params = useLocalSearchParams<{ code?: string }>();

  const countryData = useMemo(() => {
    const defaultData = {
      flag: '🇮🇩',
      phoneCode: '+62',
    };

    if (!params.code) {
      return defaultData;
    }

    const selectedCountry = countries.find((country) => country['name-code'] === params.code);

    if (!selectedCountry) {
      return defaultData;
    }
    return {
      flag: selectedCountry.flag,
      phoneCode: selectedCountry['dial-code'],
    };
  }, [params.code]);

  return (
    <>
      <Stack.Screen options={{ title: '' }} />

      <KeyboardAvoidingView style={{ gap: 16 }}>
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
          <Link asChild href="/auth/otp">
            <Button>Continue</Button>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
