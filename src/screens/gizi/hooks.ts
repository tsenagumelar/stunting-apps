const useHooks = () => {
  const dataGizi = [
    {
      id: 1,
      nama: "Udin",
      tanggalLahir: "2023-01-01",
      jenisKelamin: "Laki-laki",
      status: "Normal",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 20, //kg
          tinggiBadan: 80, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 22, //kg
          tinggiBadan: 84, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 24, //kg
          tinggiBadan: 90, //cm
        },
      ],
    },
    {
      id: 2,
      nama: "Rina",
      tanggalLahir: "2022-05-15",
      jenisKelamin: "Perempuan",
      status: "Kurang",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 18, //kg
          tinggiBadan: 75, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 19, //kg
          tinggiBadan: 78, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 20, //kg
          tinggiBadan: 80, //cm
        },
      ],
    },
    {
      id: 3,
      nama: "Budi",
      tanggalLahir: "2022-08-20",
      jenisKelamin: "Laki-laki",
      status: "Sangat Kurang",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 19, //kg
          tinggiBadan: 76, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 20, //kg
          tinggiBadan: 78, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 21, //kg
          tinggiBadan: 80, //cm
        },
      ],
    },
    {
      id: 4,
      nama: "Siti",
      tanggalLahir: "2022-10-10",
      jenisKelamin: "Perempuan",
      status: "Kurang",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 17, //kg
          tinggiBadan: 72, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 18, //kg
          tinggiBadan: 74, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 19, //kg
          tinggiBadan: 76, //cm
        },
      ],
    },
    {
      id: 5,
      nama: "Ahmad",
      tanggalLahir: "2022-12-25",
      jenisKelamin: "Laki-laki",
      status: "Normal",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 22, //kg
          tinggiBadan: 82, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 23, //kg
          tinggiBadan: 84, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 24, //kg
          tinggiBadan: 86, //cm
        },
      ],
    },
    {
      id: 6,
      nama: "Dewi",
      tanggalLahir: "2023-02-14",
      jenisKelamin: "Perempuan",
      status: "Normal",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 16, //kg
          tinggiBadan: 70, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 17, //kg
          tinggiBadan: 72, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 18, //kg
          tinggiBadan: 74, //cm
        },
      ],
    },
    {
      id: 7,
      nama: "Rudi",
      tanggalLahir: "2023-04-05",
      jenisKelamin: "Laki-laki",
      status: "Normal",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 21, //kg
          tinggiBadan: 78, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 22, //kg
          tinggiBadan: 80, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 23, //kg
          tinggiBadan: 82, //cm
        },
      ],
    },
    {
      id: 8,
      nama: "Lina",
      tanggalLahir: "2023-06-30",
      jenisKelamin: "Perempuan",
      status: "Kurang",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 15, //kg
          tinggiBadan: 68, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 16, //kg
          tinggiBadan: 70, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 17, //kg
          tinggiBadan: 72, //cm
        },
      ],
    },
    {
      id: 9,
      nama: "Eko",
      tanggalLahir: "2023-09-10",
      jenisKelamin: "Laki-laki",
      status: "Normal",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 18, //kg
          tinggiBadan: 74, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 19, //kg
          tinggiBadan: 76, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 20, //kg
          tinggiBadan: 78, //cm
        },
      ],
    },
    {
      id: 10,
      nama: "Sari",
      tanggalLahir: "2023-11-20",
      jenisKelamin: "Perempuan",
      status: "Sangat Kurang",
      gizi: [
        {
          tanggalPeriksa: "2023-10-01",
          beratBadan: 19, //kg
          tinggiBadan: 76, //cm
        },
        {
          tanggalPeriksa: "2023-11-01",
          beratBadan: 20, //kg
          tinggiBadan: 78, //cm
        },
        {
          tanggalPeriksa: "2023-12-01",
          beratBadan: 21, //kg
          tinggiBadan: 80, //cm
        },
      ],
    },
  ];

  return {
    datas: {
      dataGizi,
    },
    methods: {},
  };
};

export default useHooks;
