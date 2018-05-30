import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';

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
            <span style={{
              textDecoration: res.completed ? 'line-through' : 'none'
            }}>{res.name}</span>
            <ul>
              { res.goals.map(x =>
                <Goal goal={x} key={x._id} />
              )}
            </ul>
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
      completed
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({data}) => ({...data})
})(withApollo(App));