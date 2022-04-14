import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const initialState = {
    products:[
        {id:1 , name: 'Hamburguesa', price: '100'},
        {id:2 , name: 'Pollo Frito', price: '200'},
        {id:3 , name: 'Pizza', price: '300'},
        {id:4 , name: 'Lasagna', price: '400'},
        {id:5 , name: 'Alitas de Pollo', price: '500'},
        {id:6 , name: 'Lomitos', price: '600'}
    ],
    cart:[]
}

export function shoppingReducer(state = initialState, action){
    switch (action.type) {
      case ADD_TO_CART: {
        //lo que hace esto es almacenar en una variable el producto que se ha encontrado
        //al buscar que el producto id sea igual al payload que nos pasan a traves de la accion si esto cumple
        //se almacena en la variable newItem
        let newItem = state.products.find(
          (product) => product.id === action.payload
        );
        //busca en el arreglo de cart que el item sea igual al newitem con su id
        let itemInCart = state.cart.find((item) => item.id === newItem.id);

        return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
      }
      case REMOVE_ONE_FROM_CART:{
          let itemToDelete = state.cart.find(item => item.id === action.payload)

          return itemToDelete.quantity > 1
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                  ),
                }
              : {
                  ...state,
                  cart: state.cart.filter((item)=> item.id !== action.payload)
              }; 
      }

      case REMOVE_ALL_FROM_CART:{
          return{
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload)
          }
      }

      case CLEAR_CART:{
          return initialState
      }

      default:
        return state;
    }
}