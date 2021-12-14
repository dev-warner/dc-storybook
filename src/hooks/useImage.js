import { useEffect, useState } from "react";

export const useImage = (image) => {
  const [src, setSrc] = useState(
    `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`
  );

  useEffect(() => {
    setSrc(`https://${image.defaultHost}/i/${image.endpoint}/${image.name}`);
  }, [image]);

  return src;
};
