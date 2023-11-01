"use client";

import DiscountBadge from "@/components/discount-badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/products";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercent" | "totalPrice" | "name"
  >;
}
const ProductInfo = ({
  product: { basePrice, description, discountPercent, totalPrice, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercent > 0 && (
          <DiscountBadge>{discountPercent}</DiscountBadge>
        )}
      </div>
      {discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      {/* Definindo a quantidadde */}
      <div className="mt-4 flex items-center gap-4">
        <Button size="icon" variant="outline" onClick={handleDecreseQuantity}>
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button size="icon" variant="outline" onClick={handleIncreseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>
      {/* Description */}
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>
      {/* Botão do carrinho */}
      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mb-4 mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-semibold">SFPacket</span>
            </p>
            <p className="text-xs font-semibold text-primary">
              Envio para todo o Brasil
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold">Frete Grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
