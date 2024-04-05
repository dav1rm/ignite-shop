'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { X } from '@phosphor-icons/react';

import {
  Container,
  ImageContainer,
  ProductItem,
} from '@/styles/components/cart-modal';
import { theme } from '@/styles';
import shirt1 from '@/assets/shirts/1.png';
import Button from './button';

interface CartModalProps {}

export default function CartModal({}: CartModalProps) {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();

  if (!modal) {
    return;
  }

  return (
    <Container>
      <header>
        <Link href={pathname}>
          <X size={24} color={theme.colors.gray500.value} />
        </Link>
        <h3>Sacola de compras</h3>
      </header>

      <section>
        <ProductItem>
          <ImageContainer>
            <Image src={shirt1} width={94} height={94} alt='' />
          </ImageContainer>

          <div>
            <span>Camiseta Titulo</span>

            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductItem>

        <ProductItem>
          <ImageContainer>
            <Image src={shirt1} width={94} height={94} alt='' />
          </ImageContainer>

          <div>
            <span>Camiseta Titulo</span>

            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductItem>

        <ProductItem>
          <ImageContainer>
            <Image src={shirt1} width={94} height={94} alt='' />
          </ImageContainer>

          <div>
            <span>Camiseta Titulo</span>

            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductItem>
      </section>

      <footer>
        <div>
          <small>Quantidade</small>
          <span>3 itens</span>
        </div>
        <div>
          <b>Valor total</b>
          <strong>R$ 79,90</strong>
        </div>

        <Button onClick={() => null} title='Finalizar compra' />
      </footer>
    </Container>
  );
}
