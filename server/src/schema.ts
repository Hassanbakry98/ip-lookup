import { makeExecutableSchema } from "@graphql-tools/schema";
import { ServiceTypeDefs } from "./service/serviceSchema";
import ServiceResolvers from "./service/serviceResolver";
import { DateTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"

export const schema = makeExecutableSchema({
  typeDefs: [
    ServiceTypeDefs
  ],
  resolvers: [
    ServiceResolvers
  ]
});