import React from "react";
import products from "./products.json";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slices/Slice";

const Product = () => {
  const dispatch = useDispatch ()
  
  return (
    <>
    <Cart/>
      <div style={{ display: "flex ", flexWrap: "wrap", gap: "5px" }}>
        {products.map( (product ) => {
          return (
            <div
              className="child-div"
              style={{ width: "250px", alignItems: "center" }}
            >
              <h3 key={product.id}>{product.name}</h3>

              <img src={product.image} alt="img" />
              <p>{product.description}</p>
              <p>price :{product.price}</p>
              <button
                style={{ display: "block", backgroundColor: "greenyellow" }}
                onClick={ e =>dispatch(addItem({name : product.name , price : product.price}))}
              >
                {" "}
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
