/* eslint-disable react/prop-types */
import styled from 'styled-components';

const FilteresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  input {
    border-radius: 5px;
  }

  select {
    width: 165px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Filters = ({ filters, setFilters }) => {
  
  return (
    <FilteresContainer>
      <div>
        <label>Name: </label>
        <input type="text" value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} />
      </div>

      <div>
        <label>Status: </label>
        <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label>Species: </label>
        <select value={filters.species} onChange={(e) => setFilters({ ...filters, species: e.target.value })}>
          <option value="">All</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="humanoid">Humanoid</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robot</option>
          <option value="mythological creature">Mythological Creature</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="disease">Disease</option>
        </select>
      </div>

      <div>
        <label>Gender: </label>
        <select value={filters.gender} onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </FilteresContainer>
  );
};

export default Filters;