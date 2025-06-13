import styled from 'styled-components';

export const Paginacao = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  padding-right: 20px;
  padding-bottom: 10px;
  height: 74px;
  width: 100%;
  box-sizing: border-box;
`

export const UlStyle = styled.ul `
  display: flex;
  list-style: none;
  gap: 10px; 
  box-sizing: border-box;

button {
  height: 35px;
  width: 100%;
  padding: 10px;
}

  
 @media (max-width: 600px)  {

  margin: 0;
  padding: 0;
  width: 100%;
  padding: 10px;

  button {
    padding: 2.5px 5px;
    height: 25px;
    font-size: 12px;
  
  }
  
 
}
`
