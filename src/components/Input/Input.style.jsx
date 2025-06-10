import styled from 'styled-components';
import * as color from '../../styles/colors';

export const InputStyle = styled.input`
  background: ${color.backgroundInput};
  color: #657593;
  border: none;
  padding-left: 20px;
  height: 40px;
  border-radius: 100px;

  svg {
    background: red;
    color: red;
  }
 
`;
