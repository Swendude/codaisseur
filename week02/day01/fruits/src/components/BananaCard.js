const BananaCard = (props) => {
  console.log(props.title);

  return (
    <div className="fruit-card">
      <h3>{props.title}</h3>
      <img className="fruit-img" src={props.img} alt="fruit" />
      <p>Price: {props.sale ? props.price / 2 : props.price} euro</p>
      <p>{props.descr}</p>
      <p>Super nice!</p>
      {props.sale ? <h4>SALE!</h4> : <></>}
      <button>Buy!</button>
    </div>
  );
};

export default BananaCard;
