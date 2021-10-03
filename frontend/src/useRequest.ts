import { useQuery, useMutation } from "@apollo/react-hooks";
import { DocumentNode } from 'graphql';
import { Ipinfo } from "./types/Ipinfo";

export function useGetIpInfo(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<Ipinfo>(gqlQuery);
  return { loading, error, data };
}