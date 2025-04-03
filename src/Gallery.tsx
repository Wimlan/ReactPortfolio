import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { slides } from "./assets/data";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {
  Captions,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";
import "./assets/Gallery.css";

function Gallery() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <div id="gallery">
      <h2>Gallery</h2>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button>--!> */}

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 5,
        }}
        // open={open}
        // close={() => setOpen(false)}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}

export default Gallery;
