import { useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";  
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search } from "@material-ui/icons";

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

function SearchBar() {
  const allProducts = useSelector((state) => state.products.allProducts);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
      const filtered = allProducts.filter((product) =>
        product.title.trim().toLowerCase().includes(searchTerm)
      );
      setSearchResults(searchTerm === "" ? [] : filtered);
  };

  useEffect(() => {
      handleSearch();
  }, [searchTerm]);


  return (
    <SearchContainer>
      <Input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {searchResults.map(product => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </SearchContainer>
    
  );
}

export default SearchBar;