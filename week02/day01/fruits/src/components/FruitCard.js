import FruitDescription from "./FruitDescription";

const FruitCard = (props) => {
  console.log(props);
  return (
    <div className="fruit-card">
      <h3>{props.title}</h3>
      {props.sale ? <p>Sale!</p> : <p>Not on sale</p>}
      <p>price: {props.sale ? props.price / 2 : props.price}€</p>
    </div>
  );
};

export default FruitCard;
