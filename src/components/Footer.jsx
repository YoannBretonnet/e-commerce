import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, Mail } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex: 1;
`;
const Desc = styled.p`
  margin: 5px 0px;
  width: 100%;
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
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 2em;
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
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
 
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
      <Right>
        <Title>Contacts</Title>
        <ContactItem><Room/>128 Park avenue</ContactItem>
        <ContactItem><Phone/>+1 248 69 32</ContactItem>
        <ContactItem><Mail/>hello@sangha.com</ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;