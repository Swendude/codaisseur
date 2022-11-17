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
  return (
    <div className="App">
      <h1>Hello Styled Components</h1>
      <RedText>Today we are learning about styling our components</RedText>
      <BoldRedText>
        Today we are learning about styling our components
      </BoldRedText>
      <AppButton role="secondary">Click me!</AppButton>
      <AppButton>Click me!</AppButton>
    </div>
  );
}

export default App;
