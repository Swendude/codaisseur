import { useState } from "react";

const AboutPage = () => {
  const [getCounter, setCounter] = useState(1); // REACT DOES WATCH THIS!
  const addOne = () => {
    setCounter(getCounter + 1);
  };

  return (
    <div>
      <h1>About</h1>
      <p>Counter: {getCounter}</p>
      <button onClick={addOne}>+</button>
    </div>
  );
};

export default AboutPage;
