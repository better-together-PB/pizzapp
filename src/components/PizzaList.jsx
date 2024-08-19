import Pizza from "./Pizza";

function PizzaList({ pizzaList, onDeletePizza }) {
  return (
    <div>
      <ul>
        {pizzaList.map((pizza) => (
          <Pizza key={pizza.id} {...pizza} onDeletePizza={onDeletePizza} />
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;
