import React from 'react';
import { Container } from '@/styles/components/button';

interface ButtonProps {
  onClick: VoidFunction;
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({ onClick, disabled, loading, title }: ButtonProps) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {loading? 'Carregando...' : title}
    </Container>
  );
}
