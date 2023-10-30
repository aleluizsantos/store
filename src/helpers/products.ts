import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProdutTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercent <= 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) -
    Number(product.basePrice) * (product.discountPercent / 100);
  return {
    ...product,
    totalPrice,
  };
};
