import React from 'react'
import axios from 'axios'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
    
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addProduct = this.addProduct.bind(this)
  }

  componentDidUpdate(prevProps){
    if(this.props.edittingProduct !== prevProps.edittingProduct){
      axios.get(`/api/inventory/?id=${this.props.edittingProduct}`)
      .then(res => {
        this.setState({name: res.data[0].name, price: res.data[0].price, imgurl: res.data[0].img})
      })
      .catch(err => {
        console.log(err)
        alert('There was a problem connecting to the server')
      })
    }
  }
  
  resetHandler() {
    this.setState({
      name: '',
      price: 0,
      imgurl: ''
    })
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  addProduct(name, price, img){
    if(this.props.edittingProduct !== 0){
      axios.put(`/api/inventory/${this.props.edittingProduct}`, {name, price, img})
      .then(() => this.props.rerender())
      .catch(err => {
        console.log(err)
        alert('There was a problem connecting to the server')
      })
    } else {
      axios.post('/api/product', {name, price, img})
      .then(() => this.props.rerender())
      .catch(err => {
        console.log(err)
        alert('There was a problem connecting to the server')
      })
    }
    this.resetHandler()
  }
  
  render(){
    return (
      <div className='form'>
        <img
          className='form=img'
          src={this.state.imgurl ? `${this.state.imgurl}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKOmHNxnOQuvVSoUnFWg6-PEIbUviw_a88siDC1KCIgYEUTAya&usqp=CAU'}
          alt='Not available'
        />
        Image URL:
        <input
          name='imgurl'
          onChange={event => this.handleChange(event)}
          value={this.state.imgurl}
        />
        Product Name:
        <input
          name='name'
          onChange={event => this.handleChange(event)}
          value={this.state.name}
          />
        Price:
        <input
          name='price'
          onChange={event => this.handleChange(event)}
          value={this.state.price}
          />
        <button className='cancel' onClick={() => this.resetHandler()}><h2>Cancel</h2></button>
        <button className='add' onClick={() => this.addProduct(this.state.name, this.state.price, this.state.imgurl)}><h2>Add Inventory</h2></button>
      </div>
    )
  }
}

export default Form