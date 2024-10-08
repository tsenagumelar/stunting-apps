import React from "react";
import { Dimensions, Image, View } from "react-native";
import Poster from "@/src/assets/document";

const FAQ = () => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height * 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={Poster["comingSoon"]}
        style={{
          width: "100%",
          height: "50%",
        }}
      />
    </View>
  );
};

export default FAQ;
