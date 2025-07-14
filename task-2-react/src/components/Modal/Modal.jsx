import { useEffect } from "react";
import s from "./Modal.module.css";

export default function Modal({ image, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={s.modalBackdrop}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Modal" />
        <button onClick={onClose}> &times;</button>
      </div>
    </div>
  );
}
