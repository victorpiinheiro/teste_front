import {Button, Container, Description, Subtitle, Title} from './Page404.style'
export default function Page404() {
  return (
    <Container>
      <Title>404!</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <Description>A página que você está procurando ainda não existe ou foi movida.</Description>
      <Button to="/">Voltar para o início</Button>
    </Container>
  );
}