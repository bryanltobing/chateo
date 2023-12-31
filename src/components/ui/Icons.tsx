import { createIconSet } from '@expo/vector-icons';

import { colors } from '@/theme/colors';

const assets = require('../../../assets/icons/coolicons.ttf');

/**
 * References
 * https://github.com/krystonschwarze/coolicons/issues/7#issuecomment-1645491673
 */
const glyphMap = {
  Chevron_Down: 59772,
  Chevron_Left: 59775,
  Chevron_Right: 59778,
  User_01: 60053,
  Chat_Circle: 59757,
  Mail: 59926,
  Phone: 59969,
  Search_Magnifying_Glass: 59986,
  Add_Plus: 59652,
  Arrow_Left_LG: 59676,
  Users: 60065,
  More_Horizontal: 59945,
  Sun: 60021,
  Bell_Notification: 59712,
  Shield_Warning: 59993,
  Folder: 59865,
  Circle_Help: 59783,
  Chat_Add: 59750,
  List_Check: 59914,
};

const CoolIcons = createIconSet(glyphMap, 'coolicons', assets);

export type IconsProps = object & React.ComponentProps<typeof CoolIcons>;

export const Icons = ({
  color = colors.palette.neutralActive,
  size = 24,
  ...props
}: IconsProps) => {
  return <CoolIcons color={color} size={size} {...props} />;
};
