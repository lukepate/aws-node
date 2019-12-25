import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component  {

  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://ec2-18-217-155-238.us-east-2.compute.amazonaws.com:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
