import React from 'react';

// == Components
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
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
    display: flex;
    padding: 0px 20px;
    ${mobile({padding: "0px", flexDirection:"column" })};
`;

// == Composant
function Categories() {
    return (
        <>
        <Title>OUR CATEGORIES</Title>
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
        </>
    );
}

export default Categories;