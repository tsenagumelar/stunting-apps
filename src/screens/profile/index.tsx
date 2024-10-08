import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Poster from "@/src/assets/document";

const UserProfile = () => {
  const handleEditProfile = () => {
    console.log("Edit Profile Clicked");
  };

  const handleLogout = () => {
    console.log("Logout Clicked");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.headerBackground}
        end={[1, 0.5]}
        start={[0, 1]}
        colors={["#21D4FD", "#55ACEE"]}
      >
        <Image source={Poster["profile"]} style={styles.profileImage} />
        <Text style={styles.userName}>Reni Eka Lestari, S.ST., Bd., M.M</Text>
        <Text style={styles.userJob}>Midwife</Text>
      </LinearGradient>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.infoItem}>
            <FontAwesome name="instagram" size={24} color="#E1306C" />
            <Text style={styles.infoText}>@reniekalestari</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.infoItem}>
            <MaterialIcons name="email" size={24} color="#D44638" />
            <Text style={styles.infoText}>ren.eka1902@gmail.com</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.infoItem}>
            <FontAwesome name="phone" size={24} color="#34B7F1" />
            <Text style={styles.infoText}>+62 856-5906-4002</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.infoItem}>
            <FontAwesome name="map-marker" size={24} color="#FF5733" />
            <Text style={styles.infoText}>
              Sukabumi - Jawa Barat, Indonesia
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Image
          source={Poster["rs"]}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: "#fff",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          RSUD R. Syamsudin, S.H.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerBackground: {
    paddingBottom: 40,
    paddingTop: 50,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  userJob: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 20,
  },
  cardContainer: {
    padding: 20,
    marginTop: -30, // To overlap slightly with header
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
  },
  actionContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default UserProfile;
