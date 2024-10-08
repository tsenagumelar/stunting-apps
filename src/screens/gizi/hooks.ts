import { useEffect, useState } from "react";

import useDataStunting, { IAnak, IStunting } from "@/src/hooks/useDataStunting";
import {
  deleteDataStunting,
  getAllDataAnak,
  getAllDataStunting,
  getDataAnakByNik,
  insertDataAnak,
  insertDataStunting,
} from "@/src/sqlite";
import { useSQLiteContext } from "expo-sqlite";
import moment from "moment";
import styles from "../beranda/styles";

const useHooks = () => {
  const db = useSQLiteContext();

  const [render, setRender] = useState("data");

  const [selected, setSelected] = useState(-1);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [kelamin, setKelamin] = useState("laki-laki");
  const [stats, setStats] = useState("");

  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState(0);
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [isNik, setIsNik] = useState(false);

  const [labelBeratByUmurs, setLabelBeratByUmur] = useState({});
  const [labelTinggiByUmurs, setLabelTinggiByUmur] = useState({});
  const [labelBeratByTinggis, setLabelBeratByTinggi] = useState({});
  const [labelRekBadanByUmurs, setLabelRekBadanByUmur] = useState("");
  const [labelRekTinggiByUmurs, setLabelRekTinggiByUmur] = useState("");
  const [labelRekBadanByTinggis, setLabelRekBadanByTinggi] = useState("");

  const [dataGizi, setDataGizi] = useState<IAnak[]>([]);

  const {
    getRekBeratByTinggi,
    getRekTinggiByUmur,
    getRekBeratByTinggiNormal,
    getRekBeratByUmur,
    labelBeratByTinggi,
    labelTinggiByUmur,
    leblBeratByUmur,
  } = useDataStunting();

  const hitung = async () => {
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
        ? "Sangat Kurang"
        : labelBeratByTinggis[0].color === "#ffff99" ||
          labelTinggiByUmurs[0].color === "#ffff99" ||
          labelBeratByTinggis[0].color === "#ffff99" //#33cc33
        ? "Kurang"
        : "Normal";
    setStats(stat);

    if (!isNik) {
      insertAnak();
      insertStunting(stat);
    } else {
      insertStunting(stat);
    }

    getDataAnak();
    clearState(true);

    setRender("hasil");
  };

  const clearState = (withNik: boolean) => {
    if (withNik) {
      setNik("");
    }
    setNama("");
    setDate(new Date());
    setBeratBadan("");
    setTinggiBadan("");
    setUmur(0);
    setKelamin("laki-laki");
    setIsNik(false);
  };

  const insertAnak = async () => {
    const data: IAnak = {
      nik: nik,
      nama: nama,
      tanggal_lahir: moment(new Date(date)).format("DD-MM-YYYY"),
      jenis_kelamin: kelamin,
      created_at: new Date().toISOString(),
    };
    insertDataAnak(db, data);
  };

  const insertStunting = async (stat: string) => {
    const data: IStunting = {
      nik: nik,
      berat: parseInt(beratBadan),
      tinggi: parseInt(tinggiBadan),
      status: stat,
      created_at: new Date().toISOString(),
    };
    insertDataStunting(db, data);
  };

  const getDataAnak = async () => {
    const data = (await getAllDataAnak(db)) as IAnak[];
    if (data.length > 0) {
      const datas = data.map((item) => {
        let news = {
          ...item,
        };
        getAllDataStunting(db, item.nik).then((data) => {
          let stun = data as IStunting[];
          news.stunting = stun.sort((a, b) => {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          });
        });
        return news;
      });
      setDataGizi(datas);
      console.log(datas);
    }
  };

  const deleteStunting = async (id: number) => {
    await deleteDataStunting(db, id);
    getDataAnak();
  };

  useEffect(() => {
    getDataAnak();
  }, []);

  const checkIsNik = async () => {
    const data = (await getDataAnakByNik(db, nik)) as IAnak[];
    if (data.length === 0) {
      clearState(false);
    } else {
      setIsNik(true);
      setNama(data[0].nama);
      setKelamin(data[0].jenis_kelamin);
      setDate(moment(data[0].tanggal_lahir, "DD-MM-YYYY").toDate());
      setUmur(
        moment().diff(moment(data[0].tanggal_lahir, "DD-MM-YYYY"), "months")
      );
    }
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
      nik,
      isNik,
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
      setNik,
      insertStunting,
      insertAnak,
      setIsNik,
      checkIsNik,
      deleteStunting,
    },
  };
};

export default useHooks;
