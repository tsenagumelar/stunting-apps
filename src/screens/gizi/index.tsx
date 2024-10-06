import React from "react";

import Add from "./add";
import List from "./list";
import Hasil from "./hasil";
import useHooks from "./hooks";

const Gizi = () => {
  const { datas, methods } = useHooks();

  return datas.render === "data" ? (
    <List
      dataGizi={datas.DataGizi}
      setSelected={methods.setSelected}
      selected={datas.selected}
      setRender={methods.setRender}
    />
  ) : datas.render === "tambah" ? (
    <Add
      date={datas.date}
      show={datas.show}
      value={datas.value}
      setShow={methods.setShow}
      setValue={methods.setValue}
      setDate={methods.setDate}
      setRender={methods.setRender}
    />
  ) : (
    <Hasil
      date={datas.date}
      show={datas.show}
      value={datas.value}
      setDate={methods.setDate}
      setShow={methods.setShow}
      setValue={methods.setValue}
      setRender={methods.setRender}
    />
  );
};

export default Gizi;
