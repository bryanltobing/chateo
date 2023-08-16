import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icons } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export default function TabLayout() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="chats"
      screenOptions={{
        headerTitleAlign: 'left',
        headerTintColor: colors.palette.neutralActive,
        headerTitleStyle: {
          fontFamily: typography.primary.semiBold,
          fontSize: 18,
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // TODO: Remove and find a way to add box-shadow to web
          borderTopWidth: Platform.OS === 'web' ? 1 : 0,
          shadowColor: colors.palette.neutralActive,
          shadowOpacity: 0.04,
          ...(safeAreaInsets.bottom !== 0
            ? { height: safeAreaInsets.bottom + 56 }
            : { height: 56 }),
        },
      }}
    >
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused, ...props }) =>
            !focused ? <Icons name="Users" {...props} /> : <TabBarActive label="Contacts" />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused, ...props }) =>
            !focused ? <Icons name="Chat_Circle" {...props} /> : <TabBarActive label="Chats" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'More',
          tabBarIcon: ({ focused, ...props }) =>
            !focused ? <Icons name="More_Horizontal" {...props} /> : <TabBarActive label="More" />,
        }}
      />
    </Tabs>
  );
}

const TabBarActive = ({ label }: { label: string }) => {
  return (
    <View style={{ gap: 4, alignItems: 'center' }}>
      <Text variant="body1">{label}</Text>
      <View
        style={{
          width: 4,
          height: 4,
          backgroundColor: colors.palette.neutralActive,
          borderRadius: 2,
        }}
      />
    </View>
  );
};
