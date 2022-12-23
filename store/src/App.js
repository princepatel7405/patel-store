import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>

     <BrowserRouter>
     <Header/>
     {/* All Routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Products/>} />
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
     </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
