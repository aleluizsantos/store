import ProductItem from "@/components/product-item";
import { computeProdutTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";

interface productListProps {
  title?: string;
  products: Product[];
}
const ProductList = ({ products, title }: productListProps) => {
  return (
    <>
      {title && <p className="mb-2 pl-5 font-bold uppercase">{title}</p>}
      <div className="flex w-full gap-7 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProdutTotalPrice(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
