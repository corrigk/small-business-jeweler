import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

// A box that fills with a cropped photo. Give it a size/aspect via className.
export function Photo({ src, alt, className = "", imgClassName = "", sizes = "100vw", priority }: Props) {
  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
