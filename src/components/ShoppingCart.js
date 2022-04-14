import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, delFromCart, clearCart} from '../actions/shoppingActions'

import CartItem from './CartItem'
import ProductItem from './ProductItem'

const ShoppingCart = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const {products, cart} = state.shopping;

    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
    const total = cart.reduce(addition, 0);

  return (
    <div>
      <h3>Productos</h3>
      <article className="row">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="">
        <button className='btn btn-secondary' onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>

        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}

        <h5>Total: {total} Bs</h5>
      </article>
    </div>
  );
}

export default ShoppingCart