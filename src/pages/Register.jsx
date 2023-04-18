import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

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

function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };
  
  const isAuthenticated = useSelector(state=>state.register.isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate ("/login");
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>CREATE AN ACCOUNT</Title>
          <InputContainer>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="User name"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the privacy policy  .
          </Agreement>
          <Button type="submit">REGISTER</Button>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Register;
