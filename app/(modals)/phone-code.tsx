import { FlashList } from '@shopify/flash-list';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ListItem } from '@/components/ui/ListItem';
/**
 * Source: https://46elks.com/kb/country-codes
 */
import { TextInput } from '@/components/ui/TextInput';
import countries from '@/countries.json';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';

export default function PhoneCodeModal() {
  const [search, setSearch] = useState('');

  const filteredCountries = useMemo(
    () => countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const safeAreaInsets = useSafeAreaInsets();

  const keyboardHeight = useKeyboardHeight();

  return (
    <>
      <Stack.Screen options={{ title: 'Select your country code', headerTransparent: false }} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <TextInput
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        returnKeyType="search"
        containerStyle={{ marginHorizontal: 14, marginBottom: 8 }}
        startIcon="Search_Magnifying_Glass"
      />

      <FlashList
        data={filteredCountries}
        keyExtractor={(item) => item['dial-code'] + item.flag}
        renderItem={({ item }) => (
          <Link
            asChild
            href={{
              pathname: '/auth/phone',
              params: { flag: item.flag, dialCode: item['dial-code'] },
            }}
          >
            <ListItem text={`${item.flag} ${item['dial-code']} ${item.name}`} hSpace />
          </Link>
        )}
        estimatedItemSize={40}
        contentContainerStyle={{
          paddingBottom: keyboardHeight !== 0 ? keyboardHeight : safeAreaInsets.bottom,
        }}
      />
    </>
  );
}
