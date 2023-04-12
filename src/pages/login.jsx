import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${mobile({ height: "70vh" })};
`;
const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "70vh" })};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 30%;
  height: 35vh; 
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  ${mobile({ width: "60%", height: "50vh" })};
`;
const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  padding: 0.4rem;
  margin: 0.3rem 0;
`;
const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginContainer = styled.div`
   display: flex;
  flex-direction: column;
   height: 8rem;
   margin: auto;
`;

const Button = styled.button`
  width: 6rem;
  height: 3rem;
  margin: auto;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 0.5rem; 1rem;
`;

const CustomProgress = styled(CircularProgress)`
  width: 25%;
  height: 4rem;
  margin: auto;
  ${mobile({ width: "40%" })};
`;

const Error = styled.span`
  margin: auto;
  padding: 0rem; 1rem;
  color: red;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user)
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Form>
          <Title>SIGN IN</Title>
          <InputContainer>
            <Input
              placeholder="account name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <LoginContainer>
          {isFetching ? <CustomProgress color="grey" /> : <Button onClick={handleClick}>LOGIN</Button>}
          {error && <Error>Something went wrong</Error>}
          </LoginContainer>
          <Link>YOU DON'T REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Login;
