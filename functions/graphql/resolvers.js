class Resolvers {
  constructor(db) {
    this.db = db;

    this.resolvers = {
      Query: {
        getName: async () => {
          const snapshot = await this.db.ref("tester1/name").once('value');
          const name = snapshot.val();
          return name;
        },
        hello: () => 'Hello world!',
      },

      Mutation: {
        setName: async (parent, args) => {
          console.log("@setName");

          return "";
        },
      }
    };
  }
}

module.exports = Resolvers;