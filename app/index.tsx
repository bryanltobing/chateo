import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>Open up app/_layout.tsx to start working on your app!</Text>
      <Button />
      <StatusBar style="auto" />
    </View>
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
