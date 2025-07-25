import { Image } from "@imagekit/next";

const ImageKit = ({
  path,
  w,
  h,
  alt,
  tr,
  className,
}: {
  path: string;
  w: number;
  h: number;
  alt: string;
  tr?: boolean;
  className?: string;
}) => {
  const transformation = tr
    ? [{ height: h, width: w, crop: "maintain_ratio" as const }]
    : undefined;

  return (
    <Image
      src={path}
      alt={alt}
      width={w || 60}
      height={h || 60}
      transformation={transformation}
      className={className}
    />
  );
};

export default ImageKit;
