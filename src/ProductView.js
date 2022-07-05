import React from 'react'
import Product from "./Product";
import productList from "./ProductList";

function ProductView(props) {
    // console.log(props.id);
    let prod = productList.find((product) => {
        return product.id === props.id;
    })
    // console.log(prod);

    return (
        <div className='product'>
        <Product
            id={prod.id}
            title={prod.title}
            price={prod.price}
            rating={prod.rating}
            image={prod.image}
            />
        </div>
    )
}

export default ProductView;