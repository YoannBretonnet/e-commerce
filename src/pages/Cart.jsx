import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive';
import {useSelector} from "react-redux";
import {StripeCheckout} from "react-stripe-checkout";

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
 ${mobile({flexDirection:"column" })};
`;

const Products = styled.div`
flex: 1;
 display: flex;
 flex-direction: column;
 align-items: left;
`;

const Product = styled.div`
 display: flex;
 ${mobile({flexDirection:"column", marginBottom:"1rem" })}; 
`;
const Info = styled.div`
 display: flex;
 justify-content: left;
 margin-bottom: 1rem;
 ${mobile({marginBottom:"0rem" })}; 
`;
const ProductImage = styled.img`
 width: 8vw;
 ${mobile({width:"23vw" })}; 
`;


const ProductDetail = styled.span`
  display: flex;
 flex-direction: column;
 ${mobile({marginLeft:"0.7rem" })}; 
`;

const ProductName = styled.span`

`;

const ProductID = styled.span`

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
    const cart = useSelector(state=>state.cart)
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
              {cart.products.map(product=> (
                <Product>
                    <Info>
                        <ProductImage src={product.img}></ProductImage>
                        <ProductDetail>
                            <ProductName>{product.title}</ProductName>
                            <ProductID>{product.id}</ProductID>
                            <ProductSize>{product.size}</ProductSize>
                            <PriceDetail>Price : {product.price} €</PriceDetail>
                        </ProductDetail>
                    </Info>
                    <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>
                            <TotalPrice>${product.price* product.quantity}€</TotalPrice>
                    </ProductAmountContainer>
                </Product>
              ))
              }
                
                </Products>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>€-5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>${cart.total-5}</SummaryItemPrice>
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