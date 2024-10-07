import { useState } from "react";

import useDataStunting, { IStunting } from "@/src/hooks/useDataStunting";
import { getAllData, insertData } from "@/src/sqlite";
import { useSQLiteContext } from "expo-sqlite";

const useHooks = () => {
  const db = useSQLiteContext();

  const [render, setRender] = useState("data");

  const [selected, setSelected] = useState(-1);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [kelamin, setKelamin] = useState("laki-laki");
  const [stats, setStats] = useState("");

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState(0);
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");

  const [labelBeratByUmurs, setLabelBeratByUmur] = useState({});
  const [labelTinggiByUmurs, setLabelTinggiByUmur] = useState({});
  const [labelBeratByTinggis, setLabelBeratByTinggi] = useState({});
  const [labelRekBadanByUmurs, setLabelRekBadanByUmur] = useState("");
  const [labelRekTinggiByUmurs, setLabelRekTinggiByUmur] = useState("");
  const [labelRekBadanByTinggis, setLabelRekBadanByTinggi] = useState("");

  const [dataGizi, setDataGizi] = useState<IStunting[]>([]);

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

    setLabelBeratByUmur(labelBeratByUmur[0]);
    setLabelTinggiByUmur(labelTinggiByUmurs[0]);
    setLabelBeratByTinggi(labelBeratByTinggis[0]);
    setLabelRekBadanByUmur(rekBeratByUmur.toString());
    setLabelRekTinggiByUmur(rekTinggiByUmur.toString());
    setLabelRekBadanByTinggi(rekBeratByTinggi.toString());

    const stat =
      labelBeratByTinggis[0].color === "#ff3300" ||
      labelTinggiByUmurs[0].color === "#ff3300" ||
      labelBeratByTinggis[0].color === "#ff3300"
        ? "#ff3300"
        : labelBeratByTinggis[0].color === "#ffff99" ||
          labelTinggiByUmurs[0].color === "#ffff99" ||
          labelBeratByTinggis[0].color === "#ffff99"
        ? "#ffff99"
        : "#33cc33";
    setStats(stat);

    setRender("hasil");
  };

  const insert = async () => {
    const data: IStunting = {
      nama: nama,
      tanggal_lahir: date.toLocaleDateString(),
      jenis_kelamin: kelamin,
      berat: parseInt(beratBadan),
      tinggi: parseInt(tinggiBadan),
      status: stats,
      created_at: new Date().toISOString(),
    };
    insertData(db, data);
  };

  const getData = async () => {
    const data = (await getAllData(db)) as IStunting[];
    setDataGizi(data);
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
      stats,
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
