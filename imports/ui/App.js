import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const App = ({ data }) => (
  <ul>
    { !data.loading && data.resolutions.map(res => <li>{res.name}</li>)}
  </ul>
);

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`

export default graphql(hiQuery)(App);