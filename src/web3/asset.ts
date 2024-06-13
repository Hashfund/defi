import { uploadFile } from "@/lib/imagekit";

type CreateTokenMetadata = {
  name: string;
  symbol: string;
  image: File;
  description: string;
  website?: string;
  telegram?: string;
  twitter?: string;
};

export const createTokenRichMetadata = async (
  { name, symbol, image, telegram, twitter, website }: CreateTokenMetadata,
  nonce: string
) => {
  const path = (value: string) => `tokens/${value}/${nonce}`;
  const imageLink = (await uploadFile(image, path("images") + ".png")).url;

  const richMetadata = JSON.stringify({
    name,
    symbol,
    image: imageLink,
    external_link: website,
    properties: {
      files: [
        { uri: telegram, type: "text/utf-8" },
        { uri: twitter, type: "text/utf-8" },
      ],
    },
  });

  const file = new Blob([richMetadata], { type: "application/json" });

  return (await uploadFile(file, path("metadata") + ".json")).url;
};
