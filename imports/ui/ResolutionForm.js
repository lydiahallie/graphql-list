import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`

class ResolutionForm extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.inputRef.current.value
      }
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={ this.submitForm }>Submit</button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm)