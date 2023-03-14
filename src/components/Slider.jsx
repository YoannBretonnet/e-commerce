import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
`

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: teal;
   color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   left: ${props => props.direction === "left" && "10px"};
   right: ${props => props.direction === "right" && "10px"};
   cursor: pointer;
   opacity: 0.5;
`

const Wrapper = styled.div`
   height: 100%;
   display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
   display: flex;
   align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
   flex:1;
`
const Image = styled.img`
    object-fit: fill;
`
const InfoContainer = styled.div`
   flex:1;
   padding: 50px;
`

const Title = styled.h1`
    margin: 50px 0px;
    font-size: 40px;
    font-weight: 900;
`
const Desc = styled.h2`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
    return (
        <Container> 
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide> 
                <ImgContainer>
                    <Image src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALES</Title>
                    <Desc>New beautiful arrivals at 50% off!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide> 
                <ImgContainer>
                    <Image src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALES</Title>
                    <Desc>New beautiful arrivals at 50% off!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
}

export default Slider;