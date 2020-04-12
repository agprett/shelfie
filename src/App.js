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
      edittingProduct: 0
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.getUpdate = this.getUpdate.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data, edittingProduct: 0})
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

  getUpdate(id){
    this.setState({edittingProduct: id})
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <div className='main-section'>
          <Dashboard
            inventory={this.state.inventory}
            delete={this.deleteProduct}
            getUpdate={this.getUpdate}
          />
          <div className='form-backing'>
            <Form
              rerender={this.componentDidMount}
              edittingProduct={this.state.edittingProduct}
            />
          </div>
          </div>
      </div>
    );
  }
}

export default App;
