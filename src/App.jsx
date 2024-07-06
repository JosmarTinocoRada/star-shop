import MainRouter from './routes/MainRouter';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <CartProvider>
    <MainRouter />
  </CartProvider>
  )
}

export default App;
