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
      inventory: [],
      editing: {}
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
    .catch(err => {
      console.log(err)
      alert('There was a problem connecting to the server')
    })
  }

  deleteProduct(id){
    axios.delete(`/api/inventory/${id}`).then(() => {
      this.componentDidMount()
    })
    .catch(err => {
      console.log(err)
      alert('There was a problem connecting to the server')
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-section'>
          <Dashboard
            inventory={this.state.inventory}
            delete={this.deleteProduct}
          />
          <Form
            rerender={this.componentDidMount}
          />
          </div>
      </div>
    );
  }
}

export default App;
