import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { Icons } from '@/components/ui/Icon';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
  });

  const colorScheme = useColorScheme();

  const { goBack } = useNavigation();

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
      }
    >
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerTitleAlign: 'left',
          headerTintColor: colors.palette.neutralActive,
          headerTitleStyle: {
            fontFamily: typography.primary.semiBold,
            fontSize: 18,
          },

          headerLeft: ({ tintColor, canGoBack }) => (
            <Icons
              name="Chevron_Left"
              size={24}
              color={tintColor}
              onPress={canGoBack ? goBack : undefined}
              style={{ marginRight: 8 }}
            />
          ),
        }}
      />
    </ThemeProvider>
  );
}
