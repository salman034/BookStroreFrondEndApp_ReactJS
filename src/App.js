import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import BookStoreHome from './Components/Home/BookStoreHome';
import Cart from './Components/Cart/Cart';
import CoustomerDetails from './Components/CoustomerDetails/CoustomerDetails';
import Summary from './Components/Summary/Summary';
import OrderSuccess from './Components/OrderSuccess/OrderSuccess';
//import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
     <Header/> 
        <Routes>
        {/* <Route path='' element={<Login/>}/> */}
          <Route path='' element={<BookStoreHome/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Coustomer' element={<CoustomerDetails/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/order' element={<OrderSuccess/>}/>
          <Route path='/home' element={<BookStoreHome/>}/>
        </Routes>
    </div>
  );
}

export default App;
