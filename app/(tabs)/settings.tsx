import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';

import { Icons } from '@/components/ui/Icons';
import { ListItem } from '@/components/ui/ListItem';
import { Text } from '@/components/ui/Text';
import { colors } from '@/theme/colors';

const SettingsTabPage = () => {
  return (
    <>
      <View style={{ paddingTop: 8, gap: 8 }}>
        {/* Data Container */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <Pressable
            style={{ padding: 13, backgroundColor: colors.palette.neutralLine, borderRadius: 25 }}
          >
            <Icons name="User_01" size={24} />
          </Pressable>

          <View style={{ flex: 1 }}>
            <Text>Almayra Zamzamy</Text>
            <Text variant="metadata1" style={{ color: colors.palette.neutralDisabled }}>
              +62 1309 - 1710 - 1920
            </Text>
          </View>

          <Icons name="Chevron_Right" size={24} />
        </View>

        {/* Data Container */}
        <View style={{ paddingVertical: 8, gap: 8 }}>
          <Link asChild href="/auth">
            <ListItem text="Account" icon="User_01" hSpace />
          </Link>
          <Link asChild href="/auth">
            <ListItem text="Chats" icon="Chat_Circle" hSpace />
          </Link>
        </View>

        {/* Data Container */}
        <View style={{ paddingVertical: 8, gap: 8 }}>
          <Link asChild href="/auth">
            <ListItem text="Appereance" icon="Sun" hSpace />
          </Link>
          <Link asChild href="/auth">
            <ListItem text="Notification" icon="Bell_Notification" hSpace />
          </Link>
          <Link asChild href="/auth">
            <ListItem text="Privacy" icon="Shield_Warning" hSpace />
          </Link>
          <Link asChild href="/auth">
            <ListItem text="Data Usage" icon="Folder" hSpace />
          </Link>
        </View>

        {/* Data Container */}
        <View style={{ paddingVertical: 8, gap: 8 }}>
          <Link asChild href="/auth">
            <ListItem text="Help" icon="Circle_Help" hSpace />
          </Link>
          <Link asChild href="/auth">
            <ListItem text="Invite your friends" icon="Mail" hSpace />
          </Link>
        </View>
      </View>
    </>
  );
};

export default SettingsTabPage;
