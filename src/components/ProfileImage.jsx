import { useState } from "react";

export default function PortfolioImage({ src, alt, className, onLoadCallback }) {
  const [loaded, setLoaded] = useState(false);

  function handleLoad() {
    setLoaded(true);
    onLoadCallback(); // <-- HOC informieren!
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
      onLoad={handleLoad}
    />
  );
}
