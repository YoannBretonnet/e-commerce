// == Initialisation
import { useEffect, useState, React } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

// == Components
import Product from "./Product";
import {mobile} from '../responsive';

// == Style
import styled from "styled-components";

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
// == Composant
function ProductsList({category,filters,sort}) {
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
               ? filteredProducts.map(product => (<Product product={product} key={product._id} />))
               : products.slice(3, 11).map(product => (<Product product={product} key={product._id} />))
            }
        </Container>
        </>
    );
}

ProductsList.propTypes = {
    category: PropTypes.string,
    filters: PropTypes.shape({
      color: PropTypes.string,
      size: PropTypes.string
    }),
    sort: PropTypes.oneOf(['asc', 'desc'])
  };
  
export default ProductsList;