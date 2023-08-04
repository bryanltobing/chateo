import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { colors } from '@/theme/colors';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
  });

  const colorScheme = useColorScheme();

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
    <ThemeProvider
      value={
        colorScheme === 'dark'
          ? DarkTheme
          : {
              ...DefaultTheme,
              colors: { ...DefaultTheme.colors, background: colors.palette.neutralWhite },
            }
      }>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.palette.brandColorDefault,
          },
          headerTintColor: colors.palette.neutralOffWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </ThemeProvider>
  );
}
