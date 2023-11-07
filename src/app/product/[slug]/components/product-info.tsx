"use client";

import DiscountBadge from "@/components/discount-badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  const handleDecreseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercent > 0 && (
          <DiscountBadge>{product.discountPercent}</DiscountBadge>
        )}
      </div>
      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
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
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
      {/* Botão do carrinho */}
      <Button className="mt-8 font-bold uppercase" onClick={handleAddToCart}>
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
