import Pizza from "./Pizza";

function PizzaList({ pizzaList }) {
  return (
    <div>
      <ul>
        {pizzaList.map((pizza) => (
          <Pizza key={pizza.id} {...pizza} />
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;
