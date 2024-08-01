const useHooks = () => {
  const carouselDummy = [
    {
      id: 1,
      title: "Title 1",
      description: "This is a showcasing beautiful city of Paris.",
      image: "https://picsum.photos/400/200",
    },
    {
      id: 2,
      title: "Title 2",
      description: "This is a showcasing vibrant city of New York.",
      image: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      title: "Title 3",
      description: "This is a showcasing historic city of Rome.",
      image: "https://picsum.photos/500/200",
    },
    {
      id: 4,
      title: "Title 4",
      description: "This is a showcasing bustling city of Tokyo.",
      image: "https://picsum.photos/350/200",
    },
    {
      id: 5,
      title: "Title 5",
      description: "This is a showcasing scenic city of Sydney.",
      image: "https://picsum.photos/450/200",
    },
    {
      id: 6,
      title: "Title 6",
      description: "This is a showcasing cultural city of Istanbul.",
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
