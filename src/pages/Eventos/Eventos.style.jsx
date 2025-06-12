import styled from 'styled-components';

import * as color from '../../styles/colors'

export const ContainerEventos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
  margin: 0 30px;
  box-sizing: border-box;
  
  h2 {
  color: ${color.primaryColor};
  }

  @media (max-width: 500px) {
    
    margin-left: 5px;
    width: 280px;
   margin: 20px;
  }

  @media (min-width: 500px) and (max-width: 760px) {
  
    width: 400px;
}
 


    `
export const ContentEventos = styled.div`
  width:100%;
  
  border: 1px solid rgba(9, 66, 143, 0.17);
  background: ${color.backgroundDefault};
  border-radius: 5px;
  overflow: hidden;

  h1{
  margin: 0;
  border: 1px solid black;
  }

  


`
export const HeaderContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  padding: 12px 20px  ;
  margin-right: 0 20px;

button {
  padding: 0 10px;
  text-align: center;
  gap: 10px;
  margin: 0;
  height: 35px;
  font-weight: bold;
  font-size: 13px;
}

@media (max-width: 600px) {
  flex-direction: column;
  
    input {
    width: 100%;
    height: 35px !important;
    font-size: 12px;
  }

  button {
    font-size: 12px;
    width: 40%;
    height: 35px;
    align-self: flex-end;
    
  }
}

`
export const IconWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  max-width: 400px;
  position: relative;

input {
  background: #f6f6f6;
  color: rgba(0,0,0, 0.2);
  border: none;
  font-weight: 500;
  padding-left: 45px; 
  height: 40px;
  border-radius: 100px;
  width: 100%;
  outline: none;
  transition: all 0.3s ease; 
  }

svg {
  position: absolute;
  left: 15px;
  color: rgba(0,0,0, 0.2);
  font-size: 1.2rem;
  z-index: 1;
}
  `

export const EventosInfo = styled.div`
  margin:0 20px 20px 20px;
   max-height: 55vh;
   overflow-y: auto;
`
export const Table = styled.table`
  width: auto;
  min-width: 100%;
  text-align: left;
  border-collapse: collapse;
  table-layout: auto;
`
export const Thead = styled.thead`
  text-align: left;
`
export const Tr = styled.tr`
  padding-right: 20px;
  text-align: left;
  align-items: center;

  td:nth-child(3) {
    svg {
      margin-right: 3px;
      text-align: end;
    }
  }
`
export const Th = styled.th`
  font-weight: 500;
  font-size: 13px;
  padding: 12px 0;

  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(204, 98, 55, 0.5) ;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

&:last-child {
    width: 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    min-width: 100px;
    font-size: 12px;
  }
`
export const TBody = styled.tbody`
  padding-right: 20px;
`
export const Td = styled.td`
  font-weight: 400px;
  font-size: 12px;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #657593;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
padding: 11.5px 0;
  &:last-child {
    width: 40px;
    color: ${color.primaryColor};
    font-size: 17px;
    text-align: center;
    cursor: pointer;
     }

       @media (max-width: 768px) {
    padding: 10px 12px;
    min-width: 100px;
    font-size: 11px;
  }

`
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






