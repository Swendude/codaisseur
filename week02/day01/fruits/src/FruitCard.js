function FruitCard(props) {
  console.log(props);
  return (
    <div className="fruitCard">
      <h1>{`The best ${props.name}`}</h1>
      <img className="fruitImage" alt="a banana" src={props.imgSrc} />
      <p>{props.description}</p>
    </div>
  );
}

export default FruitCard;
