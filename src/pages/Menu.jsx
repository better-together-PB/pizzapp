import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PizzaList from "../components/PizzaList";
import styles from "./Menu.module.css";
import axios from "axios";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [sortedMenu, setSortedMenu] = useState([]);
  const { typeOfPizza } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pizzapp.adaptable.app/pizzas")
      .then(({ data }) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const unique = new Set(menu.map((pizza) => pizza.type));
    const sortedMenuNew = [];
    unique.forEach((pizzaType) => {
      const pizzaTypeArr = menu.filter((pizza) => pizza.type === pizzaType);
      sortedMenuNew.push([pizzaType, pizzaTypeArr]);
    });
    setSortedMenu(sortedMenuNew);

    if (typeOfPizza) {
      setSortedMenu((menu) =>
        menu.filter(([pizzaType]) => typeOfPizza === pizzaType.toLowerCase())
      );
    }
  }, [typeOfPizza, menu]);

  function handleDeletePizza(id) {
    axios
      .delete(`https://pizzapp.adaptable.app/pizzas/${id}`)
      .then(({ status }) => {
        if (status === 200) {
          setMenu((menu) => {
            const newMenu = [...menu];
            return newMenu.filter((pizza) => pizza.id !== id);
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.main}>
      <h1>
        Welcome to {typeOfPizza === "custom" ? "your" : "our"} {typeOfPizza}{" "}
        pizzas
      </h1>
      <ul className={styles.menu}>
        {sortedMenu.map(([pizzaType, pizzaList]) => (
          <li className={styles.menuSection} key={pizzaType}>
            <h2>{pizzaType}</h2>
            <PizzaList
              pizzaList={pizzaList}
              onDeletePizza={handleDeletePizza}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
