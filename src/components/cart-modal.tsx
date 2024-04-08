'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { X } from '@phosphor-icons/react';
import { useShoppingCart } from 'use-shopping-cart';

import {
  Container,
  ImageContainer,
  ProductItem,
} from '@/styles/components/cart-modal';
import { theme } from '@/styles';
import Button from './button';

interface CartModalProps {}

export default function CartModal({}: CartModalProps) {
  const { formattedTotalPrice, cartCount, cartDetails, removeItem, clearCart } =
    useShoppingCart();
  const [isCreatingCheckouSession, setIsCreatingCheckoutSession] =
    useState(false);

  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();
  const quantityLabel = cartCount === 1 ? '1 item' : `${cartCount} itens`;
  const cartItems = cartDetails ? Object.values(cartDetails) : [];

  if (!modal) {
    return;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const line_items = cartItems.map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      }));
      const response = await axios.post('/api/checkout', { line_items });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
      clearCart();
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      console.log('Falha ao redirecionar ao checkout!', error);
    }
  }

  function renderCartContent() {
    const cartItems = cartDetails ? Object.values(cartDetails) : [];

    if (cartItems.length === 0) {
      return <span>Sacola vazia</span>;
    }

    return (
      <>
        {cartItems.map((item) => {
          return (
            <ProductItem key={item.id}>
              <ImageContainer>
                <Image src={item.imageUrl} width={94} height={94} alt='' />
              </ImageContainer>

              <div>
                <span>{item.name}</span>

                <strong>
                  {item.quantity} x {item.formattedPrice}
                </strong>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </ProductItem>
          );
        })}
      </>
    );
  }

  return (
    <Container>
      <header>
        <Link href={pathname}>
          <X size={24} color={theme.colors.gray500.value} />
        </Link>
        <h3>Sacola de compras</h3>

        {!!cartCount && <button onClick={clearCart}>Limpar sacola</button>}
      </header>

      <section>{renderCartContent()}</section>

      <footer>
        <div>
          <small>Quantidade</small>
          <span>{quantityLabel}</span>
        </div>
        <div>
          <b>Valor total</b>
          <strong>{formattedTotalPrice}</strong>
        </div>

        <Button
          onClick={handleBuyProduct}
          loading={isCreatingCheckouSession}
          disabled={cartItems.length < 1}
          title='Finalizar compra'
        />
      </footer>
    </Container>
  );
}
