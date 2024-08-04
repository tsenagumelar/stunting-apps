import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

import useHooks from "./hooks";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Add from "./add";
import Hasil from "./hasil";

const Gizi = () => {
  const { datas } = useHooks();
  const perempuan =
    "https://png.pngtree.com/png-clipart/20220726/original/pngtree-cartoon-cute-girl-child-vector-illustration-png-image_8395700.png";
  const laki =
    "https://img.lovepik.com/original_origin_pic/18/08/16/1bbd68dcde8396fcf252c8dfe2e79c38.png_wh860.png";

  const normal = ["#adebad", "#33cc33"];
  const kurang = ["#ffff99", "#cccc00"];
  const sangatKurang = ["#ffad99", "#ff3300"];

  const [selected, setSelected] = useState(-1);
  const [render, setRender] = useState("tambah");

  const DataGizi = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            DATA GIZI
          </Text>
          <LinearGradient
            end={[1, 0.5]}
            start={[0, 1]}
            colors={["#21D4FD", "#55ACEE"]}
            style={{
              width: 55,
              height: 55,
              marginTop: 10,
              display: "flex",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "red",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 50,
                borderColor: "white",
                borderWidth: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              rowGap: 10,
            }}
          >
            {datas.dataGizi.map((data, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    padding: 10,
                    height: 100,
                    width: "100%",
                    display: "flex",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderWidth: 0.35,
                    borderColor: "gray",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    elevation: 5,
                  }}
                >
                  <Image
                    source={{
                      uri: data.jenisKelamin === "Laki-laki" ? laki : perempuan,
                    }}
                    style={{
                      width: 75,
                      height: 75,
                      borderRadius: 50,
                      marginRight: 20,
                    }}
                  />
                  <View
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 5,
                      width: "52.5%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      {data.nama}
                    </Text>
                    <Text>
                      {data.jenisKelamin} {`- (${10 + index}) bulan`}
                    </Text>
                    <Text>
                      {data.gizi[data.gizi.length - 1].beratBadan} kg /{" "}
                      {data.gizi[data.gizi.length - 1].tinggiBadan} cm
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      selected === index ? setSelected(-1) : setSelected(index);
                    }}
                  >
                    <LinearGradient
                      end={[1, 0.5]}
                      start={[0, 1]}
                      colors={
                        data.status === "Normal"
                          ? normal
                          : data.status === "Kurang"
                          ? kurang
                          : sangatKurang
                      }
                      style={{
                        width: 60,
                        height: 60,
                        display: "flex",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "red",
                        justifyContent: "center",
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {index === selected && (
                  <View
                    style={{
                      padding: 15,
                      width: "100%",
                      marginTop: -50,
                      paddingTop: 70,
                      zIndex: -1,
                      display: "flex",
                      borderWidth: 0.45,
                      borderColor: "gray",
                      backgroundColor: "white",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          marginBottom: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Detail Pemeriksaan
                      </Text>
                      <View
                        style={{
                          rowGap: 10,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {data.gizi.map((g, i) => (
                          <View
                            key={i}
                            style={{
                              display: "flex",
                              paddingBottom: 10,
                              flexDirection: "row",
                              borderBottomWidth: 0.35,
                              borderBottomColor: "gray",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text>{g.tanggalPeriksa}</Text>
                            <Text>
                              {g.beratBadan} kg / {g.tinggiBadan} cm
                            </Text>
                            <View
                              style={{
                                width: 75,
                                display: "flex",
                                flexDirection: "row",
                                columnGap: 10,
                              }}
                            >
                              <Icon
                                size={22.5}
                                source={"eye-circle"}
                                color="#3399ff"
                              />
                              <Icon
                                size={22.5}
                                color="#ff704d"
                                source={"trash-can"}
                              />
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return render === "data" ? (
    <DataGizi />
  ) : render === "tambah" ? (
    <Add />
  ) : (
    <Hasil />
  );
};

export default Gizi;
