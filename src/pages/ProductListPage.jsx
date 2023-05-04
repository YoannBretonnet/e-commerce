// == Initialisation
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from 'react';

// == Components
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import ProductsList from "../components/ProductsList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from '../responsive';

// == Style
import styled from "styled-components";

const Container = styled.div`
   flex-direction: column;
`
const Title = styled.h1`
   margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column" })};
`   
const Filter = styled.div`
   margin-left: 20px;
   ${mobile({margin:"1rem 1rem" })};
`
const FilterText = styled.span`
   font-size: 1.5rem;
   font-weight: 600;
   margin-right: 1rem;
   ${mobile({fontSize:"1rem" })};
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({padding:"0.3rem" })};
`
const Option = styled.option`
    padding: 5px;
`
const Button = styled.button`
    padding: 5px;
    ${mobile({width:"30%" })};
    margin: auto;
`

// == Composant
function ProductList() {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({});

    // Function to filter the products by size or color
    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    };

     // Function to sort the products by price
    const handleSort = (e) => {
      setSort(e.target.value);
    };

     // Function to clear the filters
    const clearFilters = () => {
        setFilters({});
      };

    return (
        <Container>
             <Annoucement/>
            <Navbar/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled selected>Colors</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                 <Select name="size" onChange={handleFilter}>
                        <Option disabled selected>
                            size
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                 </Select>
                </Filter>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={handleSort}>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                 </Select>
                </Filter>
            </FilterContainer>
            <ProductsList category={category} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default ProductList;