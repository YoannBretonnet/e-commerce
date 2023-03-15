import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
   height: 30vh;
   background-color: #fcf5f5;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Title = styled.div`
    font-size: 4em;
    font-weight: 900;
    margin: 25px;
`
const Description = styled.div`
    font-size: 1.5em;
    font-weight: 300;
    margin-bottom: 25px;
  
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    width: 100%;
    padding-left: 1em;
`
const Button = styled.button`
   border: none;
   background-color: teal;
   color: white;
   cursor: pointer;
   transition: all 0.5s ease;
   &:hover{
    background-color: black;
   }
`

function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get some monthly updates about your favorite products</Description>
            <InputContainer>
                <Input placeholder="your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;