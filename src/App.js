import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  const [productSearchValue, setProductSearchValue] = React.useState('')
  const [isSearchConfirmed, setSearchConfirmation] = React.useState(false);
  // cart products array
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleProductSearchInput = (event) => {
      const currentSearchInputValue = event.target.value
      setProductSearchValue(currentSearchInputValue)
      
      if(currentSearchInputValue === '') {
        setSearchConfirmation(false)
      }
  }

  const addProductToCart = (productToAdd) => {
    const productExistsInCart = cartProducts.find(product => product.id === productToAdd.id)
    if (productExistsInCart) {
      // increase the quantity
      // map goes through each product in array
      // checks to see if it exists and if it does increment the count by one
      // otherwise ignore and return the product (if we do not include this step the product will be removed)
      productExistsInCart.count += 1
      // the map creates a copy of the array which maintains all of the preexisting products
      const newCartProducts = cartProducts.map(product => product.id === productToAdd.id ?
        productExistsInCart : product
      )
      
      window.localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
      setCartProducts(newCartProducts)
    } else {
      const newCartProducts = [
        // keep everything that is in the array and add a new product at the end
        // the spread copies the existing products
        ...cartProducts,
        { ...productToAdd, count: 1 }
      ]
      // add the product to the cart with the quantity of 1
      setCartProducts(newCartProducts)
      window.localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    }
  }
  

  const deleteProduct = (productToDelete) => {
    const newCartProducts = cartProducts.filter(cartProduct => cartProduct.id !== productToDelete.id);
    setCartProducts(newCartProducts)
    window.localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
  }


  const productSearchSubmit = (productSearchValue) => {
    setSearchConfirmation(true)
  }

  const removeAllProductsFromCart = () => {
    setCartProducts([])
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar 
          handleProductSearchInput={handleProductSearchInput} 
          productSearchSubmit={productSearchSubmit}
          productSearchValue={productSearchValue}
        />
        <Routes>
          <Route exact path='/products' element={
            <Homepage 
              isSearchConfirmed={isSearchConfirmed}
              productSearchValue={productSearchValue}
            />
          } />
          {/* http://localhost:3000/products/12 */}
          {/* React parameter */}
          <Route path='/products/:id' element={
          <ProductDetail 
            addProductToCart={addProductToCart}
          />
          } />
          <Route path='/cart' element={
            <Cart 
              cartProducts={cartProducts} 
              deleteProduct={deleteProduct} 
              removeAllProductsFromCart={removeAllProductsFromCart} 
            />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to='/products' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
