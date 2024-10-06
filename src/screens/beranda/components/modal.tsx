import { Text, View } from "react-native";
import { Modal, TextInput } from "react-native-paper";
import { IModal } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const ModalName: React.FC<IModal> = ({
  showModal,
  modalName,
  setModalName,
  setShowModal,
}: IModal) => {
  return (
    <Modal
      visible={showModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onDismiss={() => setShowModal(false)}
    >
      <View
        style={{
          width: 300,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
          Masukan Nama Anda
        </Text>
        <TextInput
          value={modalName}
          label={"Nama"}
          mode="outlined"
          onChangeText={(val) => setModalName(val)}
          outlineStyle={{ height: 50, width: 270, borderRadius: 50 }}
        />

        <LinearGradient
          end={[1, 0.5]}
          start={[0, 1]}
          colors={["#21D4FD", "#55ACEE"]}
          style={{
            width: "100%",
            height: 50,
            marginTop: 10,
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
            Save
          </Text>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default ModalName;
