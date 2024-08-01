import { ImageSourcePropType } from "react-native";

export interface ThemeAssets {
  logo: ImageSourcePropType;
  header: ImageSourcePropType;
  background: ImageSourcePropType;

  card1: ImageSourcePropType;
  card2: ImageSourcePropType;
  card3: ImageSourcePropType;
  card4: ImageSourcePropType;
  card5: ImageSourcePropType;

  photo1: ImageSourcePropType;
  photo2: ImageSourcePropType;
  photo3: ImageSourcePropType;
  photo4: ImageSourcePropType;
  photo5: ImageSourcePropType;
  photo6: ImageSourcePropType;
  carousel1: ImageSourcePropType;

  avatar1: ImageSourcePropType;
  avatar2: ImageSourcePropType;

  x5: ImageSourcePropType;
  gle: ImageSourcePropType;
  tesla: ImageSourcePropType;

  ios: ImageSourcePropType;
  android: ImageSourcePropType;
}

const Images: ThemeAssets = {
  logo: require("../assets/images/logo.png"),
  header: require("../assets/images/header.png"),
  background: require("../assets/images/background.png"),

  card1: require("../assets/images/card1.png"),
  card2: require("../assets/images/card2.png"),
  card3: require("../assets/images/card3.png"),
  card4: require("../assets/images/card4.png"),
  card5: require("../assets/images/card5.png"),

  photo1: require("../assets/images/photo1.png"),
  photo2: require("../assets/images/photo2.png"),
  photo3: require("../assets/images/photo3.png"),
  photo4: require("../assets/images/photo4.png"),
  photo5: require("../assets/images/photo5.png"),
  photo6: require("../assets/images/photo6.png"),
  carousel1: require("../assets/images/carousel1.png"),

  avatar1: require("../assets/images/avatar1.png"),
  avatar2: require("../assets/images/avatar2.png"),

  x5: require("../assets/images/x5.png"),
  gle: require("../assets/images/gle.png"),
  tesla: require("../assets/images/tesla.png"),

  ios: require("../assets/images/ios.png"),
  android: require("../assets/images/android.png"),
};

export default Images;
