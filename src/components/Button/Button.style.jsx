// Button.style.js
import styled from 'styled-components';
import * as color from '../../styles/colors';

export const ButtonStyle = styled.button`
  background: ${(props) => (props.$active ? color.primaryColor : '#e0e0e0')};
  color: ${(props) => (props.$active ? 'white' : '#333')};
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  font-weight: 500;
  font-size: 13px;

  &:hover {
    background: ${(props) => (props.$active ? color.primaryColor : '#ccc')};
  }
`;
