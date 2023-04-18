import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

// Styled component pour le container de la barre de recherche
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ border: '0px' })};
`;

// Styled component pour l'input de la barre de recherche
const Input = styled.input`
  ${mobile({ width: '80%' })};
`;

// Styled component pour les résultats de recherche
const Results = styled.div`
`;

// Styled component pour le container de la liste de résultats de recherche
const ResultsContainer = styled.ul`
  opacity: 0; // Initialisation à 0 pour cacher la liste
  max-height: 0; // Initialisation à 0 pour cacher la liste
  overflow: hidden; // Permet de cacher les éléments qui dépassent de la liste
  transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out; // Animation pour une transition en douceur
  list-style: none; 
  padding-left: 0;

  // Si la propriété show est vraie, on affiche la liste avec une animation
  ${props =>
    props.show &&
    css`
      opacity: 1;
      max-height: 200px; // Hauteur maximale de la liste
    `}
`;

// Styled component pour les éléments de la liste de résultats de recherche
const ResultsItem = styled.li`
  color: white;
  margin-left: 0px;
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`

function SearchBar() {
  const allProducts = useSelector(state => state.products.allProducts);
  const [searchTerm, setSearchTerm] = useState(''); // State pour stocker la valeur du terme de recherche
  const [searchResults, setSearchResults] = useState([]); // State pour stocker les résultats de recherche

  // Fonction qui s'exécute à chaque changement de valeur du terme de recherche
  const handleSearch = () => {
    const filtered = allProducts.filter(product =>
      product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setSearchResults(searchTerm === '' ? [] : filtered);
  };

  // useEffect pour exécuter la fonction handleSearch à chaque changement de valeur du terme de recherche
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
