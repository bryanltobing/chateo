import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';

export default function HomePage() {
  const [loaded, error] = useFonts({
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // TODO: handle this
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Urlang' }} />

      <View style={styles.container}>
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
    justifyContent: 'center',
  },
});
