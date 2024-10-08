import React from "react";
import { Icon } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";
import { kurang, normal, sangatKurang } from "@/src/constants/colors";
import { IAnak, IStunting, laki, perempuan } from "@/src/hooks/useDataStunting";

interface IList {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  dataGizi: IAnak[];
  setRender: React.Dispatch<React.SetStateAction<string>>;
  deleteStunting: (id: number) => void;
  setDetail: (nik: string, id: number) => void;
}

const List: React.FC<IList> = ({
  selected,
  setSelected,
  dataGizi,
  setRender,
  deleteStunting,
  setDetail,
}: IList) => {
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
            onPress={() => setRender("tambah")}
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
          {dataGizi.length > 0 &&
            dataGizi.map((data: IAnak, index: number) => (
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
                      uri:
                        data.jenis_kelamin === "laki-laki" ? laki : perempuan,
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
                        fontSize: 16,
                      }}
                    >
                      {`${data.nama} - (${data.nik})`}
                    </Text>
                    <Text>
                      {data.jenis_kelamin === "laki-laki"
                        ? "Laki - Laki"
                        : "Perempuan"}{" "}
                      {`- (${moment().diff(
                        moment(data.tanggal_lahir, "DD-MM-YYYY"),
                        "months"
                      )}) bulan`}
                    </Text>
                    <Text>
                      {data.stunting && data.stunting.length > 0
                        ? `${data.stunting[0].berat} kg / ${data.stunting[0].tinggi} cm`
                        : `-`}
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
                        data.stunting && data.stunting.length > 0
                          ? data.stunting[0].status === "Normal"
                            ? normal
                            : data.stunting[0].status === "Kurang"
                            ? kurang
                            : sangatKurang
                          : normal
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
                        {data.stunting &&
                          data.stunting.length > 0 &&
                          data.stunting.map((g: IStunting, i: number) => (
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
                              <Text>
                                {moment(g.created_at).format("DD-MM-YYYY")}
                              </Text>
                              <Text>
                                {g.berat} kg / {g.tinggi} cm
                              </Text>
                              <View
                                style={{
                                  width: 75,
                                  display: "flex",
                                  flexDirection: "row",
                                  columnGap: 10,
                                }}
                              >
                                <TouchableOpacity
                                  onPress={() =>
                                    setDetail(data.nik, g.id ? g.id : 0)
                                  }
                                >
                                  <Icon
                                    size={22.5}
                                    source={"eye-circle"}
                                    color="#3399ff"
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() =>
                                    deleteStunting(g.id ? g.id : 0)
                                  }
                                >
                                  <Icon
                                    size={22.5}
                                    color="#ff704d"
                                    source={"trash-can"}
                                  />
                                </TouchableOpacity>
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

export default List;
