import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import data from './Components/data/Data';
import React,{useState} from 'react';
import Products from "./Components/front/Products/Products"; 
import Cart from './Components/front/Cart/Cart';
import Header from './Components/front/Header/Header';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
    const { productItems}=data;
    const[cartItems,setCartItems]=useState([]);
    const [newdata,setnewdata]=useState([])
    const btn=(item)=>{
   const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);  
    return index >= 0;
}

    const addProduct=(product)=>{
      const productExist= cartItems.find((item)=>item.id===product.id);
      if(productExist){
        setCartItems(cartItems.map((item)=>item.id===product.id ?
        {...productExist,quantity:productExist.quantity 
          +1}:item));
      }
      else{
        setCartItems([...cartItems,{...product,quantity:1}]);
      }
    } 
    const addItem=(product)=>{
      const productExist= cartItems.find((item)=>item.id===product.id);
      if(productExist){
        
                removeProduct(product);

      }
      else{
        setCartItems([...cartItems,{...product,quantity:1}]);
      }
    } 
    const removeProduct=(product)=>{
      const productExist= cartItems.find((item)=>item.id===product.id);
      if(productExist.quantity===1)
      {
        setCartItems(cartItems.filter((item)=>item.id!==product.id));
      }
      else{
        setCartItems(cartItems.map((item)=>item.id===product.id?
        {...productExist,quantity:productExist.quantity-1}:item));
      }
    }
    const clearCart=()=>{
      setCartItems([]);
    }
    const mobile=()=>{
      setnewdata(data.filter(item=>{
        return item.type==="mobile"
      }))
      console.log(newdata);
      
    }
  const allProducts=()=>{
    setnewdata(data.filter(item=>{
      return item
    }))
    console.log(newdata)
  }
    const laptop=()=>{
      setnewdata(data.filter(item=>{
        return item.type==="laptop"
      }))
      console.log(newdata)
    }
  
    const headSet=()=>{
      setnewdata(data.filter(item=>{
        return item.type==="headset"
      }))
      console.log(newdata)
    }
    const watch=()=>{
      setnewdata(data.filter(item=>{
        return item.type==="watch"
      }))
      console.log(newdata)
    }
  return (
    <div>
         {/* <Router>
            <Header/>
            <Switchs/>
            <Products/>
        </Router>  */}
        
       < Router>
       
       <Header cartItems={cartItems}/>
       
       {/* <Filter /> */}

                {/* <Routes productItems={productItems} />
                <Route path="/" element={<Products />} />
                <Products productItems={productItems} /> */}
<body><div className='btnn'>
      <h3>Filter Products</h3>
      <div>
                
                <Link to="/">
      <button className="btn" onClick={allProducts} >All Products</button></Link></div><br/>
      
                
      <div>
                
                <Link to="/product">  
       <button className="btn mobile" onClick={mobile} >MOBILE</button><br/>
       <button className="btn laptop" onClick={laptop} >LAPTOP</button><br/>
       <button className="btn headset" onClick={headSet} >Headset</button><br/>
       <button className="btn watch" onClick={watch} >Watch</button>
       </Link>
       </div>
       </div>
       </body>
       
               <Routes>
                
                {/* <Route path ="/" element={<Products productItems={data}/>} />
                <Route path="/cart" element={<Cart cartItems={cartItems}/>} /> */}
                <Route path="/" element={<Products btn = {btn} productItems={data} addItem={addItem} removeProduct={removeProduct}/> } />
                <Route path="/product" element={<Products btn={btn} productItems={newdata} addItem={addItem} removeProduct={removeProduct}/> } />
                
                <Route path="/cart" element={<Cart cartItems={cartItems} addProduct={addProduct} removeProduct={removeProduct} clearCart={clearCart}  />} />

                </Routes> 

              {/* <Products/> */}
                {/* <Switchs/> */}
            </Router>
            
    </div>
  )
}

export default App;
