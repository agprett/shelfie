import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
  }

  render(){
    return (
      <div>
        Form.js
      </div>
    )
  }
}

export default Form