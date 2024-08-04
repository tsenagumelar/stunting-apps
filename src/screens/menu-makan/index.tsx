import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

const MenuMakan = () => {
  const data = [
    {
      id: 1,
      title: "Nutrisi 1 Bulan",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 2,
      title: "Gizi 1 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 3,
      title: "Makanan Sehat 1 Bulan",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 4,
      title: "Makanan Bergizi 1 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 5,
      title: "Nutrisi 2 Bulan",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 6,
      title: "Gizi 2 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 7,
      title: "Makanan Sehat 2 Bulan",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 8,
      title: "Makanan Bergizi 2 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 1,
      title: "Nutrisi 3 Bulan",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 2,
      title: "Gizi 3 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 3,
      title: "Makanan Sehat 3 Bulan",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 4,
      title: "Makanan Bergizi 3 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 5,
      title: "Nutrisi 4 Bulan",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 6,
      title: "Gizi 4 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 7,
      title: "Makanan Sehat 4 Bulan",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 8,
      title: "Makanan Bergizi 4 Bulan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
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
              justifyContent: "center",
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
                  source={{
                    uri: item.image,
                  }}
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

export default MenuMakan;
