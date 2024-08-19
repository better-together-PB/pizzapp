import axios from "axios";
import { useEffect, useState } from "react";

function CreatePizza() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([0]);
  console.log(pizzaIngredients);
  useEffect(() => {
    axios
      .get("https://pizzapp.adaptable.app/pizzas")
      .then(({ data }) => {
        const allIngredients = data.flatMap((pizza) => pizza.ingredients);
        setPizzaIngredients([...new Set(allIngredients)]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleIngredientSelect = (index, e) => {
    const ingredient = e.target.value;
    if (ingredient) {
      if (index === selectedIngredients.length - 1) {
        setSelectedIngredients([
          ...selectedIngredients,
          selectedIngredients.length,
        ]);
      }
    }
  };

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
      <div>
        <label htmlFor="ingredients">Ingredients: </label>
        {selectedIngredients.map((_, index) => (
          <select
            name={`ingredient-${index}`}
            id={`ingredient-${index}`}
            onChange={(e) => handleIngredientSelect(index, e)}
          >
            <option value="">Choose ingredient</option>
            {pizzaIngredients.map((ing) => (
              <option key={ing} value={ing}>
                {ing}
              </option>
            ))}
          </select>
        ))}
      </div>
    </form>
  );
}

export default CreatePizza;
