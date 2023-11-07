import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItems from "./cart-items";
import { computeProdutTotalPrice } from "@/helpers/products";

export default function Cart() {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálago
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItems
            key={product.id}
            product={computeProdutTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </div>
  );
}
