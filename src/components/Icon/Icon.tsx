import { useEffect, useState } from "react";

import "./Icon.scss";

export const Icon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: string;
}) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(`/icons/${name}.svg`)
      .then((res) => res.text())
      .then((data) => setSvgContent(data));
  }, []);

  return (
    <div
      className={`icon icon--${color} icon--${size}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
