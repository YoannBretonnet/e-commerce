import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100v;
  height: 100vh;
`
const Wrapper = styled.div`
   height:100%;
   background: linear-gradient(
    rgba(255,255,255,0.7),
    rgba(255,255,255,0.3)
   ),
   url("https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg") center;
   background-size: cover; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const Form = styled.form`
  display: flex;
   flex-direction: column;
   gap: 0.5rem;
   width: 40%;
   padding: 2rem;
   background-color:  rgba(255,255,255,0.7);

`
const Title = styled.h1`
    margin-top : 0;
    text-align: center;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 0.2rem;
  padding: 0.4rem;
`
const Link = styled.a`
`
const Button = styled.button`
  width: 25%;
  margin: auto;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 0.5rem; 1rem;
`

function Login() {
    return (
        <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
            <Form>
              <Title>SIGN IN</Title>
                <InputContainer>
                <Input placeholder= "account name"/>
                <Input placeholder= "password"/>
                </InputContainer>
                <Button>LOGIN</Button>
                <Link>YOU DON'T REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
    );
}

export default Login;