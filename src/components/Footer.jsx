import styled from 'styled-components';
import telegram from '../image/telegram.svg';

const FooterContainer = styled.footer`
  text-align: center;
  margin-bottom: 20px;
  color: #9cea2e;
  display: flex;
  gap: 30px;
  align-items: center;

  a {
    background: url(${telegram}) no-repeat;
    background-size: cover;
    width: 34px;
    height: 34px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <a target='_blank' rel='noreferrer' href='https://t.me/anastasiiakunstman' />
            <p>Anastasiia Kunstman © {new Date().getFullYear()}</p>
        </FooterContainer>
    )
};

export default Footer;