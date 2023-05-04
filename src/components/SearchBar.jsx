// == Initialisation
import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';

// == Components
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

// == Style
import styled, { css } from 'styled-components';

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ border: '0px' })};
`;
const Input = styled.input`
  ${mobile({ width: '80%' })};
`;
const Results = styled.div`
`;
const ResultsContainer = styled.ul`
  opacity: 0; 
  max-height: 0; 
  overflow: hidden; 
  transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out; 
  list-style: none; 
  padding-left: 0;

  ${props =>
    props.show &&
    css`
      opacity: 1;
      max-height: 200px; 
    `}
`;
const ResultsItem = styled.li`
  color: white;
  margin-left: 0px;
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`
// == Composant
function SearchBar() {
  const allProducts = useSelector(state => state.products.allProducts);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 

  // Fonction qui s'exécute à chaque changement de valeur du terme de recherche
  const handleSearch = () => {
    const filtered = allProducts.filter(product =>
      product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setSearchResults(searchTerm === '' ? [] : filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search product ..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* On affiche la liste de résultats de recherche uniquement si le terme de recherche n'est pas vide */}
      {searchTerm && (
        <Results>
          <ResultsContainer show={searchResults.length > 0}>
            {searchResults.map(product => (
              <ResultsItem key={product._id}>
                <CustomLink to={`/product/${product._id}`}>{product.title}</CustomLink>
              </ResultsItem>
            ))}
          </ResultsContainer>
        </Results>
      )}
    </SearchContainer>
  );
}

export default SearchBar;
