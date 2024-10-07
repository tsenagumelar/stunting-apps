import moment from "moment";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "react-native-ui-datepicker";
import { TextInput, RadioButton } from "react-native-paper";
import {
  Modal,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useDataStunting from "@/src/hooks/useDataStunting";

interface IAdd {
  date: Date;
  show: boolean;
  value: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setRender: React.Dispatch<React.SetStateAction<string>>;
  nama: string;
  setNama: React.Dispatch<React.SetStateAction<string>>;
  umur: number;
  setUmur: React.Dispatch<React.SetStateAction<number>>;
  beratBadan: string;
  setBeratBadan: React.Dispatch<React.SetStateAction<string>>;
  tinggiBadan: string;
  setTinggiBadan: React.Dispatch<React.SetStateAction<string>>;
}

const Add: React.FC<IAdd> = ({
  date,
  show,
  value,
  setShow,
  setValue,
  setDate,
  setRender,
  nama,
  setNama,
  umur,
  setUmur,
  beratBadan,
  setBeratBadan,
  tinggiBadan,
  setTinggiBadan,
}) => {
  const {
    getRekBeratByTinggi,
    getRekTinggiByUmur,
    getRekBeratByTinggiNormal,
    getRekBeratByUmur,
    labelBeratByTinggi,
    labelTinggiByUmur,
    leblBeratByUmur,
  } = useDataStunting();

  const hitung = () => {
    const { kondisiTinggiByUmur, rekTinggiByUmur } = getRekTinggiByUmur(
      "laki-laki",
      umur.toString(),
      tinggiBadan
    );

    const { kondisiBeratByTinggi } = getRekBeratByTinggi(
      "laki-laki",
      tinggiBadan,
      beratBadan
    );

    const { kondisiBeratByUmur, rekBeratByUmur } = getRekBeratByUmur(
      "laki-laki",
      umur.toString(),
      beratBadan
    );

    const { rekBeratByTinggi } = getRekBeratByTinggiNormal(
      "laki-laki",
      umur.toString(),
      beratBadan
    );

    const labelBeratByUmur = leblBeratByUmur.filter(
      (dt) =>
        dt.value.filter((val) => val == kondisiBeratByUmur.toString()).length >
        0
    );

    const labelTinggiByUmurs = labelTinggiByUmur.filter(
      (dt) =>
        dt.value.filter((val) => val == kondisiTinggiByUmur.toString()).length >
        0
    );

    const labelBeratByTinggis = labelBeratByTinggi.filter(
      (dt) =>
        dt.value.filter((val) => val == kondisiBeratByTinggi.toString())
          .length > 0
    );

    console.log(
      "1 : ",
      kondisiBeratByUmur,
      " - ",
      labelBeratByUmur[0].label,
      " - ",
      rekBeratByUmur
    );
    console.log(
      "2 : ",
      kondisiTinggiByUmur,
      " - ",
      labelTinggiByUmurs[0].label,
      " - ",
      rekTinggiByUmur
    );
    console.log(
      "3 : ",
      kondisiBeratByTinggi,
      " - ",
      labelBeratByTinggis[0].label,
      " - ",
      rekBeratByTinggi
    );
  };

  return (
    <ScrollView
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: Dimensions.get("window").width * 0.9,
          height: Dimensions.get("window").height * 0.85,
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
            Tambah Data
          </Text>
          <TextInput
            label={"Nama"}
            mode="outlined"
            style={{ marginBottom: 10 }}
            outlineStyle={{ borderRadius: 50 }}
            value={nama}
            onChangeText={(e) => setNama(e)}
          />
          <TextInput
            readOnly
            value={moment(new Date(date)).format("DD-MM-YYYY")}
            mode="outlined"
            label={"Tanggal Lahir"}
            style={{ marginBottom: 10 }}
            right={
              <TextInput.Icon icon="calendar" onPress={() => setShow(!show)} />
            }
            outlineStyle={{ borderRadius: 50 }}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
              setShow(!show);
            }}
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                display: "flex",
                position: "absolute",
                zIndex: 10,
                paddingTop: 50,
                backgroundColor: "white",
              }}
            >
              <DateTimePicker
                date={date}
                mode="single"
                onChange={(nextDate: any) => {
                  setDate(nextDate.date);
                  setShow(!show);
                  setUmur(moment(new Date()).diff(new Date(date), "months"));
                }}
              />
            </View>
          </Modal>
          <TextInput
            label={"Umur (0-60 bulan)"}
            mode="outlined"
            style={{ marginBottom: 10 }}
            readOnly
            value={umur.toString()}
            outlineStyle={{ borderRadius: 50 }}
          />
          <TextInput
            label={"Berat Badan (kg)"}
            mode="outlined"
            style={{ marginBottom: 10 }}
            outlineStyle={{ borderRadius: 50 }}
            value={beratBadan}
            onChangeText={(e) => setBeratBadan(e)}
            keyboardType="numeric"
          />
          <TextInput
            label={"Tinggi Badan (45-110 cm)"}
            mode="outlined"
            style={{ marginBottom: 10 }}
            outlineStyle={{ borderRadius: 50 }}
            keyboardType="numeric"
            value={tinggiBadan}
            onChangeText={(e) => setTinggiBadan(e)}
          />
          <View
            style={{
              columnGap: 20,
              display: "flex",
              marginBottom: 10,
              flexDirection: "row",
            }}
          >
            <View>
              <RadioButton
                value="laki-laki"
                status={value === "laki-laki" ? "checked" : "unchecked"}
                onPress={() => setValue("laki-laki")}
              />
              <Text>Laki-laki</Text>
            </View>
            <View>
              <RadioButton
                value="perempuan"
                status={value === "perempuan" ? "checked" : "unchecked"}
                onPress={() => setValue("perempuan")}
              />
              <Text>Perempuan</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => hitung()}>
            <LinearGradient
              end={[1, 0.5]}
              start={[0, 1]}
              colors={["#21D4FD", "#55ACEE"]}
              style={{
                width: "100%",
                height: 50,
                display: "flex",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "red",
                justifyContent: "center",
                alignSelf: "flex-end",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Hitung
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
                Cancel
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Add;
