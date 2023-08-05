import { createIconSet } from '@expo/vector-icons';

const assets = require('../../../assets/icons/coolicons.ttf');

const glyphMap = {
  Chevron_Down: 59772,
  Chevron_Left: 59775,
};

const CoolIcons = createIconSet(glyphMap, 'coolicons', assets);

type IconsProps = object & React.ComponentProps<typeof CoolIcons>;

export const Icons = (props: IconsProps) => {
  return <CoolIcons {...props} />;
};
