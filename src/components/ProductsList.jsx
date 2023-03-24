import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import {mobile} from '../responsive';

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

function ProductsList() {
    return (
        <>
         <Title>POPULAR PRODUCTS</Title>
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        </>
    );
}

export default ProductsList;