import React from 'react'

const CartItem = ({data, delOneFromCart, delAllFromCart}) => {
    let {id, name, price, quantity} = data

  return (
    <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
        <h3>{name}</h3>
        <h5>Bs {price}.00 x {quantity} = Bs {quantity * price}.00</h5>

        <button className='btn btn-danger' onClick={()=>delOneFromCart(id)}>
            Eliminar uno
        </button>
        <br />
        <button className='btn btn-success' onClick={()=>delAllFromCart(id, true)}>Eliminar todo</button>
        </div>
    </div>
  )
}

export default CartItem