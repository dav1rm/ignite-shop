import React from 'react';
import { Container } from '@/styles/components/cart-button';
import { Bag } from "@phosphor-icons/react";
import { theme } from '@/styles';


interface ButtonProps {
  onClick: VoidFunction;
  size?: 'small' | 'medium';
  color?: 'dark' | 'light';
  counter?: number;
}

export default function CartButton({ onClick, counter, color = 'light', size = 'small' }: ButtonProps) {
  const iconSize = {
    small: '1.5rem',
    medium: '2rem',
  };

  const style = {
    dark: {
      icon: theme.colors.gray300,
    },
    light: {
      icon: theme.colors.white,
    },
  };

  return (
    <Container onClick={onClick} color={color} size={size}>
      {!!counter && (
        <div>
          <span>{counter}</span>
        </div>
      )}
      <Bag size={iconSize[size]} color={style[color].icon.value} />
    </Container>
  );
}