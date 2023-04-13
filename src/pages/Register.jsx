import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100v;
  height: 100vh;
  ${mobile({ height: "90vh" })};
`;
const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg")
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  ${mobile({ width: "65%" })};
`;
const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${mobile({ flexDirection: "column" })};
`;
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 0.2rem;
  padding: 0.4rem;
  ${mobile({ width: "90%" })};
`;
const Agreement = styled.span`
  margin: 1rem 0;
`;
const Button = styled.button`
  width: 25%;
  margin: auto;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 0.5rem; 1rem;
  ${mobile({ width: "45%" })};
`;

function handleSubmit(event) {
  event.preventDefault(); 
  
  const accountName = document.querySelector('input[name="accountName"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Appelle l'API pour créer un compte
  fetch('/api/create-account', {
    method: 'POST',
    body: JSON.stringify({ accountName, email, password }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      // Traite la réponse de l'API ici
    })
    .catch(error => {
      console.error(error);
    });
}

function Register() {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Form>
          <Title>CREATE AN ACCOUNT</Title>
          <InputContainer>
            <Input name="accountName" placeholder="account name" />
            <Input name="email" placeholder="email" />
            <Input name="password" placeholder="password" />
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button href="#" onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Register;
