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
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 0.2rem;
  padding: 0.4rem;
`
const Agreement = styled.span`
  margin: 1rem 0;
`
const Button = styled.button`
  width: 25%;
  margin: auto;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 0.5rem; 1rem;
`

function Register() {
    return (
        <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
            
            <Form>
              <Title>CREATE AN ACCOUNT</Title>
                <InputContainer>
                <Input placeholder= "first name"/>
                <Input placeholder= "last name"/>
                <Input placeholder= "account name"/>
                <Input placeholder= "email"/>
                <Input placeholder= "password"/>
                <Input placeholder= "confirm password"/>
                </InputContainer>
                <Agreement> 
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
        <Footer/>
    </Container>
    );
}

export default Register;