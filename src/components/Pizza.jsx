import { useState } from "react";
import { Link } from "react-router-dom";

function Pizza({ id, name, image, ingredients, price, type }) {
  const [pizzaSize, setPizzaSize] = useState("medium");
  const [pizzaQuantity, setPizzaQuantity] = useState(1);

  const pizzaPrice = { small: price - 1, medium: price, large: price + 1 };

  let ingredientsStr = "Traditional dough";
  for (const ing of ingredients) {
    ingredientsStr += `, ${ing}`;
  }
  return (
    <li>
      <img src={image} alt={`Delicious looking ${name}`} />
      <h3>{name}</h3>
      <p>{pizzaPrice[pizzaSize]} €</p>
      <p>{ingredientsStr}</p>
      <select
        name="size"
        id="size"
        value={pizzaSize}
        onChange={(e) => setPizzaSize(e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <select
        name="quantity"
        id="quantity"
        value={pizzaQuantity}
        onChange={(e) => setPizzaQuantity(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button>Add</button>
      {type === "Custom" && <Link to={`/editPizza/${id}`}>Edit</Link>}
    </li>
  );
}

export default Pizza;
