import React, { useState } from "react";

function Item({ name, category }) {

  const [status, setStatus] = useState(true)

  function handleClick() {
    setStatus(!status)
  }

  return (
    <li className={status ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
