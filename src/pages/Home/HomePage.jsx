import { Container, Content } from './HomePage.style';
import SideBar from '../../components/SideBar/Sidebar';

import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container>
      <SideBar />
      <Content>
        <h3>Bem vindo de volta <span>Kaique Steck</span></h3>

        <Outlet />
      </Content>
    </Container>
  );
}
