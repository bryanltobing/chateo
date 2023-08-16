import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import { Platform, Pressable, View, ViewStyle } from 'react-native';

import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';
import { Icons } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { TextInput } from '@/components/ui/TextInput';
import { colors } from '@/theme/colors';

const data = [
  {
    name: 'Bryan Lumbantobing',
    content: 'Last Seen Yesterday',
    imageUri:
      'https://media.licdn.com/dms/image/C5103AQGRsLDbhR2r9Q/profile-displayphoto-shrink_200_200/0/1581238572385?e=1697673600&v=beta&t=1b03WWNmIDSSZWwNrMfFjSeydyEhXozkSG99y61TDjc',
  },
  {
    name: 'Athalia Putri',
    content: 'Last Seen Yesterday',
  },
  {
    name: 'Erlan Sadewa',
    content: 'Online',
  },
  {
    name: 'Midala Huera',
    content: 'Last seen 3 hours ago',
    storyUrl: 'https://google.com',
  },
  {
    name: 'Nafisa Gitari',
    content: 'Online',
  },
];

const ContactsTabPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: ({ tintColor }) => (
            <Icons name="Add_Plus" color={tintColor} style={{ marginRight: 16 }} />
          ),
        }}
      />

      <FlashList
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ paddingTop: 16 }}
        ListHeaderComponent={<TextInput startIcon="Search_Magnifying_Glass" placeholder="Search" />}
        ListHeaderComponentStyle={{ paddingBottom: 16, paddingHorizontal: 16 }}
        data={data}
        estimatedItemSize={77}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <Pressable
            android_ripple={{ color: colors.palette.neutralWeak }}
            style={({ pressed }) => [
              pressableStyle,
              {
                opacity: Platform.OS !== 'android' ? (pressed ? 0.5 : 1) : 1,
              },
            ]}
          >
            <Avatar
              state={item.storyUrl ? 'story' : item.content === 'Online' ? 'online' : 'none'}
              type={!item.imageUri ? 'noPhoto' : 'photo'}
              name={item.name}
              imageUri={item.imageUri}
            />
            <View style={{ gap: 2 }}>
              <Text variant="body1">{item.name}</Text>
              <Text variant="metadata1" style={{ color: colors.palette.neutralDisabled }}>
                {item.content}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </>
  );
};

const pressableStyle: ViewStyle = {
  flexDirection: 'row',
  gap: 12,
  paddingHorizontal: 16,
  paddingTop: 12,
  paddingBottom: 16,
};

export default ContactsTabPage;
