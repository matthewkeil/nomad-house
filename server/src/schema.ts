import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { MenuItemResolver } from "./models/MenuItem";

export const schema = buildSchemaSync({
  resolvers: [MenuItemResolver]
});
