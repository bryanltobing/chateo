import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeIllustration } from '@/components/illustrations/HomeIllustration';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

export default function HomePage() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View
        style={[
          {
            paddingBottom: safeAreaInsets.bottom === 0 ? 24 : safeAreaInsets.bottom,
            paddingTop: safeAreaInsets.top + 45,
            flex: 1,
            paddingHorizontal: 24,
          },
        ]}
      >
        <ScrollView bounces={false} contentContainerStyle={{ gap: 42 }}>
          <HomeIllustration style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          <Text variant="heading2" style={{ textAlign: 'center' }}>
            Connect easily with your family and friends over countries
          </Text>
        </ScrollView>

        <View style={{ gap: 18 }}>
          <Text style={{ textAlign: 'center' }}>Terms & Privacy Policy</Text>
          <Button variant="primary">Getting Started</Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
