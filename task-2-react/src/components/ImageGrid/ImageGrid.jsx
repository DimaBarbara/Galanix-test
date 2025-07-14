import { useEffect, useState } from "react";
import ImageItem from "../ImageItem/ImageItem";
import s from "./ImageGrid.module.css";
export default function ImageGrid({ images, onDelete, onOpenModal }) {
  const [columns, setColumns] = useState(4);
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 500) setColumns(1);
      else if (width <= 900) setColumns(2);
      else setColumns(4);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  return (
    <div className={s.divGrid}>
      {images.map((img, idx) => (
        <ImageItem
          key={img}
          src={img}
          idx={idx}
          isFirstInRow={idx % columns === 0}
          onDelete={() => onDelete(img)}
          onClick={() => onOpenModal(img)}
        />
      ))}
    </div>
  );
}
