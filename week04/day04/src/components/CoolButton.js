import styled from "styled-components";

const MyButton = styled.a`
  background-color: ${(props) =>
    props.variant === "secondary" ? "yellow" : "red"};
  height: 50px;
  margin: 5px;
  padding: 10px;
  border: 2px solid blue;
  min-width: 100px;
`;

const CoolButton = ({ variant }) => {
  return (
    <MyButton className="Swen" variant={variant} href="/">
      Click me!
    </MyButton>
  );
};

export default CoolButton;
