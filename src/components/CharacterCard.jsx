/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 17rem;
  height: 22rem;
  border-radius: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0,0 , 0.2);
  box-shadow: #9cea2e 0px 0px 30px -20px;
  border: 1px solid rgba(156,234,46,1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(105%);
  }

  img {
    width: 100%;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: #9cea2e;
    padding: 5px;
    background: linear-gradient(0deg, rgba(156,234,46,1) 20%, rgba(103,150,37,1) 90%, rgba(67,99,21,1) 100%); 
    box-shadow: #9cea2e 0px 12px 50px -17px;
    transition: transform 0.1s;

    &:hover {
      transform: scale(105%);
    }
  }

  h3 {
    color: #fff;
  }
`;

const CharacterCard = ({ image, name, status, gender, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <CardContainer onClick={handleClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
        </CardContainer>
    );
};

export default CharacterCard;