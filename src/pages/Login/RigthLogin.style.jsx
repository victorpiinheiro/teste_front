import styled from 'styled-components';

import * as color from '../../styles/colors'
export const RigthLoginStyle = styled.div`
border-radius: 20px;
background: ${color.primaryColor};
width: 50%;
position: relative;


img {
  position: absolute;
  left: -40px;
  bottom: 0;
}

 @media (max-width: 800px) {
    width: 100%;
    height: 200px; 
    border-radius: 20px 20px;
    position: relative;
    overflow: hidden;
    

    img {
      height: 100%;
      position: absolute;
      left: 50%; 
      bottom: 0;
      transform: translateX(-50%);
    }

    
  }
 
`