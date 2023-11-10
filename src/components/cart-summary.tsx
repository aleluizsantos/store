import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

export default function CartSummary() {
  const { total, subtotal, totalDiscount, products } = useContext(CartContext);

  const handleFinishPurchase = async () => {
    const checkout = await createCheckout(products);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

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

      <Button
        onClick={handleFinishPurchase}
        className="mt-7 font-bold uppercase"
      >
        Finalizar compra
      </Button>
    </div>
  );
}
