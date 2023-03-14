import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
`
const Circle = styled.div `
    width: 200px;
    heigth: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    z-index: 3;
`
const Image = styled.img `
    height: 20vh;
    width: 15vh;
`
const Info = styled.div `

`
const Icon = styled.div `

`

function Product({item}) {

    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
}

export default Product;