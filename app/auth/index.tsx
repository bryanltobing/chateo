import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import { ListItem } from '@/components/ui/ListItem';

export default function AuthPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Sign In' }} />

      <View style={{ paddingTop: 8 }}>
        <View style={{ paddingHorizontal: 0, paddingVertical: 8, gap: 8 }}>
          <Link href="/auth/phone" asChild>
            <ListItem text="Phone Number" icon="Phone" hSpace />
          </Link>
          <Link href="/auth/email" asChild>
            <ListItem text="Email" icon="Mail" hSpace />
          </Link>
        </View>
      </View>
    </>
  );
}
