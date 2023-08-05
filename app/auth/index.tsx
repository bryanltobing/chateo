import { useHeaderHeight } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function AuthPage() {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen options={{ title: 'Authentication' }} />

      <View style={{ paddingTop: headerHeight }}></View>
    </>
  );
}
