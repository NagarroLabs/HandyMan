import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error });
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.error);
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
