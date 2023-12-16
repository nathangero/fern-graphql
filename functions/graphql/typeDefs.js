const typeDefs =`
  type Query {
    getName: String
    hello: String
  }

  type Mutation {
    setName(newName: String!): String
  }
`;

module.exports = typeDefs;