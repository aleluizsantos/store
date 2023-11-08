import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItems from "./cart-items";
import { computeProdutTotalPrice } from "@/helpers/products";
import { Separator } from "./ui/separator";
import CartSummary from "./cart-summary";

export default function Cart() {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItems
              key={product.id}
              product={computeProdutTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Carrinho vazio. Vamos fazer compras?
          </p>
        )}
      </div>
      {products.length > 0 && <CartSummary />}
    </div>
  );
}
