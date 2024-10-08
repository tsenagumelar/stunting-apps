import React from "react";
import { Tabs } from "expo-router";
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

import ICONS from "@/src/constants/icons";
import Colors from "@/src/constants/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  const ImageIcon = (
    icon: ImageSourcePropType,
    color: ColorValue,
    focused: boolean
  ) => {
    return focused ? (
      <LinearGradient
        end={[1, 0.5]}
        start={[0, 1]}
        colors={["#21D4FD", "#55ACEE"]}
        style={{
          width: 40,
          height: 40,
          marginTop: 12.5,
          display: "flex",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Image
          source={icon}
          tintColor={"white"}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </LinearGradient>
    ) : (
      <Image
        source={icon}
        tintColor={color}
        style={{
          width: 20,
          height: 20,
          marginTop: 12.5,
        }}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: true,
        tabBarStyle: {
          height: 60,
          borderRadius: 50,
        },
        header: ({ route }) =>
          route.name === "index" && (
            <View
              style={{
                height: 50,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 15,
                }}
              >
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: Colors.light.tint,
                  }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
                  }}
                />
              </View>
              <View
                style={{
                  height: 40,
                  width: "auto",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Halo,</Text>
                <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                  Bagaimana kabarmu hari ini?
                </Text>
              </View>
            </View>
          ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.home,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
      <Tabs.Screen
        name="gizi"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.documentation,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
      <Tabs.Screen
        name="menu-makan"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.more,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
      <Tabs.Screen
        name="edukasi"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.document,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.warning,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            ImageIcon(
              ICONS.users,
              focused ? Colors.light.tint : Colors.light.text,
              focused
            ),
        }}
      />
    </Tabs>
  );
}
