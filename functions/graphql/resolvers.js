

const resolvers = {
  Query: {
    getName: async () => {
      console.log("@getname");

      return ""
    },
    hello: () => 'Hello world!',
  },

  Mutation: {
    setName: async (parent, args) => {
      console.log("@setName");

      return ""
    },
  }
};

module.exports = resolvers;