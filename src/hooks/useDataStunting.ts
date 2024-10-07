import Data from "@/src/constants/labels";

const useDataStunting = () => {
  const getRekBeratByUmur = (kelamin: string, umur: string, berat: string) => {
    const BeratUmur =
      kelamin == "laki-laki" ? Data.BeratUmurL : Data.BeratUmurP;
    const ideal = BeratUmur.filter((brt) => brt.umur == parseFloat(umur));
    const idl = ideal[0];
    const beratByUmur = Object.keys(idl)
      .map((key) => {
        return {
          key,
          value: idl[key as keyof typeof idl],
          gap:
            parseFloat(berat) > idl[key as keyof typeof idl]
              ? parseFloat(
                  (parseFloat(berat) - idl[key as keyof typeof idl]).toFixed(2)
                )
              : parseFloat(
                  (idl[key as keyof typeof idl] - parseFloat(berat)).toFixed(2)
                ),
        };
      })
      .sort((a, b) => (a.gap < b.gap ? -1 : 1));
    const add = parseFloat(berat) >= beratByUmur[0].value ? "+" : "-";

    return {
      rekBeratByUmur: ideal[0].median,
      kondisiBeratByUmur: beratByUmur[0].key + add,
    };
  };

  const getRekTinggiByUmur = (
    kelamin: string,
    umur: string,
    tinggi: string
  ) => {
    const TinggiUmur =
      kelamin == "laki-laki" ? Data.PanjangUmurL : Data.PanjangUmurP;
    const ideal = TinggiUmur.filter((tg) => tg.umur == parseFloat(umur));
    const idl = ideal[0];
    const tinggiByUmur = Object.keys(idl)
      .map((key) => {
        return {
          key,
          value: idl[key as keyof typeof idl],
          gap:
            parseFloat(tinggi) > idl[key as keyof typeof idl]
              ? parseFloat(
                  (parseFloat(tinggi) - idl[key as keyof typeof idl]).toFixed(1)
                )
              : parseFloat(
                  (idl[key as keyof typeof idl] - parseFloat(tinggi)).toFixed(1)
                ),
        };
      })
      .sort((a, b) => (a.gap < b.gap ? -1 : 1));
    const add = parseFloat(tinggi) >= tinggiByUmur[0].value ? "+" : "-";

    return {
      rekTinggiByUmur: ideal[0].median,
      kondisiTinggiByUmur: tinggiByUmur[0].key + add,
    };
  };

  const getRekBeratByTinggiNormal = (
    kelamin: string,
    umur: string,
    berat: string
  ) => {
    const BeratTinggi =
      kelamin == "laki-laki" ? Data.BeratPanjangL : Data.BeratPanjangP;
    const { rekTinggiByUmur } = getRekTinggiByUmur(kelamin, umur, berat);
    const ideal = BeratTinggi.filter(
      (brt) =>
        (rekTinggiByUmur - brt.panjang <= 0.5 &&
          rekTinggiByUmur - brt.panjang > 0) ||
        (brt.panjang - rekTinggiByUmur <= 0.5 &&
          brt.panjang - rekTinggiByUmur > 0)
    );

    const avgBerat =
      ideal.reduce((total, data) => total + data.median, 0) / ideal.length;

    return {
      rekBeratByTinggi: parseFloat(avgBerat.toFixed(2)),
    };
  };

  const getRekBeratByTinggi = (
    kelamin: string,
    tinggi: string,
    berat: string
  ) => {
    const BeratTinggi =
      kelamin == "laki-laki" ? Data.BeratPanjangL : Data.BeratPanjangP;
    const ideal = BeratTinggi.filter(
      (brt) =>
        (parseFloat(tinggi) - brt.panjang <= 0.5 &&
          parseFloat(tinggi) - brt.panjang > 0) ||
        (brt.panjang - parseFloat(tinggi) <= 0.5 &&
          brt.panjang - parseFloat(tinggi) > 0)
    )
      .map((dt) => {
        return {
          ...dt,
          gap:
            parseFloat(tinggi) > dt.panjang
              ? parseFloat(tinggi) - dt.panjang
              : dt.panjang - parseFloat(tinggi),
        };
      })
      .sort((a, b) => (a.gap < b.gap ? -1 : 1));

    const idl = ideal[0];
    const beratByTinggi = Object.keys(idl)
      .filter((key) => key != "panjang" && key != "gap")
      .map((key) => {
        return {
          key,
          value: idl[key as keyof typeof idl],
          gap:
            parseFloat(berat) > idl[key as keyof typeof idl]
              ? parseFloat(
                  (parseFloat(berat) - idl[key as keyof typeof idl]).toFixed(1)
                )
              : parseFloat(
                  (idl[key as keyof typeof idl] - parseFloat(berat)).toFixed(1)
                ),
        };
      })
      .sort((a, b) => (a.gap < b.gap ? -1 : 1));
    const add = parseFloat(berat) >= beratByTinggi[0].value ? "+" : "-";

    return {
      kondisiBeratByTinggi: beratByTinggi[0].key + add,
    };
  };

  const leblBeratByUmur = [
    {
      value: ["-3-"],
      color: "red",
      label:
        "Status gizi anak buruk, perlu perbaikan gizi dengan makan sehat dan bergizi",
    },
    {
      value: ["-3+", "-2-"],
      color: "orange",
      label:
        "Status gizi anak kurang, perlu perbaikan gizi dengan makan sehat dan bergizi",
    },
    {
      value: ["-2+", "-1-", "-1+", "median-", "median+", "+1-"],
      color: "black",
      label:
        "Status gizi anak normal, tetap pertahankan dengan memberi makanan sehat dan bergizi",
    },
    {
      value: ["+1+", "+2-", "+2+", "+3-", "+3+"],
      color: "orange",
      label:
        "Status gizi anak lebih, perlu perbaikan gizi dengan makanan sehat dan bergizi",
    },
  ];

  const labelTinggiByUmur = [
    {
      value: ["-3-"],
      color: "red",
      label: "Menurut umur, tinggi badan anak dalam kategori sangat pendek",
    },
    {
      value: ["-3+", "-2-"],
      color: "orange",
      label: "Menurut umur, tinggi badan anak dalam kategori pendek",
    },
    {
      value: [
        "-2+",
        "-1-",
        "-1+",
        "median-",
        "median+",
        "+1-",
        "+1+",
        "+2-",
        "+2+",
        "+3-",
      ],
      color: "black",
      label: "Tinggi badan anak sudah sesuai dengan umur",
    },
    {
      value: ["+3+"],
      color: "orange",
      label: "Menurut umur, tinggi badan anak dalam kategori sangat tinggi",
    },
  ];

  const labelBeratByTinggi = [
    {
      value: ["-3-"],
      color: "red",
      label:
        "Menurut tinggi badan, berat badan anak dalam kategori sangat kurus",
    },
    {
      value: ["-3+", "-2-"],
      color: "orange",
      label: "Menurut tinggi badan, berat badan anak dalam kategori kurus",
    },
    {
      value: ["-2+", "-1-", "-1+", "median-", "median+", "+1-", "+1+", "+2-"],
      color: "black",
      label: "Menurut tinggi badan, berat badan anak sudah sesuai",
    },
    {
      value: [, "+2+", "+3-"],
      color: "orange",
      label: "Menurut tinggi badan, berat badan anak dalam kategori gemuk",
    },
    {
      value: ["+3+"],
      color: "red",
      label:
        "Menurut tinggi badan, berat badan anak dalam kategori sangat gemuk",
    },
  ];

  return {
    getRekTinggiByUmur,
    getRekBeratByTinggi,
    getRekBeratByTinggiNormal,
    getRekBeratByUmur,
    labelBeratByTinggi,
    labelTinggiByUmur,
    leblBeratByUmur,
  };
};

export default useDataStunting;
