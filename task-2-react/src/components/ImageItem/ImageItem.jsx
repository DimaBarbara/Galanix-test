import s from "./ImageItem.module.css";

export default function ImageItem({
  src,
  idx,
  isFirstInRow,
  onDelete,
  onClick,
}) {
  return (
    <div className={`${s.wrapper} ${isFirstInRow ? s.first : ""}`}>
      <div className={s.circle}>
        <img
          src={src}
          alt={`img-${idx}`}
          onClick={onClick}
          className={s.image}
        />
      </div>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        title="delete"
        className={s.delete}
      >
        &times;
      </span>
    </div>
  );
}
