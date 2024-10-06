import { View } from "react-native";

import ModalName from "./components/modal";
import Articles from "./components/articles";
import MenuBox from "./components/menubox";
import CarouselBox from "./components/carouselbox";
import styles from "./styles";
import useHooks from "./hooks";
import React from "react";

const Beranda = () => {
  const { datas, methods } = useHooks();

  return (
    <View style={styles.container}>
      <CarouselBox />
      <MenuBox />
      <Articles />
      <ModalName
        showModal={datas.showModal}
        setShowModal={methods.setShowModal}
        modalName={datas.modalName}
        setModalName={methods.setModalName}
        saveNameModal={function (): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
};

export default Beranda;
