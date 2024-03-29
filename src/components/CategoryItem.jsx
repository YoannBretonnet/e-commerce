// == Initialisation
import PropTypes from 'prop-types';
import React from 'react';

// == Components
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

// == Style
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0px 25px;
  height: 60vh;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-color: transparent;
  background-blend-mode: multiply;
  transition: all 0.5s ease;
  &:hover {
    background-color: grey;
  }
  ${mobile({ margin: "0px", marginBottom: "0.5rem" })};
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 20px 0px;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: darkgrey;
  color: white;
  border: none;
  cursor: pointer;
`;

// == Composant
function CategoryItem({ item }) {
  return (
    <Container img={item.img}>
      <Info>
        <Title>{item.title}</Title>
        <Link to={item.link}>
          <Button>SHOP NOW</Button>
          </Link>
      </Info>
    </Container>
  );
}

CategoryItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryItem;
