import "./App.css";
import styled, { css } from "styled-components";
import { useState } from "react";

const RoundBox = styled.div`
  border-radius: 10px;
  border: solid;
  padding: 0.5rem;
  color: white;
  background: blue;
  width: fit-content;
  ${(props) =>
    props.disco &&
    css`
      background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
    `}
`;

function App() {
  const [disco, setDisco] = useState(false)
  return (
    <div className="App">
      <RoundBox disco={disco}>Ah, the empty div</RoundBox>
      <button onClick={() => setDisco(!disco)}>Disco!</button>
    </div>
  );
}

export default App;
