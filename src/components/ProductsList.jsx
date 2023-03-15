import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

function ProductsList() {
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
}

export default ProductsList;