import Pizza from "./Pizza";
import styles from "./PizzaList.module.css";

function PizzaList({ pizzaList, onDeletePizza }) {
  return (
    <ul className={styles.pizzaList}>
      {pizzaList.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} onDeletePizza={onDeletePizza} />
      ))}
    </ul>
  );
}

export default PizzaList;
