import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditPizza.module.css";

function EditPizza() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pizzapp.adaptable.app/pizzas/${id}`)
      .then(({ data }) => {
        setName(data.name);
        setImage(data.image);
        setIngredients(data.ingredients);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pizzapp.adaptable.app/pizzas")
      .then(({ data }) => {
        const allIngredients = data.flatMap((pizza) => pizza.ingredients);
        setPizzaIngredients([...new Set(allIngredients)]);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleChangeSelectedIngredient(value, index) {
    setIngredients((ingredients) => {
      const newIngredients = [...ingredients];
      newIngredients[index] = value;
      return newIngredients;
    });
  }

  function handleEditPizza(e) {
    e.preventDefault();
    const type = "Custom";
    const pizzaImage = image
      ? image
      : "https://bestellen.dominos.de/ManagedAssets/DE/product/PFUN/DE_PFUN_en_hero_12763.png?v1940897205";
    const price = 12.49;

    axios
      .put(`https://pizzapp.adaptable.app/pizzas/${id}`, {
        name,
        image: pizzaImage,
        ingredients,
        price,
        type,
      })
      .then(({ status }) => {
        if (status === 200) {
          navigate("/menu/custom");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className={styles.main} onSubmit={(e) => handleEditPizza(e)}>
      <h2>Edit the pizza for your taste</h2>
      <div className={styles.inputsContainer}>
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
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <select
                key={index}
                name={`ingredient-${index}`}
                id={`ingredient-${index}`}
                value={ingredient}
                onChange={(e) =>
                  handleChangeSelectedIngredient(e.target.value, index)
                }
              >
                <option value="">Choose ingredient</option>
                {pizzaIngredients.map((ing) => (
                  <option key={ing} value={ing}>
                    {ing}
                  </option>
                ))}
              </select>
            ))}
          <select
            name={`ingredient-default`}
            id={`ingredient-default`}
            value=""
            onChange={(e) => {
              setIngredients((ing) => [...ing, e.target.value]);
            }}
          >
            <option value="">Choose ingredient</option>
            {pizzaIngredients.map((ing) => (
              <option key={ing} value={ing}>
                {ing}
              </option>
            ))}
          </select>
        </div>
        <button>Edit pizza</button>
      </div>
    </form>
  );
}

export default EditPizza;
