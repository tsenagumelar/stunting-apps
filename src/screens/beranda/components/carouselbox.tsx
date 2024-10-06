import { Dimensions, Image, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import styles from "../styles";
import { useRef } from "react";
import useHooks from "../hooks";
import React from "react";

const CarouselBox = () => {
  const { datas } = useHooks();
  const ref = useRef<ICarouselInstance>(null);
  return (
    <View style={styles.carouselBox}>
      <Carousel
        loop
        ref={ref}
        mode="parallax"
        autoPlay={true}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={3000}
        data={datas.carouselDummy}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 52.5,
        }}
        width={Dimensions.get("screen").width - 20}
        height={Dimensions.get("screen").height * 0.22}
        renderItem={({ item }) => (
          <View
            style={{
              height: "90%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderWidth: 0.25,
                resizeMode: "stretch",
              }}
              source={{
                uri: item.image,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CarouselBox;
