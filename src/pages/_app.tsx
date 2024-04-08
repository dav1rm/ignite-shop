import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import CartButton from '@/components/cart-button';
import CartModal from '@/components/cart-modal';
import logoImg from '../assets/logo.svg';
import { CartProvider } from 'use-shopping-cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = usePathname();
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.STRIPE_SECRET_KEY as string}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency='BRL'
      shouldPersist={true}
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt='logo' />
          <CartButton
            counter={26}
            color='dark'
            size='small'
            onClick={() => router.push(`${pathname}?modal=true`)}
          />
        </Header>
        <Component {...pageProps} />
        <CartModal />
      </Container>
    </CartProvider>
  );
}
