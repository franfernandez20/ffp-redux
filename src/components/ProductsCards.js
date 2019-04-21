import React from 'react'
import ProductCard from './ProductCard';


const ProductsCards = (props) => {

  const { products, onAddProduct, onProductMoreInfo } = props;
  return (
    <div>
      <p>ProductsCards</p>
      {
        products.map(element => 
          <ProductCard
            key={element._id}
            product={element}
            onAdd={onAddProduct}
            onMoreInfo={onProductMoreInfo}
          />
        )
      }
    </div>
  );
}

export default ProductsCards;