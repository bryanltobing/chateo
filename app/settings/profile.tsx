import { Stack } from 'expo-router';
import { Alert, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AvatarPicker } from '@/components/AvatarPicker';
import { KeyboardAvoidingView } from '@/components/KeyboardAvoidingView';
import { Button } from '@/components/ui/Button';
import { TextInput } from '@/components/ui/TextInput';

export default function ProfileSettingsPage() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ title: 'Your Profile' }} />

      <KeyboardAvoidingView style={{ gap: 16 }}>
        <ScrollView bounces={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
          <View
            style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 46, paddingBottom: 32 }}
          >
            <AvatarPicker />
          </View>
          <View style={{ gap: 12 }}>
            <TextInput placeholder="First Name (Required)" />
            <TextInput placeholder="Last Name (Optional)" />
          </View>
        </ScrollView>
        <View
          style={{
            paddingBottom: safeAreaInsets.bottom === 0 ? 32 : safeAreaInsets.bottom,
            paddingHorizontal: 24,
          }}
        >
          <Button onPress={() => Alert.alert('Saved')}>Save</Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
