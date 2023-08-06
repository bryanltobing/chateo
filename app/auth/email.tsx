import { Stack } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { KeyboardAvoidingView } from '@/components/KeyboardAvoidingView';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { TextInput } from '@/components/ui/TextInput';

export default function EmailPage() {
  const safeAreaInsets = useSafeAreaInsets();

  const [email, setEmail] = useState('');

  return (
    <>
      <Stack.Screen options={{ title: '' }} />

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <View style={{ paddingTop: 79, paddingHorizontal: 40, gap: 8 }}>
            <Text variant="heading2" style={{ textAlign: 'center' }}>
              Enter Your Email
            </Text>
            <Text variant="body2" style={{ textAlign: 'center' }}>
              We will send confirmation link to your email so that we can sign you in
            </Text>
          </View>

          <TextInput
            placeholder="Email"
            containerStyle={{ marginTop: 48, paddingHorizontal: 24 }}
            onChangeText={setEmail}
            value={email}
          />
        </ScrollView>

        <View
          style={{
            paddingBottom: safeAreaInsets.bottom === 0 ? 32 : safeAreaInsets.bottom,
            paddingHorizontal: 24,
          }}
        >
          <Button>Continue</Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
