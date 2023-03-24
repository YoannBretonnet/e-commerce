import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import {mobile} from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({height:"50vh" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.5s;
  z-index: 3;
  &:hover {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({height:"50%" })};
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover; 
  height: 100%;
  flex: 1;
  position: relative;
`;
const InfoContainer = styled.div`
  flex: 1;
  width: 25%;
  height: fit-content;
  padding: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255,255,255,0.6);
  ${mobile({height:"50%", width:"40%", position:"static", padding: "30px" })};
`;

const Title = styled.h1`
  margin: 20px 0px;
  font-size: 3rem;
  font-weight: 900;
  ${mobile({fontSize:"1.5rem", margin: "0px 0px" })};
`;
const Desc = styled.h2`
  margin: 30px 0px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 3px;
  ${mobile({fontSize:"1rem" })};
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white ;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: transparent;
    font-weight: 800;
    };
  ${mobile({fontSize:"0.8rem", padding: "0.2rem" })};
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex     -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer img={item.img}>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
