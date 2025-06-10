
import { InputStyle } from './Input.style'


export default function Input({ id, color, onClick, placeholder, type='text', value, onChange, name }) {
  return (
    <InputStyle 
    name={name}
    id={id}
    color={color} 
    onClick={onClick}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    
    />
      
    
  )
}