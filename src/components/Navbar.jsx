// == Components
import { mobile } from "../responsive";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userRedux";
import SearchBar from "./SearchBar";

// == Style
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

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

// == Composant
function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  }
  return (
    <Container>
      <Wrapper>
        <Left>
            <SearchBar/>
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
        {user ? 
          <MenuItem onClick={handleLogOut}>LOG OUT</MenuItem>
          :
          <CustomLink to="/login">
          <MenuItem>LOG IN</MenuItem>
          </CustomLink>
        }
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