import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreatePizza.module.css";

function CreatePizza() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const basePrice = 7.99;
  const ingredientsPrice = ingredients.length;
  const finalPrice = basePrice + ingredientsPrice;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pizzapp-backend.onrender.com/pizzas")
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

  function handleCreateNewPizza(e) {
    e.preventDefault();
    const type = "Custom";
    const pizzaImage = image
      ? image
      : "https://bestellen.dominos.de/ManagedAssets/DE/product/PFUN/DE_PFUN_en_hero_12763.png?v1940897205";

    axios
      .post("https://pizzapp-backend.onrender.com/pizzas", {
        name,
        image: pizzaImage,
        ingredients,
        price: finalPrice,
        type,
      })
      .then(({ status }) => {
        if (status === 201) {
          navigate("/menu/custom");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleRemoveIngredient(e, index) {
    e.preventDefault();
    setIngredients((ings) => {
      const newIngredients = [...ings];
      newIngredients.splice(index, 1);
      return newIngredients;
    });
  }

  return (
    <>
      <form className={styles.main} onSubmit={(e) => handleCreateNewPizza(e)}>
        <h2>Create your own pizza</h2>
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
                <div key={index} className={styles.optionContainer}>
                  <select
                    key={index}
                    name={`ingredient-${index}`}
                    id={`ingredient-${index}`}
                    value={ingredient}
                    onChange={(e) =>
                      handleChangeSelectedIngredient(e.target.value, index)
                    }
                  >
                    {pizzaIngredients.map((ing) => (
                      <option key={ing} value={ing}>
                        {ing}
                      </option>
                    ))}
                  </select>
                  <button onClick={(e) => handleRemoveIngredient(e, index)}>
                    X
                  </button>
                </div>
              ))}
            <select
              name={`ingredient-default`}
              id={`ingredient-default`}
              value=""
              onChange={(e) => {
                setIngredients((ing) => [...ing, e.target.value]);
              }}
              style={{ marginTop: "10px", width: "100%", marginBottom: "40px" }}
            >
              <option value="">Choose ingredient</option>
              {pizzaIngredients.map((ing) => (
                <option key={ing} value={ing}>
                  {ing}
                </option>
              ))}
            </select>
            <p className={styles.price}>
              Price: <strong>{finalPrice}</strong> €
            </p>
          </div>
          <button className={styles.submitBtn}>Create pizza</button>
        </div>
      </form>
    </>
  );
}

export default CreatePizza;
