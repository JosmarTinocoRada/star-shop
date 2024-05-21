import ButtonComponent from './components/Button/ButtonComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienevenidos a Star Shop"/>
  </>
  )
}

export default App
