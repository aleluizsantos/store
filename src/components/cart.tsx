import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export default function Cart() {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálago
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
}
