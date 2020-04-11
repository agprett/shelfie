import React from 'react'
import Product from './Product'

function Dashboard(props) {
  const products = props.inventory.map(product => {
    return <Product key={product.id} product={product} delete={props.delete} getUpdate={props.getUpdate}/>
  })

  return (
    <div className='inventory'>
      {products}
    </div>
  )
}

export default Dashboard