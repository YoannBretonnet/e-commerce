import styled from "styled-components";

const Container = styled.div`
   flex-direction: column;
`

function Product() {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;