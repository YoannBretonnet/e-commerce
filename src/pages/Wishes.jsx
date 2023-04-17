import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector, useDispatch} from "react-redux";
import { removeProduct, updateCartSubtotal } from "../redux/cartRedux";
import React, { useEffect } from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
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
`;
const TopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopTexts = styled.div``;
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

const ProductDetail = styled.span`
  display: flex;
  flex-direction: column;
  ${mobile({ marginLeft: "0.7rem" })};
`;

const ProductName = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
    &.clicked {
        background-color: #ff5e5e;
    }
`

function Wishes() {
  const cart = useSelector((state) => state.cart);
  const wishes = useSelector((state) => state.wishes);
  console.log(wishes.products);
  const dispatch = useDispatch();
 
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR WISH-LIST </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <TopText>Your Wishlist ({wishes.quantity})</TopText>
          </TopTexts>
          <TopButton>CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Products>
            {wishes.products.map((product) => (
              <Product>
                <Info>
                  <ProductImage src={product.img}></ProductImage>
                  <ProductDetail>
                    <ProductName>{product.title}</ProductName>
                    <PriceDetail>Price : {product.price} €</PriceDetail>
                  </ProductDetail>
                  <Icon>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                </Info>
              </Product>
            ))}
          </Products>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Wishes;
