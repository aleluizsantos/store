"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner_01.png"
        alt="até 55% desconto esse mês"
        height={0}
        width={0}
        className="h-auto  w-full"
        sizes="100vw"
      />
    </div>
  );
}
