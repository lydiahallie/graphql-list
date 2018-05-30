import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution {
    createResolution {
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
    console.log(this.inputRef.current.value)
    this.props.createResolution();
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
  name: 'createResolution'
})(ResolutionForm)