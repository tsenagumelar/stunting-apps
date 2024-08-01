import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import Colors from "@/src/constants/colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { ColorValue, Image, ImageSourcePropType } from "react-native";

import ICONS from "@/src/constants/icons";

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
        }}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
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
    </Tabs>
  );
}
