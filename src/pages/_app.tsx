import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import CartButton from "@/components/cart-button";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" />

        <CartButton counter={26} color="dark" size="small" onClick={() => null} />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
