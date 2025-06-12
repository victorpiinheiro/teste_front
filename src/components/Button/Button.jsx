import { ButtonStyle } from './Button.style';

export default function Button({ children, onClick, active }) {
  return (
    <ButtonStyle onClick={onClick} $active={active}>
      {children}
    </ButtonStyle>
  );
}
