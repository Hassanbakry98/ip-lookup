import gql from "graphql-tag";

export const GET_IP_INFO = gql`
    query{
      getIPInfo(address: "google.com") {
        createdDate
      }
    }
  `;