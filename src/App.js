import React from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      inventory: []
    }
  }

  componentDidMount(){
    axios.get()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
