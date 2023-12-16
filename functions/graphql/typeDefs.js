const typeDefs =`
  type Data {
    name
  }

  Query {
    getName: Data
  }

  Mutation {
    setName(): Data
  }
`;

module.exports = typeDefs;