import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useShoppingCart } from 'use-shopping-cart';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from '@/lib/stripe';
import CartButton from '@/components/cart-button';
import { HomeContainer, Product } from '@/styles/pages/home';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    formattedPrice: string;
    price: number;
    priceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Início | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className='keen-slider__slide'>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={product.name}
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.formattedPrice}</span>
                  </div>

                  <CartButton
                    size='medium'
                    color='light'
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, { count: 1 });
                    }}
                  />
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
      price: price.unit_amount,
      priceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
