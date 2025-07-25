import { Video } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function VideoKit({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  return (
    <Video
      urlEndpoint={urlEndpoint}
      src={path}
      controls
      className={className}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
    />
  );
}
