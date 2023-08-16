export const customFontsToLoad = {
  mulishRegular: require('../../assets/fonts/Mulish-Regular.ttf'),
  mulishSemiBold: require('../../assets/fonts/Mulish-SemiBold.ttf'),
  mulishBold: require('../../assets/fonts/Mulish-Bold.ttf'),
};

const fonts = {
  mulish: {
    regular: 'Mulish-Regular',
    semiBold: 'Mulish-SemiBold',
    bold: 'Mulish-Bold',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.mulish,
};
