import { Image, ImageKitProvider } from "@imagekit/next";

const imageKitUrl = process.env.NEXT_PUBLIC_URL_ENDPOINT!;

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
    <ImageKitProvider urlEndpoint={imageKitUrl}>
      <Image
        src={path}
        alt={alt}
        width={w || 60}
        height={h || 60}
        transformation={transformation}
        className={className}
      />
    </ImageKitProvider>
  );
};

export default ImageKit;
