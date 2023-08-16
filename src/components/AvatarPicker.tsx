import { Image, View } from 'react-native';

import { Icons } from './ui/Icons';

import { colors } from '@/theme/colors';

type AvatarPickerProps = {
  imageUri?: string;
};

export const AvatarPicker = ({ imageUri }: AvatarPickerProps) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.palette.neutralOffWhite,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {imageUri ? <Image source={{ uri: imageUri }} /> : <Icons name="User_01" size={56} />}
      {/* Workaround for add plus circle filled icon */}
      <View
        style={{ borderRadius: 12, overflow: 'hidden', position: 'absolute', right: 0, bottom: 0 }}
      >
        <Icons
          name="Add_Plus"
          style={{
            color: 'white',
            backgroundColor: colors.palette.neutralActive,
          }}
        />
      </View>
    </View>
  );
};
