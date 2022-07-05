import React from 'react'
import Product from "./Product";
import productList from "./ProductList";
import Error from './Error';

function ProductView(props) {
    // console.log(props.id);
    let prod = productList.find((product) => {
        return product.id === props.id;
    })
    // console.log(prod);

    if (prod) {
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
    )} else {
        return (
            <Error />
        )
    }
}

export default ProductView;