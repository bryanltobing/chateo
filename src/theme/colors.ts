const palette = {
  brandColorDark: '#001A83',
  brandColorDefault: '#002DE3',
  brandColorDarkMode: '#375FFF',
  brandColorLight: '#879FFF',
  brandColorBackground: '#D2D5F9',

  neutralActive: '#0F1828',
  neutralDark: '#152033',
  neutralBody: '#1B2B48',
  neutralWeak: '#A4A4A4',
  neutralDisabled: '#ADB5BD',
  neutralLine: '#EDEDED',
  neutralOffWhite: '#F7F7FC',
  neutralWhite: '#FFF',

  accentDanger: '#E94242',
  accentWarning: '#FDCF41',
  accentSuccess: '#2CC069',
  accentSafe: '#7BCBCF',
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  // TODO: put hex color on palette
};
