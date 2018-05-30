import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`

class Goal extends Component {
  toggleGoal = () => {
    this.props.toggleGoal({
      variables: {
        id: this.props.goal._id
      }
    });
  }

  render() {
    const { goal } = this.props;
    return (
      <li>
        <input 
          type="checkbox" 
          checked={ goal.completed }
          onClick={ this.toggleGoal } />
        <span style={{
          textDecoration: goal.completed ? 'line-through' : 'none'
        }}>{ this.props.goal.name }</span>
      </li>
    );
  }
}

export default graphql(toggleGoal, {
  name: 'toggleGoal',
  options: {
    refetchQueries: ['Resolutions']
  }
})(Goal);
