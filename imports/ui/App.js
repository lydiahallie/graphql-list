import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions }) => (
  <div>
    <LoginForm />
    <RegisterForm />
    <ul>
      { !loading && 
        resolutions.map(res => 
        <li key={res._id}>{res.name}</li>
      )}
    </ul>
    <ResolutionForm />
  </div>
);

const resolutionsQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({data}) => ({...data})
})(App);