import { ApolloServer, gql } from "apollo-server";
import { schema } from "./schema";

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => "hello world"
  }
};

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
    console.log(`graphql running at ${url}`);
});