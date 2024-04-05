import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import CartButton from '@/components/cart-button';
import CartModal from '@/components/cart-modal';
import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
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
  );
}
