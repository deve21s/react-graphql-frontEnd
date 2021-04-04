import BookList from './components/bookList'
import AddBook from "./components/addBook"
import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'
import {ApolloProvider} from 'react-apollo'
import React from 'react'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
     <h1>BOOK COMPONENT</h1> 
     <BookList />
     <AddBook />
    </div>
    </ApolloProvider>
  );
}

export default App;
