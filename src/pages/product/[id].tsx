import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque officiis repellendus, officia culpa ab nam perferendis id dolorum reprehenderit placeat, ducimus at quos labore neque dolor cum delectus, quas nulla?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
