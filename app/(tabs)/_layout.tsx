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
import { useColorScheme } from "@/src/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const ImageIcon = (icon: ImageSourcePropType, color: ColorValue) => {
    return (
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
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarStyle: {
          height: 50,
          borderRadius: 50,
        },
        header: () => (
          <View
            style={{
              height: 50,
              width: "100%",
              display: "flex",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {""}
            </Text>
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
              focused ? Colors.light.tint : Colors.light.text
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
              focused ? Colors.light.tint : Colors.light.text
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
              focused ? Colors.light.tint : Colors.light.text
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
              focused ? Colors.light.tint : Colors.light.text
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
              focused ? Colors.light.tint : Colors.light.text
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
              focused ? Colors.light.tint : Colors.light.text
            ),
        }}
      />
    </Tabs>
  );
}
