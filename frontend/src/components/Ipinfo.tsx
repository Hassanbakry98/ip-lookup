import * as React from "react";
import { Ipinfo } from "../types/Ipinfo"

type Props = {
  ipinfo: Ipinfo;
};

const IpInfo: React.FC<Props> = ({ ipinfo }) => {
  const { createdDate } = ipinfo;

  return (
    <div className="card">
      <h1> Lorem Ipsum </h1>
      <span> Created date: {createdDate} </span>
    </div>
  );
};

export default IpInfo;