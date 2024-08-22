import Pizza from "./Pizza";
import styles from "./PizzaList.module.css";

function PizzaList({ pizzaList, onDeletePizza, onAddPizzaToCart }) {
  return (
    <ul className={styles.pizzaList}>
      {pizzaList.map((pizza) => (
        <Pizza
          key={pizza.id}
          {...pizza}
          onDeletePizza={onDeletePizza}
          onAddPizzaToCart={onAddPizzaToCart}
        />
      ))}
    </ul>
  );
}

export default PizzaList;
