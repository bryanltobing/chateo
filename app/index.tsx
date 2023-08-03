import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';

export default function HomePage() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ title: 'Urlang' }} />

      <View
        style={[
          styles.container,
          { paddingBottom: safeAreaInsets.bottom === 0 ? 24 : safeAreaInsets.bottom },
        ]}>
        <View />
        <Text style={{ fontFamily: 'Mulish-SemiBold' }}>
          Open up app/_layout.tsx to start working on your app!
        </Text>
        <Button variant="primary">Getting Started</Button>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
