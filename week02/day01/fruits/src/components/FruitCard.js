import FruitDescription from "./FruitDescription";

const FruitCard = (props) => {
  console.log(props);
  return (
    <div className="fruit-card">
      <h3>{props.title}</h3>
      <p>price: {props.price}€</p>
      <FruitDescription text={props.description} />
    </div>
  );
};

export default FruitCard;
