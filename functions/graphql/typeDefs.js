const typeDefs =`
  type Data {
    name: String
  }

  type Query {
    getName: String
    hello: String
  }

  type Mutation {
    setName(newName: String!): Data
  }
`;

module.exports = typeDefs;