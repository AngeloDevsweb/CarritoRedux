import React from 'react'

const ProductItem = ({data, addToCart}) => {
    let {id, name, price} = data;
  return (
    <div className='col-md-4 p-2'>
        <div className='card card-body'>
            <h4>{name}</h4>
            <img src="https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2014/06/comida_rapida_no_es_tan_mala_para_la_saludfinal.jpg.jpg" alt="" />
            <h5 className='mt-2 text-center'>{price}Bs.</h5>
            <button className='btn btn-primary' onClick={()=>addToCart(id)}> Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ProductItem