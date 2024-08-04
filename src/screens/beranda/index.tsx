import { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import useHooks from "./hooks";
import ICONS from "@/src/constants/icons";
import Colors from "@/src/constants/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
  },
  carouselBox: {
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
    justifyContent: "center",
  },
  articlesBox: {
    width: "100%",
    height: "59%",
    marginTop: 10,
    paddingVertical: 10,
  },
});

const Beranda = () => {
  const { datas } = useHooks();
  const ref = useRef<ICarouselInstance>(null);

  const CarouselBox = () => {
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

  const MenuBox = () => {
    return (
      <View style={styles.menuBox}>
        <View
          style={{
            height: 100,
            width: "99%",
            display: "flex",
            borderRadius: 15,
            marginTop: 10,
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#e6e6e6",
            backgroundColor: "#FFF",
            justifyContent: "space-around",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                width: 75,
                flexWrap: "wrap",
                color: "#000",
                marginTop: 5,
              }}
            >
              Kalkulator
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                width: 75,
                flexWrap: "wrap",
                color: "#000",
                marginTop: 5,
              }}
            >
              Nutrisi
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                width: 75,
                flexWrap: "wrap",
                color: "#000",
                marginTop: 5,
              }}
            >
              Edukasi
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                source={ICONS.warning}
              />
            </LinearGradient>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                width: 75,
                flexWrap: "wrap",
                color: "#000",
                marginTop: 5,
              }}
            >
              F&Q
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Articles = () => {
    return (
      <View style={styles.articlesBox}>
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 10,
            marginBottom: 10,
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Artikel
        </Text>
        <ScrollView>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {datas.carouselDummy.map((item, index) => (
              <View
                key={index}
                style={{
                  width: "44%",
                  height: 160,
                  margin: 10,
                  display: "flex",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderWidth: 1,
                  borderColor: "#e6e6e6",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: "55%",
                    resizeMode: "stretch",
                  }}
                />
                <View
                  style={{
                    padding: 7.5,
                    width: "100%",
                    height: "45%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontStyle: "italic",
                    }}
                  >
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: Colors.light.tint,
                      textDecorationLine: "underline",
                    }}
                  >
                    Lihat Detail
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CarouselBox />
      <MenuBox />
      <Articles />
    </View>
  );
};

export default Beranda;
