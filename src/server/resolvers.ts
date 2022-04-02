const resolver = {
  Query: {
    hello: () => "Hellow wold",
    getColorPalettes: (): string => {
      return "hi";
    },
  },
};

module.exports = resolver;
