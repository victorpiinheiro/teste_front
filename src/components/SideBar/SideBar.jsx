import {
  SideBarContainer,
  NavSection,
  UserSection,
  LogoContainer,
  NavList,
  MenuTitle,
  DadosUser,
  AvatarContainer,
  UserInfo, EditProfileLink, LogoutButton

} from './Sidebar.style';

import { MdOutlineCalendarMonth } from "react-icons/md";
import logo from '../../assets/logos/logo.svg';
import DashboardIcon from '../../assets/icons/Dashboard.svg'
import Equipes from '../../assets/icons/Equipes.svg'
import Inscricoes from '../../assets/icons/Inscricoes.svg';
import userIcon from '../../assets/icons/user.svg';
import logout from '../../assets/icons/logout.svg';

import userImage from '../../assets/images/user-image.svg';

import Eventos from '../../assets/icons/Eventos.jsx'
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const navigate = useNavigate()

  const logoutSistema = () => {
    localStorage.removeItem('Token');
    navigate('/login')
  }
  return (
    <SideBarContainer>
      <NavSection>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>

        <NavList>
          <MenuTitle>menu</MenuTitle>
          <ul>
            <li>
              <a href="/dashboard">
                <img src={DashboardIcon} alt="Dashboard" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/eventos">
                <Eventos size={16} />
                <span>Eventos</span>
              </a>
            </li>
            <li>
              <a href="/equipes">
                <img src={Equipes} alt="Equipes" />
                <span>Equipes</span>
              </a>
            </li>
            <li>
              <a href="/inscricoes">
                <img src={Inscricoes} alt="Inscrições" />
                <span>Inscrições</span>
              </a>
            </li>
          </ul>
        </NavList>
      </NavSection>

      <UserSection>

        <DadosUser>
          <AvatarContainer>
            <img src={userImage} alt="" />
          </AvatarContainer>

          <UserInfo>
            <h4>Kaique Steck</h4>
            <p>Admistrador</p>
          </UserInfo>
        </DadosUser>

        <EditProfileLink>
          <a href="">
            <img src={userIcon} alt="User icon" />
            <span>Alterar dados</span>
          </a>

        </EditProfileLink>

        <LogoutButton onClick={logoutSistema}>
          <img src={logout} alt="" />
          Sair
        </LogoutButton>
      </UserSection>
    </SideBarContainer>
  )
}