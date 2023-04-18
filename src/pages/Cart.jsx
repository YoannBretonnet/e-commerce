import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector, useDispatch} from "react-redux";
import { removeProduct, updateCartSubtotal, changeProductQuantity } from "../redux/cartRedux";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div``;
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
  ${mobile({ flexDirection: "column" })};
`;
const TopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
`;
const TopTexts = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;
const TopText = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  ${mobile({ flexDirection: "column" })};
`;

const Products = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Product = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column", marginBottom: "1rem" })};
`;
const Info = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 1rem;
  ${mobile({ marginBottom: "0rem" })};
`;
const ProductImage = styled.img`
  width: 8vw;
  ${mobile({ width: "23vw" })};
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.8rem;
  ${mobile({ marginLeft: "0.7rem" })};
`;

const ProductName = styled.span`
font-size: 1.3rem;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span``;

const ProductSpecs = styled.div`
display: flex;
flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
margin: 0 0.2rem;
`;
const TotalPrice = styled.div``;

const Summary = styled.div`
  flex: 1;
  height-max: 50vh;
`;
const SummaryBox = styled.div`
  width: 60%;
  border: 0.1rem solid lightgray;
  border-radius: 10px;
  padding: 1.3rem;
  margin-top: 0;
  ${mobile({ width: "90%", marginTop:"1rem" })};
`;
const SummaryTitle = styled.span`
  font-size: 2rem;
`;
const SummaryItem = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "900"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const Button = styled.button`
    margin-top: 1rem;
    width:100%;
    padding: 0.5rem; 3rem ;
    background-color: black;
    color: white;
    font-weight: 600;
`;
const RemoveProduct = styled.button`
    width: 6rem;
    margin-top: 1rem;
    padding: 0.rem; rem ;
    background-color: white;
    color: grey;
    border: 0.5px grey solid;
    font-weight: 600;
    cursor: pointer;
`;

const CustomedLink = styled(Link)`
  text-decoration: none
`;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const wishes = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  useEffect(() => {
    const subtotal = cart.products.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    dispatch(updateCartSubtotal(subtotal));
  }, [cart.products, dispatch]);


  const handleChangeQuantity = (id, choice) => {
    dispatch(changeProductQuantity({id, choice}));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
        <CustomedLink to={`/`}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          </CustomedLink>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <Link to={`/wishes`}>
            <TopText>Your Wishlist ({wishes.quantity})</TopText>
            </Link>
          </TopTexts>
          <TopButton>CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Products>
            {cart.products.map((product) => (
              <Product>
                <Info>
                  <ProductImage src={product.img}></ProductImage>
                  <ProductDetail>
                  <ProductSpecs>
                    <ProductName>{product.title}</ProductName>
                    <ProductSize>Size : {product.size}</ProductSize>
                    <PriceDetail>Price : {product.price} €</PriceDetail>
                    </ProductSpecs>
                    <ProductAmountContainer>
                    Quantity : 
                  <Remove onClick={()=>handleChangeQuantity(product._id, "dec")}/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Add onClick={()=>handleChangeQuantity(product._id,"inc")}/>
                 
                </ProductAmountContainer>
                <TotalPrice>TOTAL : ${product.price * product.quantity}€</TotalPrice>
                <RemoveProduct onClick={() => handleRemove(product._id)}>REMOVE</RemoveProduct>
                  </ProductDetail>
                </Info>
              </Product>
            ))}
          </Products>
          <Summary>
          <SummaryBox>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.subtotal} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount (5%)</SummaryItemText>
              <SummaryItemPrice>{cart.subtotal*0.05} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.subtotal*0.95} €</SummaryItemPrice>
            </SummaryItem>
              <Button>CHECKOUT NOW</Button>
              </SummaryBox>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
