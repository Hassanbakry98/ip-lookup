import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


//This function checks weather the app runs on 
//production or development and returns the apporpiate uri

function getUri() : string {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return "http://localhost:7777/graphql";
  } else {
    return "https://gcp-api-lsgw4ron2q-uc.a.run.app/graphql";
  }
} 

const client = new ApolloClient({
  uri: getUri(),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
