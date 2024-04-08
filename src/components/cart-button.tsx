import React, { MouseEvent } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Bag } from '@phosphor-icons/react';
import { Container } from '@/styles/components/cart-button';
import { theme } from '@/styles';

interface CartButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'medium';
  color?: 'dark' | 'light';
  showCounter?: boolean;
}

export default function CartButton({
  onClick,
  showCounter,
  color = 'light',
  size = 'small',
}: CartButtonProps) {
  const { cartCount } = useShoppingCart();

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
      {showCounter && !!cartCount && (
        <div>
          <span>{cartCount}</span>
        </div>
      )}
      <Bag size={iconSize[size]} color={style[color].icon.value} />
    </Container>
  );
}
