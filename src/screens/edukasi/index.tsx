import { WebView } from "react-native-webview";
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

const Edukasi = () => {
  const data = [
    {
      id: 1,
      title: "Booklet Stunting",
      image: "bookletImage",
      pdf: "https://drive.google.com/file/d/1RWoR37VJ5DIpfG9dsTuxNPAelY39YsrK/view?usp=sharing",
    },
    {
      id: 2,
      title: "Buku Saku Stunting Desa",
      image: "bukuSaku",
      pdf: "https://drive.google.com/file/d/1A8kRY6kTRdodDDP688nHI_4oo8gJno0k/view?usp=sharing",
    },
  ];

  const [selected, setSelected] = React.useState(0);

  const renderData = () => {
    return (
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
                onPress={() => setSelected(item.id)}
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
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };

  const renderDetail = () => {
    const item = data.filter((item) => item.id === selected)[0];

    return (
      <>
        <View
          style={{
            height: Dimensions.get("screen").height * 0.75,
            width: Dimensions.get("screen").width * 0.95,
          }}
        >
          <WebView
            source={{
              uri: item.pdf,
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={{
              height: "80%",
              width: "100%",
            }}
          />
        </View>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <LinearGradient
            end={[1, 0.5]}
            start={[0, 1]}
            colors={["#21D4FD", "#55ACEE"]}
            style={{
              width: "90%",
              height: 40,
              marginTop: 20,
              display: "flex",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "red",
              justifyContent: "center",
              alignSelf: "center",
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
      </>
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

export default Edukasi;
