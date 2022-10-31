import React, {Component} from 'react'
//import PageNotFound from './PageNotFound'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <p style={{color: "red"}}>
             Something Went Wrong!
          </p>;
        </>
      );
    }

    return this.props.children; 
  }
}
export default ErrorBoundary