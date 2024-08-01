import { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import useHooks from "./hooks";
import ICONS from "@/src/constants/icons";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  carouseBox: {
    width: "100%",
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuBox: {
    width: "100%",
    height: "15%",
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const Beranda = () => {
  const { datas } = useHooks();
  const ref = useRef<ICarouselInstance>(null);

  const CarouselBox = () => {
    return (
      <View style={styles.carouseBox}>
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

  const MenuBox = () => {
    return (
      <View style={styles.menuBox}>
        <LinearGradient
          end={[1, 0.5]}
          start={[0, 1]}
          colors={["#21D4FD", "#55ACEE"]}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <Image
            tintColor={"#FFF"}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={ICONS.documentation}
          />
        </LinearGradient>
        <LinearGradient
          end={[1, 0.5]}
          start={[0, 1]}
          colors={["#66ff66", "#009900"]}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <Image
            tintColor={"#FFF"}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={ICONS.more}
          />
        </LinearGradient>
        <LinearGradient
          end={[1, 0.5]}
          start={[0, 0.5]}
          colors={["#ffb380", "#ff6600"]}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <Image
            tintColor={"#FFF"}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={ICONS.document}
          />
        </LinearGradient>
        <LinearGradient
          end={[1, 0.5]}
          start={[0, 0.5]}
          colors={["#bfbfbf", "#666666"]}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <Image
            tintColor={"#FFF"}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={ICONS.warning}
          />
        </LinearGradient>

        <LinearGradient
          end={[1, 0.5]}
          start={[0, 0.5]}
          colors={["#df80ff", "#8600b3"]}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <Image
            tintColor={"#FFF"}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={ICONS.users}
          />
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CarouselBox />
      <MenuBox />
    </View>
  );
};

export default Beranda;
