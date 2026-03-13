import { useState } from "react";
import ImageModal from "./ImageModal";

import g1 from "../assets/gallery/gallery1.jpg";
import g2 from "../assets/gallery/gallery2.jpg";
import g3 from "../assets/gallery/gallery3.jpg";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const images = [g1, g2, g3];

  return (
    <>
      <section className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} onClick={() => setOpen(img)} />
        ))}
      </section>

      {open && <ImageModal img={open} close={() => setOpen(null)} />}
    </>
  );
}
