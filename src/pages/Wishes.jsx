import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import React from "react";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

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

const ProductDetail = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  justify-content: center;
  ${mobile({ marginLeft: "0.7rem" })};
`;

const CustomedLink = styled(Link)`
  text-decoration: none
`;

const ProductName = styled.span``;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

function Wishes() {
  const cart = useSelector((state) => state.cart);
  const wishes = useSelector((state) => state.wishes);
  console.log(wishes.products);

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR WISH-LIST </Title>
        <Top>
        <CustomedLink to={`/`}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          </CustomedLink>
          <TopTexts>
            <TopText>Your Wishlist ({wishes.quantity})</TopText>
            <customedLink to={`/wishes`}>
              <TopText>Shopping Bag ({cart.quantity})</TopText>
            </customedLink>
          </TopTexts>
          <CustomedLink to={`/cart`}>
          <TopButton>CHECK OUT NOW</TopButton>
          </CustomedLink>
        </Top>
        <Bottom>
          <Products>
            {wishes.products.map((product) => (
              <Product>
                <Info>
                  <ProductImage src={product.img}></ProductImage>
                  <ProductDetail>
                    <ProductName>{product.title}</ProductName>
              
                    <Icon>
                      <CustomedLink to={`/product/${product._id}`}>
                        <SearchOutlined style={{ color: "grey" }} />
                      </CustomedLink>
                    </Icon>
                  </ProductDetail>
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
