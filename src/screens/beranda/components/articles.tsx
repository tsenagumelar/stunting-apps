import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/src/constants/colors";

import styles from "../styles";
import useHooks from "../hooks";
import React from "react";

import Poster from "@/src/assets/document";
import { useNavigation } from "expo-router";

const Articles = () => {
  const { datas } = useHooks();
  const navigation = useNavigation();
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
          {datas.articleData.map((item, index) => (
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
                source={Poster[item.image as keyof typeof Poster]}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("edukasi" as never)}
                >
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
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Articles;
