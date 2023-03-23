import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from '../responsive.jsx'

const Container = styled.div`
    background-color: black;
    height: 60px;
    ${mobile({height:"50px" })};
`
const Wrapper = styled.div `
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    ${mobile({padding:"10px 0px" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div `
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1 `
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 2rem;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                    <Input/>
                      <Search style={{color:"gray", fontSize:"16px"}}/>  
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SANGHA.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </MenuItem>
                </Right>
            
            </Wrapper>
        </Container>
    );
}

export default Navbar;