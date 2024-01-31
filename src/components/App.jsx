import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from './CharacterCard';
import Popup from './Popup';
import Header from './Header';
import Filters from './Filters';
import PageNavigation from './PageNavigation';
import Footer from './Footer';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

      if (filters.name) {
        url += `&name=${filters.name.toLowerCase()}`;
      }

      if (filters.species) {
        url += `&species=${filters.species.toLowerCase()}`;
      }

      if (filters.status) {
        url += `&status=${filters.status.toLowerCase()}`;
      }

      if (filters.gender) {
        url += `&gender=${filters.gender.toLowerCase()}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setCharacters(data.results);
      setFilteredCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters.name, filters.species, filters.status, filters.gender]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Filters setFilters={setFilters} filters={filters} />
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <main>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && (
          <>
            {filteredCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                gender={character.gender}
                onClick={() => handleCharacterClick(character)}
              />
            ))}
          </>
        )}

      </main>

      {isPopupOpen && selectedCharacter && <Popup character={selectedCharacter} onClose={closePopup} />}

      <Footer />
    </>
  );
};

export default App;