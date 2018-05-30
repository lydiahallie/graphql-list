import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';

const App = ({ data }) => (
  <div>
    <ul>
      { !data.loading && 
        data.resolutions.map(res => 
        <li key={res._id}>{res.name}</li>
      )}
    </ul>
    <ResolutionForm />
  </div>
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