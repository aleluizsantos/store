import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProdutTotalPrice } from "@/helpers/products";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProdutTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
