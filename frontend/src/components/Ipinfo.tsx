import * as React from "react";
import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_IP_INFO } from "../graphql"

type Props = {
  data: string;
};

const IpInfo: React.FC<Props> = ({ data }) => {

  return (
    <div className="card">
      <h1> Lorem Ipsum </h1>
      <span> Created date: {data} </span>
    </div>
  );
};

export default IpInfo;