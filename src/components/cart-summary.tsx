import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Separator } from "./ui/separator";

export default function CartSummary() {
  const { total, subtotal, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-3">
      <Separator />
      <div className="flex items-center justify-between">
        <p>Subtotal</p>
        <p>R$ {subtotal.toFixed(2)}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <p>Entrega</p>
        <p>Grátis</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <p>Desconto</p>
        <p>- R$ {totalDiscount.toFixed(2)}</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between text-lg font-bold">
        <p>Total</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
}
