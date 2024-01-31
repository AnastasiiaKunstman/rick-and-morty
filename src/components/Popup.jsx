/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.div`
  width: 17rem;
  position: relative;
  background-color: white;
  color: #000;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 1;

  img {
    width: 100%;
  }
`;

const Popup = ({ character, onClose }) => {

    useEffect(() => {
        const handleEscKey = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleEscKey);
    
        return () => {
          document.removeEventListener('keydown', handleEscKey);
        };
      }, [onClose]);

    return (
        <Overlay onClick={(event) => event.target === event.currentTarget && onClose()}>
            <PopupContainer>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Location: {character.location.name}</p>
            </PopupContainer>
        </Overlay>
    );
};

export default Popup;