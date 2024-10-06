import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";

interface IHasil {
  date: Date;
  show: boolean;
  value: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setRender: React.Dispatch<React.SetStateAction<string>>;
}

const Hasil: React.FC<IHasil> = ({
  date,
  show,
  value,
  setShow,
  setValue,
  setRender,
}) => {
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
                    uri: "https://png.pngtree.com/png-clipart/20220726/original/pngtree-cartoon-cute-girl-child-vector-illustration-png-image_8395700.png",
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
                    {"Rina"}
                  </Text>
                  <Text>
                    {"Laki - laki"} {`- (${10}) bulan`}
                  </Text>
                  <Text>
                    {10} kg / {120} cm
                  </Text>
                </View>
                <View>
                  <LinearGradient
                    end={[1, 0.5]}
                    start={[0, 1]}
                    colors={["#ffff99", "#cccc00"]}
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
                colors={["#ffff99", "#cccc00"]}
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
                    Status gizi anak, berat badan kurang. Anak anda memerlukan
                    asupan gizi yang seimbang.
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#ffad99", "#ff3300"]}
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
                    Status gizi anak, tinggi badan anak masuk dalam kategori
                    sangat pendek.
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                end={[1, 0.5]}
                start={[0, 1]}
                colors={["#adebad", "#33cc33"]}
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
                    Menurut tinggi badan, berat badan anak anda normal.
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
                    Menurut tinggi badan, berat badan anak anda normal.
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
                    Menurut tinggi badan, berat badan anak anda normal.
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
                    Menurut tinggi badan, berat badan anak anda normal.
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
