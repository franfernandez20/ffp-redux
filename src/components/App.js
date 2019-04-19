import React, { useState, useEffect, useRef } from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Bar from '../containers/EstylesExampleBar'
import AppContainer from '../containers/AppContainer'
import ProductInfo from './ProductInfo';
import ProductsCards from './ProductsCards';


// const getProducts = () => {
//   fetch(`http://localhost:3001/products/`)
//     .then((result) => result.json())
// }

const App = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/`)
    .then((result) => result.json())
    .then((result) => setProducts(result.data));
  // .then((result) => console.log(result.data));
  },[]);

  return (
    <div>
      <Bar>
        {/* <AddTodo />
        <VisibleTodoList />
        <Footer /> */}
        <ProductInfo id={'5c68513c8001db327e6ee93d'}/>
        {
          products && <ProductsCards products={products}/>
        }
      </Bar>
    </div>
  );
}

export default App