import React, { useState, useEffect, useRef } from 'react'

import { Divider } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ProductsCards from './ProductsCards'
import ProductFormModal from './ProductFormModal'
import VisibleTodoList from '../containers/VisibleTodoList'
import Bar from '../containers/EstylesExampleBar'
import AppContainer from '../containers/AppContainer'
import ProductInfo from './ProductInfo';


// const getProducts = () => {
//   fetch(`http://localhost:3001/products/`)
//     .then((result) => result.json())
// }

const App = () => {
  
  const [products, setProducts] = useState([]);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/products/`)
    .then((result) => result.json())
    .then((result) => setProducts(result.data));
  // .then((result) => console.log(result.data));
  },[]);

  const handleAddProduct = (product) => {
    console.log('EL prodcuto desde fuera del componente', product);
  }

  const openAddProduct = () => {
    setOpenProductModal(true);
  }
  const closeAddProduct = () => {
    setOpenProductModal(false);
  }

  const handleProductMoreInfo = (product) => {
    setProductInfo(product);
    setOpenProductModal(true);
  }

  const hanldeAddProduct = (id) => {
    console.log('In app Adding a product, id : ' + id)
  } 

  return (
    <div>
      <Bar>
        {/* <AddTodo />
        <VisibleTodoList />
        <Footer /> */}
        {/* <ProductInfo id={'5c68513c8001db327e6ee93d'}/> */}
        <Button onClick={openAddProduct}>Open Modal</Button>
        <Divider/>
        {/* <ProductFormModal
          open={openProductModal}
          onAdd={handleAddProduct}
          onCancel={closeAddProduct}
        /> */}
        {/* <ProductFormModal 
          open={openProductModal}
          onAdd={handleAddProduct}
          onCancel={closeAddProduct}
          onClose={closeAddProduct}
          saveForm
        /> */}
        {productInfo && 
          <ProductFormModal
            product={productInfo}
            open={openProductModal}
            onAdd={handleAddProduct}
            onCancel={closeAddProduct}
          />
        }
        {
          products && 
            <ProductsCards
              products={products}
              onAddProduct={hanldeAddProduct}
              onProductMoreInfo={handleProductMoreInfo}
            />
        }
      </Bar>
    </div>
  );
}

export default App