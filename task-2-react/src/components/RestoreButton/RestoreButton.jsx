import s from "./RestoreButton.module.css";

export default function RestoreButton({ onClick }) {
  return (
    <div className={s.divButton}>
      <button onClick={onClick} className={s.button}>
        Restore everything
      </button>
    </div>
  );
}
