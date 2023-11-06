import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/product-list";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: { gt: 0 },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 p-5 py-8">
      <PromoBanner src="/banner_01.png" alt="até 55% desconto esse mês" />
      {/* Categorias dos produtos */}
      <Categories />
      {/* Exibir as ofertas */}
      <ProductList title="Ofertas" products={deals} />
      <PromoBanner src="/banner_02.png" alt="até 55% desconto em mouses" />
      {/* Exibir os produtos teclados */}
      <ProductList title="Teclados" products={keyboards} />
      <PromoBanner src="/banner_03.png" alt="até 20% de Desconto em fones" />
      {/* Exibir os produtos mouses*/}
      <ProductList title="Mouses" products={mouses} />
    </div>
  );
}
