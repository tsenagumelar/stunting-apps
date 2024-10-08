import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { kurang, normal, sangatKurang } from "@/src/constants/colors";
import { laki, perempuan } from "@/src/hooks/useDataStunting";

interface IHasil {
  nama: string;
  umur: number;
  kelamin: string;
  beratBadan: string;
  tinggiBadan: string;
  labelBeratByUmur: any;
  labelTinggiByUmur: any;
  labelBeratByTinggi: any;
  labelRekBadanByUmur: string;
  labelRekTinggiByUmur: string;
  labelRekBadanByTinggi: string;
  setRender: React.Dispatch<React.SetStateAction<string>>;
  status: string;
}

const Hasil: React.FC<IHasil> = ({
  setRender,
  beratBadan,
  tinggiBadan,
  kelamin,
  nama,
  umur,
  labelBeratByUmur,
  labelTinggiByUmur,
  labelBeratByTinggi,
  labelRekBadanByUmur,
  labelRekTinggiByUmur,
  labelRekBadanByTinggi,
  status,
}) => {
  const colorStat =
    status === "Normal" ? normal : status === "Kurang" ? kurang : sangatKurang;
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingHorizontal: 10,
      }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              Hasil Analisis
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
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
                    uri: kelamin === "laki-laki" ? laki : perempuan,
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
                    {nama}
                  </Text>
                  <Text>
                    {kelamin === "laki-laki" ? "Laki-laki" : "Perempuan"}{" "}
                    {`- (${umur}) bulan`}
                  </Text>
                  <Text>
                    {beratBadan} kg / {tinggiBadan} cm
                  </Text>
                </View>
                <View>
                  <LinearGradient
                    end={[1, 0.5]}
                    start={[0, 1]}
                    colors={colorStat}
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
                </View>
              </View>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={[labelBeratByUmur.color, labelBeratByUmur.color]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 15,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    BERAT BADAN MENURUT UMUR :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    {labelBeratByUmur.label}
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={[labelTinggiByUmur.color, labelTinggiByUmur.color]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 10,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    TINGGI BADAN MENURUT UMUR :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    {labelTinggiByUmur.label}
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={[labelBeratByTinggi.color, labelBeratByTinggi.color]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 15,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    BERAT BADAN MENURUT TINGGI BADAN :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    {labelBeratByTinggi.label}
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#e6e6e6", "#cccccc"]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 15,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    REKOMENDASI BERAT BADAN MENURUT UMUR :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    Menurut umur, rekomendasi berat badan anak anda adalah{" "}
                    {labelRekBadanByUmur} kg.
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#e6e6e6", "#cccccc"]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 15,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    REKOMENDASI TINGGI BADAN MENURUT UMUR :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    Menurut umur, rekomendasi tinggi badan anak anda adalah{" "}
                    {labelRekTinggiByUmur} cm.
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#e6e6e6", "#cccccc"]}
                style={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: 20,
                  padding: 15,
                  flexDirection: "column",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    REKOMENDASI BERAT BADAN MENURUT TINGGI BADAN :
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    Menurut tinggi badan, rekomendasi berat badan anak anda
                    adalah {labelRekBadanByTinggi} kg.
                  </Text>
                </View>
              </LinearGradient>
            </View>
            <TouchableOpacity onPress={() => setRender("tambah")}>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#21D4FD", "#55ACEE"]}
                style={{
                  width: "100%",
                  height: 50,
                  display: "flex",
                  borderRadius: 50,
                  marginTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Hitung Ulang
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRender("data")}>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#21D4FD", "#55ACEE"]}
                style={{
                  width: "100%",
                  height: 50,
                  display: "flex",
                  borderRadius: 50,
                  marginTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Kembali
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Hasil;
