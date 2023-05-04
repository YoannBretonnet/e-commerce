// == Initialisation
import { useDispatch } from "react-redux";
import { useState, React } from "react";
import PropTypes from "prop-types";

// == Components
import { Link } from 'react-router-dom';
import { addProduct as addWishProduct} from "../redux/wishesRedux";

// == Style
import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    margin: 0px 25px 25px 25px;
    min-width: 280px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.img});
    background-size: cover; 
    position: relative;
`
const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover {
        opacity: 1;
    }
`
const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
    &.clicked {
        background-color: #ff5e5e;
    }
`
// == Composant
function Product({product}) {
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);
    const handleWishClick = () => {
        dispatch(addWishProduct({...product}));
        setClicked(true)
    };

    return (
        <Container img={product.img}>
            <Info>
                <Icon>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon onClick={handleWishClick} className={clicked ? "clicked" : ""}>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
      img: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  };
  
export default Product;