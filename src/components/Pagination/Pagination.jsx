import Button from '../Button/Button';

import {UlStyle, Paginacao} from './Pagination.style'

export default function Pagination({ total, totalPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(total / totalPerPage);

 

const handleClickPrevius = (currentPage) => {
  if (currentPage > 0) {
    return setCurrentPage(currentPage -1)
  }


}
const handleClickNext = (currentPage, totalPages) => {
  if (currentPage < totalPages -1) {
    return setCurrentPage(currentPage +1)
  }
}
const handleClick = (index) => {
  return setCurrentPage(index );
 }
  return (
    <Paginacao>

      <UlStyle>
      <Button
      children='Anterior'
      onClick={() => handleClickPrevius(currentPage)}
      />
        {Array.from({length: totalPages}).map((_, index) => {
          return (
            <li key={index}>
            
            <Button
            active={currentPage === index }
            children={index +1}
            onClick={() => handleClick(index)}
            />
            </li>
          )
        })}
        <Button
        children='Próxima'
        active
        onClick={() => handleClickNext(currentPage, totalPages) }

        />
      </UlStyle>
    </Paginacao>
  )
}
