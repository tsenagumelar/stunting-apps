import { useState } from "react";

import { DataGizi } from "./dummy";

const useHooks = () => {
  const [render, setRender] = useState("data");
  const [selected, setSelected] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("laki-laki");

  return {
    datas: {
      render,
      DataGizi,
      selected,
      date,
      show,
      value,
    },
    methods: {
      setRender,
      setSelected,
      setShow,
      setDate,
      setValue,
    },
  };
};

export default useHooks;
