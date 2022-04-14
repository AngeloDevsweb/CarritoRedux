
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1 className='text-center'>Carrito de compras con redux</h1>
        <ShoppingCart/>
      </div>
    </Provider>
  );
}

export default App;
