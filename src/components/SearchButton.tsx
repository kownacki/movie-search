import styled from 'styled-components';

const SearchButton = styled.button`
  color: white;
  background: var(--primary-color);
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  transition: background-color ease 0.3s;
  
  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    background: var(--light-grey);
    cursor: auto;
  }
`;

export default SearchButton;
