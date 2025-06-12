import styled from 'styled-components';

import * as color from '../../styles/colors'

export const LeftLoginStyle = styled.div`
width: 50%;
display: flex;
justify-content: center;
padding: 40px 20px;
  
@media (max-width: 800px) {
    width: 100%;
    padding: 20px 0;
  }
  
`
export const LeftInner = styled.div`
   width: 100%;

   @media (max-width: 800px) {
    max-width: 100%;
  }
  
`;
export const Header = styled.div`
 display: flex;
 gap: 35px;
  

 
  
`
export const Welcome = styled.div`
  h2 {
    color: ${color.primaryColor};
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 0;
  }

  p {
        color: #2a4d8e;
        font-size: 13px;
        font-weight: 400;
        margin: 0 auto 35px auto
  }
  

  
`
export const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: left;

  input {
    width: 100%;
    margin-bottom: 20px ;
    transition: all 0.3s ease;
    outline: none;
    

    &:focus {
      border: 1px solid ${color.primaryColor};
      box-shadow: none;
    }
    
  }

  label {
    margin-bottom: 5px;
    color: ${color.primaryColor};
    font-size: 13px;
    font-weight: 600;
  }

   button {
    width: 100%;
      }
  `

export const InputWrapper = styled.div`

position: relative;
width: 100%;
height: 40px;
margin-bottom: 20px;


`
export const EyeButton = styled.button`
display: flex;
align-items: end;
justify-content: center;
background: blue;
width: fit-content !important;
position: absolute;
top:0;
right: 20px;
padding: 10px;
background: transparent;
border: none;
padding: 10px 0;;
color: ${color.primaryColor};
cursor: pointer;

svg {
  font-size: 20px;

}

`
