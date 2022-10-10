import AwesomeButton from "./AwesomeButton";

const FruitCard = (props) => {
  console.log(props);
  return (
    <div className="fruit-card">
      <h3>{props.name}</h3>
      <img className="fruit-img" alt={props.name} src={props.img} />
      <AwesomeButton name={props.name} />
    </div>
  );
};
export default FruitCard;
