import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SingUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Email" />
        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SingUp;
