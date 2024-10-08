import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

import Poster from "@/src/assets/document";

const Edukasi = () => {
  const data = [
    {
      id: 1,
      title: "Booklet Stunting",
      image: "bookletImage",
    },
    {
      id: 2,
      title: "Buku Saku Stunting Desa",
      image: "bukuSaku",
    },
  ];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
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
              <View
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
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Edukasi;
