import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
 
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TopButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TopTexts = styled.div`
 
`;
const TopText = styled.div`
 
`;
const Bottom = styled.div`
 display:flex;
 justify-content: space-around;
 align-items: center;
 margin-top: 2rem;
`;

const Products = styled.div`
flex: 1;
 display: flex;
 flex-direction: column;
 align-items: left;

`;

const Product = styled.div`
 display: flex;

`;
const Info = styled.div`
 display: flex;
 justify-content: left;
 margin-bottom: 1rem;
`;
const ProductImage = styled.img`
 width: 8vw;
`;


const ProductDetail = styled.span`
  display: flex;
 flex-direction: column;
`;

const ProductName = styled.span`

`;

const ProductID = styled.span`

`;
const ProductColor = styled.span`
 
`;
const ProductSize = styled.span`

`;

const PriceDetail = styled.span`

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`

`;
const TotalPrice = styled.div`

`;

const Summary = styled.div`
    flex: 1;
    border: 0.1rem solid lightgray;
    border-radius: 10px;
    padding: 1.3rem;
    height-max: 50vh;
`;
const SummaryTitle = styled.span`
    font-size: 2rem;
`;
const SummaryItem = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "900"};
`;
const SummaryItemText = styled.div`

`;
const SummaryItemPrice = styled.div`

`;
const Button = styled.button`
    margin-top: 1rem;
    width:100%;
    padding: 0.5rem; 3rem ;
    background-color: black;
    color: white;
    font-weight: 600;
`;

function Cart() {
    return (
        <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
              <Title>YOUR CART</Title>
              <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton>CHECK OUT NOW</TopButton>
              </Top>
              <Bottom>
              <Products>
                <Product>
                    <Info>
                        <ProductImage src="https://cdn.laredoute.com/products/1/b/a/1bac95b89512d53b431b4dcf7f6f59a0.jpg"></ProductImage>
                        <ProductDetail>
                            <ProductName>SUMMER DRESS</ProductName>
                            <ProductID>9765463249</ProductID>
                            <ProductColor></ProductColor>
                            <ProductSize></ProductSize>
                            <PriceDetail>Price : 30€</PriceDetail>
                        </ProductDetail>
                    </Info>
                    <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                            <TotalPrice>60€</TotalPrice>
                    </ProductAmountContainer>
                </Product>
                <Product>
                    <Info>
                        <ProductImage src="https://cdn.laredoute.com/products/1/b/a/1bac95b89512d53b431b4dcf7f6f59a0.jpg"></ProductImage>
                        <ProductDetail>
                            <ProductName>SUMMER DRESS</ProductName>
                            <ProductID>9765463249</ProductID>
                            <ProductColor></ProductColor>
                            <ProductSize></ProductSize>
                            <PriceDetail>Price : 30€</PriceDetail>
                            
                        </ProductDetail>
                    </Info>
                    <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                            <TotalPrice>60€</TotalPrice>
                    </ProductAmountContainer>
                </Product>
                </Products>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>€60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>€-5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>€55</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>  
              </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
    );
}

export default Cart;