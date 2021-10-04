import React from 'react';
import './App.css';

import { useLazyQuery } from "@apollo/client";
import { GET_IP_INFO } from "./graphql";
import IpInfo from './components/Ipinfo';


function App() {

  const [address, setAddress] = React.useState<string>('');

  const [getData, {called, loading , data }] = useLazyQuery(GET_IP_INFO);

  return (
      <div className="App">
        <label>
          IP/Domain:
        </label>
        <input type="text" name="address" onChange={e => setAddress(e.target.value)} />
        <button onClick={() => getData({variables: {address: address}})}>
           Submit 
        </button>
        <IpInfo data={data? data.getIPInfo.createdDate : ' '} >
        </IpInfo>
      </div>
  );
}

export default App;
