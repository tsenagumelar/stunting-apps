import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ICarousel {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IArticle {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IMenu {
  id: number;
  title: string;
  image: string;
}

export interface IModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalName: string;
  setModalName: React.Dispatch<React.SetStateAction<string>>;
  saveNameModal: () => Promise<void>;
}

const useHooks = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [modalName, setModalName] = useState("");

  const getCurrentName = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        setName(value);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getCurrentName();
  }, []);

  const carouselDummy: ICarousel[] = [
    {
      id: 1,
      title: "Stunting Kerdil",
      description: "",
      image: "poster1",
    },
    {
      id: 2,
      title: "Bebas Stunting",
      description: "",
      image: "poster2",
    },
    {
      id: 3,
      title: "Isi Piringku Kaya Protein",
      description: "",
      image: "poster3",
    },
    {
      id: 4,
      title: "Penanggulangan Stunting",
      description: "",
      image: "poster4",
    },
  ];

  const articleData: IArticle[] = [
    {
      id: 1,
      title: "Perangi Stunting",
      description: "Bersama Perangi Stunting",
      image: "bookletImage",
    },
    {
      id: 2,
      title: "Buku Saku Desa",
      description: "Buku Saku Desa Dalam Penangganan Stunting",
      image: "bukuSaku",
    },
  ];

  const saveNameModal = async () => {
    try {
      await AsyncStorage.setItem("name", modalName);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    datas: {
      carouselDummy,
      showModal,
      name,
      modalName,
      articleData,
    },
    methods: {
      setShowModal,
      setName,
      setModalName,
      saveNameModal,
    },
  };
};

export default useHooks;
