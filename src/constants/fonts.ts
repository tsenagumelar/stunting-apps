export interface ThemeAssets {
  OpenSansLight?: any;
  OpenSansRegular?: any;
  OpenSansSemiBold?: any;
  OpenSansExtraBold?: any;
  OpenSansBold?: any;
  SpaceMono?: any;
}

const Fonts: ThemeAssets = {
  OpenSansLight: require("../assets/fonts/OpenSans-Light.ttf"),
  OpenSansRegular: require("../assets/fonts/OpenSans-Regular.ttf"),
  OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  OpenSansExtraBold: require("../assets/fonts/OpenSans-ExtraBold.ttf"),
  OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
};

export default Fonts;
