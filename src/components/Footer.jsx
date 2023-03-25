import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, Mail } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column" })};
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.span`
  flex: 1;
  font-size: 2rem;
  font-weight: 800;
  ${mobile({fontSize:"1.8rem" })};
`;
const Desc = styled.p`
  margin: 5px 0px;
  width: 100%;
  ${mobile({fontSize:"1rem" })};
`;
const SocialContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
  color: white;
  margin-right: 15px;
  ${mobile({width:"30px", height:"30px" })};
`;
const Center = styled.div`
  flex: 2;
  padding: 20px;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: 800;
  ${mobile({fontSize:"1.8rem" })};
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const Item = styled.li`
    width: 50%;
`;
const Contacts = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
`;
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 150px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>SANGHA.</Logo>
        <Desc>
          Sangha's mission is to empower women to embrace their unique style and
          express themselves with confidence. We offer an unique and trendy
          collection of clothing for women who love to express their
          individuality and free spirit through their style.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <Item>Home</Item>
          <Item>Cart</Item>
          <Item>Dresses</Item>
          <Item>Accessories</Item>
          <Item>My Account</Item>
          <Item>Order Tracking</Item>
          <Item>Wishlist</Item>
          <Item>Terms</Item>
        </List>
      </Center>
      <Contacts>
        <Title>Contacts</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>128 Park avenue</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+1 248 69 32</ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/>hello@sangha.com</ContactItem>
        <Payment src="https://www.vhv.rs/dpng/d/615-6155786_card-payments-logo-uk-png-transparent-png.png"/>
      </Contacts>
    </Container>
  );
}

export default Footer;
