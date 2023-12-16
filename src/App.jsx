import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import './App.css'


const client = new ApolloClient({
  uri: 'https://us-central1-fern-graphql-tester.cloudfunctions.net/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Outlet />
      </ApolloProvider>
    </>
  )
}

export default App
