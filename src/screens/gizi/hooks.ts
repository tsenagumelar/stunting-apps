import { useState } from "react";

import useDataStunting from "@/src/hooks/useDataStunting";

const useHooks = () => {
  const [render, setRender] = useState("data");

  const [selected, setSelected] = useState(-1);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [kelamin, setKelamin] = useState("laki-laki");

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState(0);
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");

  const [labelBeratByUmurs, setLabelBeratByUmur] = useState("");
  const [labelTinggiByUmurs, setLabelTinggiByUmur] = useState("");
  const [labelBeratByTinggis, setLabelBeratByTinggi] = useState("");
  const [labelRekBadanByUmurs, setLabelRekBadanByUmur] = useState("");
  const [labelRekTinggiByUmurs, setLabelRekTinggiByUmur] = useState("");
  const [labelRekBadanByTinggis, setLabelRekBadanByTinggi] = useState("");

  const [dataGizi, setDataGizi] = useState([]);

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

    setLabelBeratByUmur(labelBeratByUmur[0].label);
    setLabelTinggiByUmur(labelTinggiByUmurs[0].label);
    setLabelBeratByTinggi(labelBeratByTinggis[0].label);
    setLabelRekBadanByUmur(rekBeratByUmur.toString());
    setLabelRekTinggiByUmur(rekTinggiByUmur.toString());
    setLabelRekBadanByTinggi(rekBeratByTinggi.toString());

    setRender("hasil");
  };

  return {
    datas: {
      render,
      dataGizi,
      selected,
      date,
      show,
      kelamin,
      nama,
      umur,
      beratBadan,
      tinggiBadan,
      labelBeratByTinggis,
      labelTinggiByUmurs,
      labelBeratByUmurs,
      labelRekBadanByUmurs,
      labelRekTinggiByUmurs,
      labelRekBadanByTinggis,
    },
    methods: {
      setRender,
      setSelected,
      setShow,
      setDate,
      setKelamin,
      setNama,
      setUmur,
      setBeratBadan,
      setTinggiBadan,
      setLabelBeratByTinggi,
      setLabelTinggiByUmur,
      setLabelBeratByUmur,
      setLabelRekBadanByUmur,
      setLabelRekTinggiByUmur,
      setLabelRekBadanByTinggi,
      hitung,
    },
  };
};

export default useHooks;
