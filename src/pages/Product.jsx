import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
  
`

// WRAPPER WITH IMAGE AND DESCRIPTION
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: 80vh;
`
const ImgContainer = styled.div`
    flex: 1;
    background-image: url(${(props) => props.img});
    background-size: cover; 
    height: 80vh;
`
const InfoContainer = styled.div`
  flex: 1
`
const Title = styled.h1`
  font-weight:200;
  margin: 0 2rem 2rem 
`
const Desc = styled.p`
  margin: 2rem 
`
const Price = styled.span`
    margin: 2rem ;
    font-size: 1.8rem;
  
`

// COLOR AND SIZE FILTERS
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 1rem 0rem;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 1.2rem;
    font-weight: 200;
    margin-left: 2rem;
`
const FilterColor = styled.div`
    margin-left: 1rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 0.5rem;
    padding: 0.3rem;
`
const FilterSizeOption = styled.option`
   
`
// AMOUNT AND PURCHASE
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-weight: 800;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  &:hover{
  background-color: #f8f4f4;
}
`

function Product() {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer img="https://img.ltwebstatic.com/images3_pi/2021/05/06/16202934214f58745d0df8a9e0ce3f7b88ad9759c4_thumbnail_600x.webp"/>
                <InfoContainer>
                    <Title>Summer Dress</Title>
                    <Desc>
                        Mollit eiusmod consectetur non exercitation laboris irure aute. Ipsum voluptate velit esse consectetur officia nisi aute id duis anim. Est do Lorem et sit excepteur do sit enim quis.
                    </Desc>
                    <Price>€ 50</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;