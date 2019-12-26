import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component  {
  // const url = "http://ec2-18-217-155-238.us-east-2.compute.amazonaws.com"
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        test: ""
      };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              name: res.one.name,
              test: res.one.test
            })
          })
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
        <p className="App-intro">{this.state.name}</p>
        <p className="App-intro">{this.state.test}</p>
      </div>
    );
  }
}

export default App;
