import styled from "styled-components";
import Product from "./Product";
import {mobile} from '../responsive';
import { useEffect, useState } from "react";
import axios from "axios";

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    padding: 20px;
    ${mobile({padding: "0px" })};
`;

const Container = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

function ProductsList({category,filters, sort}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async ()  => {
            try{
                const res = await axios.get( 
                category 
                ? `http://localhost:5000/api/products?category=${category}` 
                : `http://localhost:5000/api/products`);
                setProducts(res.data);
            }catch(error){

            }
        };
        getProducts();
    },[category]);

    useEffect(()=> {
        category && setFilteredProducts(
        products.filter(item=> 
        Object.entries(filters).every(([key, value])=>
        item[key].includes(value))));
    },[products,category,filters]);

    useEffect(() => {
        if(sort==="asc"){
            setFilteredProducts((prev) =>
            [...prev].sort((a,b)=> a.price - b.price));
        } else {
            setFilteredProducts((prev) =>
            [...prev].sort((a,b)=> b.price - a.price));
        }
    },[sort]);

    return (
        <>
         <Title>POPULAR PRODUCTS</Title>
        <Container>
            {category
               ? filteredProducts.map(item => (<Product item={item} key={item._id} />))
               : products.slice(3, 11).map(item => (<Product item={item} key={item._id} />))
            }
        </Container>
        </>
    );
}

export default ProductsList;