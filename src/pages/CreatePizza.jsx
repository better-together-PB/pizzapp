import axios from "axios";
import { useEffect, useState } from "react";

function CreatePizza() {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState([]);

  const [pizzaIngredients, setPizzaIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("https://pizzapp.adaptable.app/pizzas")
      .then(({ data }) => {
        const allIngredients = data.flatMap((pizza) => pizza.ingredients);
        setPizzaIngredients([...new Set(allIngredients)]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form style={{ padding: "30px" }}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <select name="ing" id="ing">
        <option value="">Choose ingredient</option>
        {pizzaIngredients.map((ing) => (
          <option key={ing} value={ing}>
            {ing}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CreatePizza;
