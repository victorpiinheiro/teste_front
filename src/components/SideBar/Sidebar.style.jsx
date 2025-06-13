import styled from 'styled-components';
import * as color from '../../styles/colors';

export const SideBarContainer = styled.div`
  color: ${color.backgroundDefault};
  height: 100vh;
 box-sizing: border-box;
  width: 210px;
  border: 1px solid #A3A3A3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;

  @media (max-width: 800px) {
  width: 20%; 
  padding: 0 8px;
  border-top: none;
  }
  `

export const NavSection = styled.div`
  width: 100%;
  display: block;
  align-items: flex-start;
  justify-content: s;
  flex: 1;
  
@media (max-width: 600px) {
  img {
      width: 100%;
      max-width: 150px;
      height: auto;
      margin: 0 auto;
      display: block;
  }
}
`
export const LogoContainer = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (max-width: 800px) {
  img {
      width: 100%;
      max-width: 150px;
      height: auto;
      margin: 0 auto;
  }
}
 
`

export const NavList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  li a {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0 10px 10px;
    padding-right: 15px;
    text-decoration: none;
    color: #252525;
    font-size: 14px;
    margin: 0;
  }

  li a:hover {

    span, img, svg {
       color: #FFFFFF;
       filter: brightness(0) invert(1);
    }
    
    background: ${color.primaryColor};
    border-radius: 5px;
  }
  
    span {
    font-weight: 500;
    color: #252525;
    font-size: 14px;
  }

      @media (max-width: 600px) {
    ul {
      flex-direction: column;
      justify-content: space-around;
      gap: 5px;
    }

    li a {
      padding: 5px 8px;
      font-size: 12px;
      gap: 5px;
      flex-direction: column;
      align-items: center;
      background: none;
      border-radius: 0;
    }

    li a:hover {
      background: ${color.primaryColor};
      border-radius: 5px;
    }

    span {
      font-size: 13px;
      margin-top: 3px;
      color: #252525;
    }

    img, svg {
      height: 15px;
      width: 15px;
    }
  }
 
`
export const MenuTitle = styled.h6`
  
  line-height: 15px;
  margin: 0;
  padding: 0 10px;
  width: 100%;
  font-size: 9px;
  text-transform: uppercase;
  color: #A3A3A3;
  letter-spacing: 12%;
  font-weight: 800;

  @media (max-width: 600px) {
    width: 100%;
    
    text-align: center;
  }
 
`
export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  `

export const DadosUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
  padding-top: 38px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
 
  @media (max-width: 800px) {
    width: 100%;
    
    padding: 5px;
    margin: 0;
    flex-direction: column;
    text-align: center;

  }
  `
export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${color.primaryColor};

  img {
    width: 100%;
    height: 100%;
    padding: 1px;
    
  }
`;
export const UserInfo = styled.div`
 
    h4{
    font-weight: 500;
    margin: 0;
    font-size: 14px;
    color: #000000;
      }

p{
  font-weight: 400;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

 @media (max-width: 800px) {
  
    h4 {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }

  }
`;

export const EditProfileLink = styled.div`
 
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0 10px;
  margin: 0 10px;


   a {
    padding-left: 10px;
    display: flex;
    gap: 10px;
    text-decoration: none;
   }

   span {
    font-weight: 500;
    font-size: 14px;
    color: #252525;
   }

   &:hover {
    border-radius: 4px;
    cursor: pointer;
    background: ${color.primaryColor};
     span, img, svg {
       color: #FFFFFF;
       filter: brightness(0) invert(1);
    }
  }

     @media (max-width: 800px) {
      
      width: 100%;
      margin: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: center;

      a {
      flex-direction: column; 
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 8px 0;
        
      }
      span {
        font-size: 12px;
      }

  }
`;

export const LogoutButton = styled.button`
margin: 0 10px 30px 10px;
 display: flex;
 align-items: center;
 gap: 10px;
 padding: 10px 0 10px 10px;
 background: none;
  
  font-weight: 500;
  font-size: 14px;
  color: #252525;
  border: none;

  &:hover {
    cursor: pointer;
    background: ${color.primaryColor};
    border-radius: 5px;
    color: #FFFFFF;

     span, img, svg {
       color: #FFFFFF;
       filter: brightness(0) invert(1);
  }
    
  }

  @media (max-width: 800px) {
   
    text-align: center;
    flex-direction: column;
    align-items: center;
     width: 100%;
     padding: 5px ;
     margin: 0 0 30px 0;
    font-size: 12px;
  }
`;
