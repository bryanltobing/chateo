import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

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
          ? // TODO: Need to update when handling dark mode
            {
              ...DefaultTheme,
              colors: { ...DefaultTheme.colors, background: colors.palette.neutralWhite },
            }
          : {
              ...DefaultTheme,
              colors: { ...DefaultTheme.colors, background: colors.palette.neutralWhite },
            }
      }
    >
      <Stack
        screenOptions={{
          headerTitleAlign: 'left',
          headerTintColor: colors.palette.neutralActive,
          headerTitleStyle: {
            fontFamily: typography.primary.semiBold,
            fontSize: 18,
          },
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/phone-code" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
