import React from "react";

import Add from "./add";
import List from "./list";
import Hasil from "./hasil";
import useHooks from "./hooks";

const Gizi = () => {
  const { datas, methods } = useHooks();

  return datas.render === "data" ? (
    <List
      dataGizi={datas.dataGizi}
      setSelected={methods.setSelected}
      selected={datas.selected}
      setRender={methods.setRender}
    />
  ) : datas.render === "tambah" ? (
    <Add
      date={datas.date}
      show={datas.show}
      kelamin={datas.kelamin}
      setShow={methods.setShow}
      setKelamin={methods.setKelamin}
      setDate={methods.setDate}
      setRender={methods.setRender}
      setBeratBadan={methods.setBeratBadan}
      setTinggiBadan={methods.setTinggiBadan}
      setNama={methods.setNama}
      setUmur={methods.setUmur}
      beratBadan={datas.beratBadan}
      tinggiBadan={datas.tinggiBadan}
      nama={datas.nama}
      umur={datas.umur}
      hitung={methods.hitung}
    />
  ) : (
    <Hasil
      labelBeratByUmur={datas.labelBeratByUmurs}
      labelTinggiByUmur={datas.labelTinggiByUmurs}
      labelBeratByTinggi={datas.labelBeratByTinggis}
      labelRekBadanByUmur={datas.labelRekBadanByUmurs}
      labelRekTinggiByUmur={datas.labelRekTinggiByUmurs}
      labelRekBadanByTinggi={datas.labelRekBadanByTinggis}
      beratBadan={datas.beratBadan}
      tinggiBadan={datas.tinggiBadan}
      kelamin={datas.kelamin}
      umur={datas.umur}
      nama={datas.nama}
      setRender={methods.setRender}
      status={datas.stats}
    />
  );
};

export default Gizi;
