import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Pizza.module.css";

function Pizza({ id, name, image, ingredients, price, type, onDeletePizza }) {
  const [pizzaSize, setPizzaSize] = useState("medium");
  const [pizzaQuantity, setPizzaQuantity] = useState(1);

  const pizzaPrice = { small: price - 1, medium: price, large: price + 1 };

  let ingredientsStr = "Traditional dough";
  for (const ing of ingredients) {
    ingredientsStr += `, ${ing}`;
  }
  return (
    <li className={styles.list}>
      <img
        className={styles.img}
        src={image}
        alt={`Delicious looking ${name}`}
      />
      <div className={styles.pizzaInfo}>
        <h3 className={styles.pizzaName}>{name}</h3>
        <p className={styles.pizzaPrice}>{pizzaPrice[pizzaSize]} €</p>
        <p className={styles.pizzaIngredients}>{ingredientsStr}</p>

        <div>
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
        </div>

        {type === "Custom" && (
          <button onClick={() => onDeletePizza(id)}>Delete</button>
        )}
      </div>
    </li>
  );
}

export default Pizza;
