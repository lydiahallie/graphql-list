import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions, client, user }) => {
  console.log('client', client)
  console.log("user", user)
  console.log("resolutions", resolutions)
  return (
    <div>
      <button onClick={ () => {
        Meteor.logout() 
        client.resetStore()
      }}>Log Out</button>
      <React.Fragment>
        <LoginForm />
        <RegisterForm />
      </React.Fragment> 
      <ResolutionForm />
      <ul>
        { !loading && 
          resolutions.map(res => 
          <li key={res._id}>{res.name}</li>
        )}
      </ul>
    </div>
  )
}

const resolutionsQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
    user {
      _id
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({data}) => ({...data})
})(withApollo(App));