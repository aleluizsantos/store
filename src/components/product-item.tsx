import Image from "next/image";
import { ProductWithTotalPrice } from "@/helpers/products";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4 ">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="max-x-[80%] h-auto max-h-[70%] w-auto"
          alt={product.name}
          style={{ objectFit: "contain" }}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDown size={13} />
            {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          {product.discountPercent > 0 && (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {product.basePrice.toFixed(2)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
