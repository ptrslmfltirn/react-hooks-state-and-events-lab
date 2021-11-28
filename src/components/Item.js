import React,{ useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState (false)
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartStatus ? 'in-cart' : ''} onClick={()=>{setCartStatus((cartStatus => !cartStatus))}}>{cartStatus ?"Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
