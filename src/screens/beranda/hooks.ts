const useHooks = () => {
  const carouselDummy = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      image: "https://picsum.photos/400/200",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      image: "https://picsum.photos/500/200",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      image: "https://picsum.photos/350/200",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Description 5",
      image: "https://picsum.photos/450/200",
    },
    {
      id: 6,
      title: "Title 6",
      description: "Description 6",
      image: "https://picsum.photos/550/200",
    },
  ];

  return {
    datas: {
      carouselDummy,
    },
    methods: {},
  };
};

export default useHooks;
