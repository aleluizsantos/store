import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: { gt: 0 },
    },
  });

  return (
    <div className="p-5">
      <Image
        src="/banner_01.png"
        alt="até 55% desconto esse mês"
        height={0}
        width={0}
        className="h-auto  w-full"
        sizes="100vw"
      />
      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
