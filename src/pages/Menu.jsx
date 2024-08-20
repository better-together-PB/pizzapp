import { useEffect, useState } from "react";

import axios from "axios";
import PizzaList from "../components/PizzaList";
import { useParams } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [sortedMenu, setSortedMenu] = useState([]);
  const { typeOfPizza } = useParams();

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
    <div style={{ border: "1px solid black", padding: "60px" }}>
      <h1>Wellcome to the {typeOfPizza} pizzas menu</h1>
      <ul>
        {sortedMenu.map(([pizzaType, pizzaList]) => (
          <li key={pizzaType}>
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
