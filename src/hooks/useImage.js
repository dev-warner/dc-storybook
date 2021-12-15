import { useEffect, useState } from "react";

export const useImage = (image) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (!image || typeof image === "string") {
      return;
    }
    setSrc(`https://${image.defaultHost}/i/${image.endpoint}/${image.name}`);
  }, [image]);

  return src;
};
