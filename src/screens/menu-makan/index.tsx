import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Poster from "@/src/assets/document";

const MenuMakan = () => {
  const data = [
    {
      id: 1,
      title: "Menu 1 6-11 Bulan",
      image: "menu1_611",
    },
    {
      id: 2,
      title: "Menu 1 12-23 Bulan",
      image: "menu1_1223",
    },
    {
      id: 3,
      title: "Menu 2 12-23 Bulan",
      image: "menu2_1223",
    },
    {
      id: 4,
      title: "Menu 1 24-59 Bulan",
      image: "menu1_2459",
    },
  ];

  const [selected, setSelected] = React.useState(0);

  const renderData = () => (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: Dimensions.get("screen").width * 0.29,
                height: Dimensions.get("screen").width * 0.5,
                display: "flex",
                alignItems: "center",
                margin: 5,
                marginBottom: 20,
                borderWidth: 1,
                borderColor: "#55ACEE",
                backgroundColor: "#55ACEE",
              }}
              onPress={() => setSelected(item.id)}
            >
              <Image
                style={{
                  width: Dimensions.get("screen").width * 0.285,
                  height: Dimensions.get("screen").width * 0.4,
                  resizeMode: "cover",
                }}
                source={Poster[item.image as keyof typeof Poster]}
              />
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#004080", "#55ACEE"]}
                style={{
                  width: "100%",
                  height: Dimensions.get("screen").width * 0.1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "red",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {item.title}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );

  const renderDetail = () => {
    const item = data[selected];
    return (
      <View>
        <Image
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").width * 0.5,
            resizeMode: "stretch",
          }}
          source={Poster[item.image as keyof typeof Poster]}
        />
        <TouchableOpacity onPress={() => setSelected(0)}>
          <LinearGradient
            end={[1, 0.5]}
            start={[0, 1]}
            colors={["#21D4FD", "#55ACEE"]}
            style={{
              width: "100%",
              height: 40,
              marginTop: 20,
              display: "flex",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "red",
              justifyContent: "center",
              alignSelf: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Kembali
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {selected === 0 ? renderData() : renderDetail()}
    </View>
  );
};

export default MenuMakan;
