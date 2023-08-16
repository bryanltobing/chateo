import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import { Platform, Pressable, View, ViewStyle } from 'react-native';

import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';
import { Icons } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { TextInput } from '@/components/ui/TextInput';
import { colors } from '@/theme/colors';

const data = [...new Array(10)];

const chats = [
  {
    name: 'Bryan Lumbantobing',
    content: 'Good morning, did you sleep well?',
    imageUri:
      'https://media.licdn.com/dms/image/C5103AQGRsLDbhR2r9Q/profile-displayphoto-shrink_200_200/0/1581238572385?e=1697673600&v=beta&t=1b03WWNmIDSSZWwNrMfFjSeydyEhXozkSG99y61TDjc',
  },
  {
    name: 'Athalia Putri',
    content: 'How is it going?',
  },
  {
    name: 'Erlan Sadewa',
    content: 'Aight, noted',
  },
  {
    name: 'Midala Huera',
    content: 'Nice catch!',
    storyUrl: 'https://google.com',
  },
];

const ChatsTabPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: ({ tintColor }) => (
            <View style={{ flexDirection: 'row', gap: 8, marginRight: 16 }}>
              <Icons name="Chat_Add" color={tintColor} />
              <Icons name="List_Check" color={tintColor} />
            </View>
          ),
        }}
      />

      <View style={{ paddingVertical: 16 }}>
        <FlashList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index }) => (
            <Avatar
              state={index === 0 ? 'noStory' : 'story'}
              type={index === 0 ? undefined : 'noPhoto'}
              name={index === 0 ? undefined : 'story'}
              style={{ marginLeft: 16, marginRight: index !== data.length - 1 ? 0 : 16 }}
            />
          )}
          estimatedItemSize={64}
        />
      </View>

      <FlashList
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ paddingTop: 16 }}
        ListHeaderComponent={<TextInput startIcon="Search_Magnifying_Glass" placeholder="Search" />}
        ListHeaderComponentStyle={{ paddingBottom: 16, paddingHorizontal: 16 }}
        data={chats}
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
            <View style={{ gap: 2, flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text variant="body1" style={{ flex: 1 }}>
                  {item.name}
                </Text>
                <Text variant="metadata2" style={{ color: colors.palette.neutralWeak }}>
                  Today
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  variant="metadata1"
                  style={{ color: colors.palette.neutralDisabled, flex: 1 }}
                >
                  {item.content}
                </Text>
                <View
                  style={{
                    backgroundColor: colors.palette.brandColorBackground,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 40,
                  }}
                >
                  <Text variant="metadata3" style={{ color: colors.palette.brandColorDark }}>
                    1
                  </Text>
                </View>
              </View>
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

export default ChatsTabPage;
