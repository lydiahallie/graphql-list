import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import GoalForm from './GoalForm';

const App = ({ loading, resolutions, client, user }) => {
  return (
    <div>
      <button onClick={ () => {
        Meteor.logout() 
        client.resetStore()
      }}>Log Out</button>
      <LoginForm />
      <RegisterForm />
      <ResolutionForm />
      <ul>
        { !loading && 
          resolutions.map(res => 
          <li key={res._id}>
            {res.name}
            <GoalForm resolutionId={res._id} />
          </li>
        )}
      </ul>
    </div>
  )
}

const resolutionsQuery = gql`
  query Resolutions {
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