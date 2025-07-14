import React, { useEffect, useState } from "react";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import RestoreButton from "./components/RestoreButton/RestoreButton";
import Modal from "./components/Modal/Modal";
import "./App.css";
export default function App() {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const loadedImages = Object.values(
      import.meta.glob("./assets/*.jpg", { eager: true })
    ).map((m) => m.default);

    setAllImages(loadedImages);

    const storedIndexes = JSON.parse(localStorage.getItem("visibleIndexes"));
    if (storedIndexes && storedIndexes.length > 0) {
      const filteredImages = loadedImages.filter((_, idx) =>
        storedIndexes.includes(idx)
      );
      setImages(filteredImages);
    } else {
      setImages(loadedImages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visibleImages", JSON.stringify(images));
  }, [images]);

  const handleDelete = (img) => {
    setImages((prevImages) => {
      const newImages = prevImages.filter((i) => i !== img);
      const newIndexes = newImages.map((img) => allImages.indexOf(img));
      localStorage.setItem("visibleIndexes", JSON.stringify(newIndexes));
      return newImages;
    });
  };

  const handleRestore = () => {
    setImages(allImages);
    localStorage.removeItem("visibleIndexes");
  };

  const now = new Date();
  const formattedDate =
    now.toLocaleDateString("uk-UA") +
    " " +
    now.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="main-div">
      <div id="info" className="divInfo">
        Images: {images.length} <br />
        Date: {formattedDate}
      </div>

      {images.length > 0 ? (
        <ImageGrid
          images={images}
          onDelete={handleDelete}
          onOpenModal={setModalImage}
        />
      ) : (
        <p className="noImagesMessage">You have deleted all images! 🗑️</p>
      )}
      {images.length < 12 && <RestoreButton onClick={handleRestore} />}
      {modalImage && (
        <Modal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}
