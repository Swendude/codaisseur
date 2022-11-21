import styled from "styled-components";
import "./app.css";

const RedText = styled.p`
  color: red;
  background: yellow;
  font-size: ${(props) => (props.size === "small" ? "1rem" : "2rem")};
  border: 4px solid green;
`;

const BoldRedText = styled(RedText)`
  font-weight: bolder;
`;

const AppButton = styled.button`
  width: 10rem;
  aspect-ratio: 16/9;
  border: 2px solid red;
  border-radius: 5px;
  color: ${(props) => (props.role === "secondary" ? "white" : "red")};
  background-color: ${(props) =>
    props.role === "secondary" ? "red" : "white"};
  font-weight: bold;
`;

function App() {
  const dataset = [100, 250, 350];
  const labels = [1990, 2000, 2010];
  return (
    <div className="App">
      <svg width={500} height={500} viewBox={"0 0 500 -500"}>
        {dataset.map((datapoint, i) => {
          return (
            <circle cx={i * 100 + 50} cy={datapoint} r={50} fill={"red"} />
          );
        })}
      </svg>
    </div>
  );
}

export default App;
