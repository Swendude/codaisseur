import styled from "styled-components";

import CoolButton from "./components/CoolButton";

const MyGreeting = styled.p`
  font-size: ${(props) => (props.big ? "x-large" : "small")};
  color: red;
  text-decoration: underline;
`;

function App() {
  return (
    <div className="App">
      <MyGreeting>Hello, world!</MyGreeting>
      <MyGreeting big={true}>Hello, world!</MyGreeting>
      <CoolButton />
      <CoolButton variant="secondary" />
    </div>
  );
}

export default App;
