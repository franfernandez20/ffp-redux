import React from 'react'
import ProductCard from './ProductCard';

class ProductsCards extends React.Component {
  
//   constructor(props) {
//     super(props)
//   }

  componentDidMount() {
    // this.fetchProduct();
  }

  hanldeAddProduct = (id) => {
    console.log('ProductsCards Adding a product, id : ' + id)
  } 
  handleMoreInfoProduct = (id) => {
    console.log('ProductsCards showing a product, id : ' + id)
  } 

  fetchProduct = () => {
    let { products } = this.props;
    console.log('Productos--' + products);
  };

  render() {
    const { products } = this.props;
    // console.log(products);
    return (
      <div>
        <p>ProductsCards</p>
        {
          // products.map(element => <ProductCard key={element._id} product={element} handleAdd={this.hanldeAddProduct} handleMoreInfo={this.handleMoreInfoProduct}/>)
        }
      </div>
    );
  }
}

export default ProductsCards;