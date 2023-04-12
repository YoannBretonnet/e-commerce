import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  ${mobile({ padding: "10px 0px" })};
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ border: "0px" })};
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "80%" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 3rem;
  ${mobile({ fontSize: "1.5rem" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 2rem;
  ${mobile({ fontSize: "0.8rem", marginLeft: "1rem" })};
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <CustomLink to="/">
            <Logo>
              SANGHA.
            </Logo>
          </CustomLink>
        </Center>
        <Right>
        <CustomLink to="/register">
          <MenuItem>REGISTER</MenuItem>
        </CustomLink>
        <CustomLink to="/login">
          <MenuItem>LOG IN</MenuItem>
          </CustomLink>
          <CustomLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined></ShoppingCartOutlined>
              </Badge>
            </MenuItem>
          </CustomLink>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;