import { useState } from "react";

const Box = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className={toggle ? "my-box-red" : "my-box-green"}>My box</div>
      <div>{toggle ? "true" : "false"}</div>
      <button onClick={() => setToggle(!toggle)}>change color</button>
    </div>
  );
};

export default Box;
