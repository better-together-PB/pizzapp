import { useEffect, useState } from "react";

import axios from "axios";
import PizzaList from "../components/PizzaList";
import { useParams } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  const { typeOfPizza } = useParams();

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

        if (typeOfPizza) {
          setMenu((menu) =>
            menu.filter(
              ([pizzaType]) => typeOfPizza === pizzaType.toLowerCase()
            )
          );
        }
      })
      .catch((err) => console.log(err));
  }, [typeOfPizza]);

  return (
    <div style={{ border: "1px solid black", padding: "30px" }}>
      <h1>Wellcome to the {typeOfPizza} pizzas menu</h1>
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
