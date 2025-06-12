import {Wrapper ,ContainerLogin} from './Login.style';
import LeftLogin from './LeftLogin';
import RigthLogin from './RigthLogin'


import Button from '../../components/Button/Button';


export default function Login() {
  return (
    <Wrapper>

    <ContainerLogin>
      <LeftLogin />
      <RigthLogin />
    </ContainerLogin>
    </Wrapper>

  )
}