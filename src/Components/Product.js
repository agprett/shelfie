import React from 'react'

function Product(props) {
  return (
    <div className='products'>
      <img 
        className='product-image'
        src={props.product.img ? `${props.product.img}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKOmHNxnOQuvVSoUnFWg6-PEIbUviw_a88siDC1KCIgYEUTAya&usqp=CAU'}
        alt='Not available'
      />
      <h2>{props.product.name}</h2>
      <h3>${props.product.price}</h3>
      <button onClick={() => props.delete(props.product.id)}>Delete</button>
      <button onClick={() => props.getUpdate(props.product.id)}>Update</button>
    </div>
  )
}

export default Product