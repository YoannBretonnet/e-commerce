// == Components
import { mobile } from "../responsive";

// == Style
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 4em;
  font-weight: 900;
  margin: 25px;
  ${mobile({ fontSize: "2rem", margin: "10px" })};
`;
const Description = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 25px;
  text-align: center;
  ${mobile({ fontSize: "1rem", marginBottom: "15px" })};
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ height: "30px" })};
`;
const Input = styled.input`
  border: none;
  width: 100%;
  padding-left: 1em;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
  }
`;

// == Composant
function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get some monthly updates about your favorite products
      </Description>
      <InputContainer>
        <Input placeholder="your email" type="email" />
        <Button
          onClick={() => {
            alert("Your email address has been added to our NL database.");
          }}
        >
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
