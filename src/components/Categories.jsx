import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from '../responsive';

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