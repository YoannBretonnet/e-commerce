import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hiden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  color: teal;
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
  padding: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 20px 0px;
  font-size: 40px;
  font-weight: 900;
`;
const Desc = styled.h2`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer
            img={
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
            }
          >
            <InfoContainer>
              <Title>SUMMER SALES</Title>
              <Desc>New beautiful arrivals at 50% off!</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer
            img={
              "https://images.unsplash.com/photo-1490945284861-4103094cc827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80 "
            }
          >
            <InfoContainer>
              <Title>SUMMER SALES</Title>
              <Desc>New beautiful arrivals at 50% off!</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </ImgContainer>
        </Slide>
          <Slide>
          <ImgContainer
            img={
              "https://images.pexels.com/photos/755023/pexels-photo-755023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          >
            <InfoContainer>
              <Title>SUMMER SALES</Title>
              <Desc>New beautiful arrivals at 50% off!</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
