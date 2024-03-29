// == Initialisation
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';

// == Components
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import {mobile} from '../responsive';
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";

// == Style
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
`
// WRAPPER 
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: 80vh;
  ${mobile({flexDirection:"column", height:"100vh", padding: "25px 50px" })};
`
const ImgContainer = styled.div`
    flex: 1;
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 80vh;
    ${mobile({padding: "0px" })};
`
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({flex: "0" })};
`
const Title = styled.h1`
  font-weight:200;
  margin: 0 2rem 2rem;
  ${mobile({margin:"0rem 1rem 1rem 0rem"})};
`
const Desc = styled.p`
  margin: 2rem;
  ${mobile({margin:"0rem 1rem 1rem 0rem"})};
`
const Price = styled.span`
    margin: 2rem ;
    font-size: 1.8rem;
    ${mobile({margin:"0"})};
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
    ${mobile({margin:"0rem 1rem 0rem 0rem"})};
`
const FilterTitle = styled.span`
    font-size: 1.2rem;
    font-weight: 200;
    margin: 0rem 0rem 0rem 2rem;
    ${mobile({margin:"0rem 0rem 0rem 0rem;"})};
`
const FilterSize = styled.select`
    margin-left: 0.5rem;
    padding: 0.3rem;
`
const FilterSizeOption = styled.option`
`
// AMOUNT AND PURCHASE
const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({justifyContent:"space-around"})};
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  ${mobile({margin:"0rem 0rem 0rem 0rem"})};
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
  margin: 0 0.5rem
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

// == Composant
function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    // Function to get product from its id
    const getProduct = async () => {
      try{
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      }catch (error){
        console.log(error);
      }
    };
    getProduct()
  }, [id]);

  // Function to change quantity of items
    const handleQuantity = (choice) => {
      if(choice === "dec") {
        quantity >1 && setQuantity(quantity-1);
      } else {
        setQuantity(quantity+1);
      }
    };

    // Function to add product in cart
    const handleClick = () => {
      dispatch(addProduct({...product, quantity, size}))
    };

    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer img={product.img}/>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                    {product.desc}
                    </Desc>
                    <Price>{product.price} €</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((size)=> (
                              <FilterSizeOption key={size}>{size}</FilterSizeOption>
                            ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    );
}

export default Product;