import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider, Query } from "react-apollo";
import { useLazyQuery } from "@apollo/client";
import { GET_IP_INFO } from "./graphql";
import { useGetIpInfo } from './useRequest';




function App() {

  const [getData, { loading , data }] = useLazyQuery(GET_IP_INFO);
  const [expiresAt, setExpiresAt] = React.useState(Number);
  // const { loading, error, data } = useGetIpInfo(GET_IP_INFO);


  const handleSubmit = (e: React.SyntheticEvent) => {
    
  }

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            IP/Domain:
            <input type="text" name="address" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => getData()}> Submit </button>

        <h3>Created at: {data} </h3>
      </div>
  );
}

export default App;
