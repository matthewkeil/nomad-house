import { ApolloServer } from "apollo-server-lambda";
import { schema } from "./schema";

const server = new ApolloServer({ schema });

export const handler = server.createHandler();
