const { ref, set, get, child } = require("firebase/database")

/**
 * This class exists so the index.js can import this, and allow passing in access to the realtime database.
 * The main purpose is to be more organized with the code
 */
class Resolvers {
  constructor(db) {
    this.db = db;

    this.resolvers = {
      Query: {
        getName: async () => {
          const path = "tester1/name"
          const snapshot = await get(child(ref(db), path))
          const name = snapshot.val();
          return name;
        },
        hello: () => 'Hello world!',
      },

      Mutation: {
        setName: async (parent, { newName }) => {
          try {
            const result = await set(ref(db, 'tester1/'), {
              name: newName,
            });

            console.log("result:", result);
            console.log("name changed to:", newName)
            return newName;
          } catch (error) {
            console.log("Couldn't set new name");
            console.error(error);
          }
        },
      }
    };
  }
}

module.exports = Resolvers;