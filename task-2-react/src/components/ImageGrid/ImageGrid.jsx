import ImageItem from "../ImageItem/ImageItem";
import s from "./ImageGrid.module.css";
export default function ImageGrid({ images, onDelete, onOpenModal }) {
  return (
    <div className={s.divGrid}>
      {images.map((img, idx) => (
        <ImageItem
          key={img}
          src={img}
          idx={idx}
          isFirstInRow={idx % 4 === 0}
          onDelete={() => onDelete(img)}
          onClick={() => onOpenModal(img)}
        />
      ))}
    </div>
  );
}
