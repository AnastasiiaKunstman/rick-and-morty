/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Back from '../image/back.svg';
import Next from '../image/next.svg';
import First from '../image/first.svg';
import Last from '../image/last.svg';

const PageButton = styled.button.attrs((props) => ({
  active: props.active ? 'true' : undefined,
}))`
  border: 0;
  background-color: hsl(85, 57%, 55%);
  color: #000;
  width: 4rem;
  height: 2rem;
  border-radius: 0.2rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background-color: white;
    color: hsl(85, 57%, 55%);
  `}

  &:hover {
    filter: brightness(0.8);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      opacity: 0.9;
      transform: scale(120%);
    }
  }
`;

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const visiblePages = 5;
    const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    return totalPagesArray.slice(startPage - 1, endPage).map((page) => (
      <PageButton key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
        {page}
      </PageButton>
    ));
  };

  return (
    <PageContainer>
      <img src={First} onClick={() => onPageChange(1)} disabled={currentPage === 1} />

      <img src={Back} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />

      {renderPageButtons()}

      <img src={Next} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />

      <img src={Last} onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
    </PageContainer>
  );
};

export default PageNavigation;
