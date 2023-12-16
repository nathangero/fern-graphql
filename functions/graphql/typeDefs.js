const typeDefs =`
  type Data {
    name: String
  }

  type Query {
    getName: Data
    hello: String
  }

  type Mutation {
    setName(newName: String!): Data
  }
`;

module.exports = typeDefs;