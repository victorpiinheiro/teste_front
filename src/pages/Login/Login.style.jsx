import styled from 'styled-components';

import * as color from '../../styles/colors'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center;     
  background: ${color.backgroundDefault};

`;


export const ContainerLogin = styled.div`

  background: ${color.backgroundDefault};
  width: 756.5px;
  height: 498px;
  border-radius: 20px;
  padding: 10px;
  background: white;
  box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  gap: 42px;

    @media (max-width: 800px) {
    width: 90%;
    height: auto;
    flex-direction: column;
    gap: 10px;
    padding: 10px 10px;
    margin: 20px 0;
    box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);

  }
 
`











