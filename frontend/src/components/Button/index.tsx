import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<ButtonPros> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Input;
