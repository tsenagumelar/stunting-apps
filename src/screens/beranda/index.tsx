import React, { useEffect } from "react";
import { View } from "react-native";

import styles from "./styles";
import useHooks from "./hooks";
import ModalName from "./components/modal";
import MenuBox from "./components/menubox";
import Articles from "./components/articles";
import CarouselBox from "./components/carouselbox";
import { execTable } from "@/src/sqlite";
import { useSQLiteContext } from "expo-sqlite";

const Beranda = () => {
  const { datas, methods } = useHooks();
  const db = useSQLiteContext();

  useEffect(() => {
    execTable(db);
  }, []);

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
