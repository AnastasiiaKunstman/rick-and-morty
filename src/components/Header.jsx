import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-top: 20px;
  color: #9cea2e;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Rick and Morty Characters</h1>
        </HeaderContainer>
    );
};

export default Header;