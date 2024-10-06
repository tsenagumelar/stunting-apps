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
      title: "Title 1",
      description: "Cegah Stunting, Cukupi Gizi - Lengkapi Imunisasi.",
      image:
        "https://kembaroginews.com/wp-content/uploads/2023/11/files32171Neon-box_Stunting_120x300cm-scaled.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Mengenal Stunting, cegah stunting lebih dini.",
      image:
        "https://pluz.id/assets/media/upload/2024/07/Syahruddin-DPPKB-Makassar-Banner-pluzid.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Cegah stunting pada anak.",
      image:
        "https://globalcybernews.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-11-at-11.14.25.jpeg",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Cegah Stunting Itu Penting.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6ryiCGC1lZGQV4gdvLLJqtBOKE_f_Lkj5Q&s",
    },
    {
      id: 5,
      title: "Title 5",
      description: "This is a showcasing scenic city of Sydney.",
      image: "https://i.ytimg.com/vi/KucBJWDYxGQ/maxresdefault.jpg",
    },
    {
      id: 6,
      title: "Title 6",
      description: "This is a showcasing cultural city of Istanbul.",
      image:
        "https://img.mbizmarket.co.id/products/thumbs/800x800/2022/05/25/8083ad7d25cf5b5963635a3e266c3954.jpg",
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
