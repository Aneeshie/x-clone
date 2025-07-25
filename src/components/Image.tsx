import { Image, ImageKitProvider } from "@imagekit/next";

const imageKitUrl = process.env.NEXT_PUBLIC_URL_ENDPOINT!;

const ImageKit = ({
  path,
  w,
  h,
  alt,
  className,
}: {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
}) => {
  return (
    <ImageKitProvider urlEndpoint={imageKitUrl}>
      <Image
        src={path}
        width={w || 60}
        height={h || 60}
        alt={alt}
        className={className}
      />
    </ImageKitProvider>
  );
};

export default ImageKit;
