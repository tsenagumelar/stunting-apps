import { useState } from "react";

import { DataGizi } from "./dummy";

const useHooks = () => {
  const [render, setRender] = useState("tambah");

  const [selected, setSelected] = useState(-1);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState("laki-laki");

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState(0);
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");

  return {
    datas: {
      render,
      DataGizi,
      selected,
      date,
      show,
      value,
      nama,
      umur,
      beratBadan,
      tinggiBadan,
    },
    methods: {
      setRender,
      setSelected,
      setShow,
      setDate,
      setValue,
      setNama,
      setUmur,
      setBeratBadan,
      setTinggiBadan,
    },
  };
};

export default useHooks;
