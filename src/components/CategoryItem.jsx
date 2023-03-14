import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 25px;
    height: 60vh;
    position: relative;
    background-image: url(${(props) => props.img});
    background-size: cover; 
    background-color: transparent;
    background-blend-mode: multiply;
    transition: all 0.5s ease;
  &:hover {
    background-color: grey;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  }
`;
const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0; 
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
  margin: 20px 0px;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: darkgrey;
  color: white;
  border: none;
  cursor: pointer;
`;

function CategoryItem({item}) {
    return (
        <Container img={item.img}>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
}

export default CategoryItem;