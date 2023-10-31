import { prismaClient } from "@/lib/prisma";

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

  return <h1>{product.name}</h1>;
};

export default ProductDetailsPage;
