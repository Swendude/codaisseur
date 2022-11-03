const Counter = ({ getter, setter }) => {
  return (
    <div>
      <p>{getter}</p>
      <button onClick={() => setter(getter + 1)}>+</button>
      <button onClick={() => setter(getter - 1)}>-</button>
    </div>
  );
};

export default Counter;
