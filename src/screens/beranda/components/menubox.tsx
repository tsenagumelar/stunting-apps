import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import ICONS from "@/src/constants/icons";
import styles from "../styles";
import React from "react";
import { useNavigation } from "expo-router";

const MenuBox = () => {
  const navigation = useNavigation();

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
        <TouchableOpacity
          onPress={() => navigation.navigate("gizi" as never)}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("menu-makan" as never)}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("edukasi" as never)}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("faq" as never)}
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
            FAQ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuBox;
