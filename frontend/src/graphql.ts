import gql from "graphql-tag";

export const GET_IP_INFO = gql`
    query ($address: String!) {
      getIPInfo(address: $address) {
        createdDate
        updatedDate
        expiresDate
        organization
        state
        country
      }
    }
  `;