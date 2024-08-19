import { useEffect, useState } from "react";

import axios from "axios";
import PizzaList from "../components/PizzaList";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("https://pizzapp.adaptable.app/pizzas")
      .then(({ data }) => {
        const unique = new Set(data.map((pizza) => pizza.type));
        const sortedMenu = [];
        unique.forEach((pizzaType) => {
          const pizzaTypeArr = data.filter((pizza) => pizza.type === pizzaType);
          sortedMenu.push([pizzaType, pizzaTypeArr]);
        });
        setMenu(sortedMenu);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>MENU!!!!</h1>
      <ul>
        {menu.map(([pizzaType, pizzaList]) => (
          <li key={pizzaType}>
            <h2>{pizzaType}</h2>
            <PizzaList pizzaList={pizzaList} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
