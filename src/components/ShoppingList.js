import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filter, setFilter] = useState('All')

  const selectedCategory = items.filter(item => {
    if (filter === 'All') {
      return true
    } else {
      return item.category === filter
    }
  })

  const itemList = selectedCategory.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  function handleChange(e) {
    setFilter(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
