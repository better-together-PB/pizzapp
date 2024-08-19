function Pizza({ name, image, ingredients, price }) {
  let ingredientsStr = "Traditional dough";
  for (const ing of ingredients) {
    ingredientsStr += `, ${ing}`;
  }
  console.log(ingredientsStr);
  return (
    <li>
      <img src={image} alt={`Delicious looking ${name}`} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{ingredientsStr}</p>
    </li>
  );
}

export default Pizza;
