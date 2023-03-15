import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: 50vh;
`
const ImgContainer = styled.div`
    flex: 1;
    background-image: url(${(props) => props.img});
`
const InfoContainer = styled.div`
  flex: 1
`
const Title = styled.h1`
  
`
const Desc = styled.p`
  
`
const Price = styled.span`
  
`

function Product() {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer img="https://img.ltwebstatic.com/images3_pi/2021/05/06/16202934214f58745d0df8a9e0ce3f7b88ad9759c4_thumbnail_600x.webp"/>
                <InfoContainer>
                    <Title>Summer Dress</Title>
                    <Desc>
                        Mollit eiusmod consectetur non exercitation laboris irure aute. Ipsum voluptate velit esse consectetur officia nisi aute id duis anim. Est do Lorem et sit excepteur do sit enim quis.
                    </Desc>
                    <Price>€ 50</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;