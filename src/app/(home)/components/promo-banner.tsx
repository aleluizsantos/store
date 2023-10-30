import Image, { ImageProps } from "next/image";

const PromoBanner = ({ ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      alt={props.alt}
      height={0}
      width={0}
      className={props.className || "h-auto  w-full"}
      sizes="100vw"
    />
  );
};

export default PromoBanner;
