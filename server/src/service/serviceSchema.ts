import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`

  type IPInfo {
    createdDate: String
  }

  type Query {
    getIPInfo(address : String!): IPInfo
  }

`;