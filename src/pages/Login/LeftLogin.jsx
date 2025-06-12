import { LeftLoginStyle, LeftInner, Header, Welcome, Form, EyeButton, InputWrapper } from './LeftLogin.style';

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import logo from '../../assets/logos/logo.svg';


import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { useState } from 'react';

export default function LeftLogin() {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })


  const geraTokenFake = () => {
    const tokenFake = localStorage.setItem('Token', Math.random().toString(36).substring(2));
    return tokenFake;

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prevState) => ({
      ...prevState,
      [name]: value
    }));

  }

  const handleClickEye = (e) => {
    e.preventDefault();
    setEye(!eye);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.email || !formValue.password) {
      return toast.error('Digite um email e uma senha para entrar no sistema')
    }

    geraTokenFake();
    setEye(true);
    navigate('/eventos')
  }

  return (
    <LeftLoginStyle >
      <LeftInner>

        <Header>
          <img src={logo} alt="" />
        </Header>

        <Welcome>
          <h2>Bem-vindo de volta</h2>
          <p>Entre com sua conta para acessar o painel</p>
        </Welcome>

        <Form onSubmit={handleSubmit}>

          <label htmlFor="E-mail">E-mail</label>
          <Input
            placeholder={'seu email'}
            onChange={handleChange}
            name='email'
            value={formValue.email}
            type='email'
          />

          <label htmlFor="password">Senha</label>
          <InputWrapper>
            <Input
              type={eye ? 'password' : 'text'}
              name='password'
              placeholder={'sua senha'}
              value={formValue.password}
              onChange={handleChange}
            />

            <EyeButton
             onClick={handleClickEye}
             aria-label={eye ? 'Mostrar senha': 'Ocultar senha'} 
             type='button'
             >
              {eye ? <IoEyeOutline /> : <IoEyeOffOutline />}

            </EyeButton>
          </InputWrapper>

          <Button active children={'Entrar'} />
        </Form>

      </LeftInner>

    </LeftLoginStyle>
  )
}