import styled from "styled-components";

// Styled Component
const Heading = styled.h1`
  color: red;
  text-align: center;
  border: 1px solid green;
  border-radius: 5px;
  margin: 10px;
`;

const Btn = styled.button`
  color: red;
  width: 100px;
  height: 30px;
`;

function Styled() {
  return (
    <div>
      <h1>Styled Components</h1>
      <Heading>Hello Styled Components</Heading>
      <Heading>Hello Styled React</Heading>
      <Heading>Hello Styled Css</Heading>
      <Btn>Login</Btn>
    </div>
  );
}

export default Styled;
