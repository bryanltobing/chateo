import { useHeaderHeight } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import { View } from 'react-native';

import { ListItem } from '@/components/ui/ListItem';

export default function AuthPage() {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen options={{ title: 'Authentication' }} />

      <View style={{ paddingTop: headerHeight + 8 }}>
        <View style={{ paddingHorizontal: 0, paddingVertical: 8, gap: 8 }}>
          <ListItem
            text="Phone Number"
            icon="Phone"
            onPress={() => {
              alert('Phone Number');
            }}
            hSpace
          />
          <ListItem
            text="Email"
            icon="Mail"
            onPress={() => {
              alert('Email');
            }}
            hSpace
          />
        </View>
      </View>
    </>
  );
}
