import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`

  type IPInfo {
    createdDate: String
    updatedDate: String
    expiresDate: String
    organization: String
    state: String
    country: String
  }

  type Query {
    getIPInfo(address : String!): IPInfo
  }

`;