import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
      <Link className="product__title" to={`/product/${id}`}>
        <p className="product__title product__prop">{title}</p>
      </Link>
        <p className="product__price product__prop">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating product__prop">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__prop"/>

      <button onClick={addToBasket} className="product__prop">Add to Basket</button>
    </div>
  );
}

export default Product;
