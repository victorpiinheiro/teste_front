import { ButtonStyle } from './Button.style'

export default function Button({ children, color, onClick,  }) {
  return (
    <ButtonStyle color={color} onClick={onClick} >
      
      {children}
    </ButtonStyle>
  )
}