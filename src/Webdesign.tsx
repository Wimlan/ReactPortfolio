import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { webslides } from "./assets/data";
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
import "./assets/Webdesign.css";

function Webdesign() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <div id="webdesign"></div>
      <div className="webdesign-page">
        <div data-aos="zoom-in" className="web-design-intro">
          <h2>UX/UI</h2>
          <h3>Toddlerknit (mock-project)</h3>
          {/*  <p>
            The design process of this mock-project is very similar <br />
            to the design process for my graphic design projects.
          </p>
          <a href="#graphicdesign">My design process</a> */}
        </div>
        {/* <button onClick={() => setOpen(true)}>Open Lightbox</button>--!> */}
        <div className="websection-one">
          <img
            data-aos="fade-right"
            className="brandimage"
            width="580px"
            height="220"
            src="../assets/img/toddlerknit-brandimage.jpg"
            alt="brandimage"
          />
          <div data-aos="fade-left" className="webdescription">
            <p>
              I designed this site to sell knitted items with the target user
              being Swedish parents. Therefore an outdoor fall and winter
              setting felt quite natural to me. Sweden is a country with long
              winters and below zero degree weather. Most children play and move
              around all day, often outside, therefore it is important to show
              that these clothes are of good enough quality that they can stand
              tougher conditions. Not only by text, but through pictures as
              well. <br />
              <br />
              As backed up by the User Research I conducted, it appears that
              many parents nowadays prefers more muted colors for their kids
              clothes, as opposed to vivid baby colors. That combined with the
              outdoor setting gave me the idea to make the keyword for this
              brand Natural. Therefore I added to the visual concept a selection
              of natural colors that I believe could be found in a fall or
              winter outdoor setting. <br />
              <br />
              Lastly, I added the rectangle, triangle, and circle shape to give
              the visuals that sense of playfulness and fun that I think is
              important for a children's brand. <br />
            </p>
          </div>
        </div>
        <div className="read-more">
          <p>Read more about the creation of ToddlerKnit below:</p>
          <div className="flexbox">
            <a
              target="_blank"
              href="https://www.linkedin.com/pulse/uxd-journey-user-research-part-1-wilma-yasuda/"
            >
              UX Design Articles
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/pulse/toddlerknit-project-visual-concept-wilma-yasuda/"
            >
              Visual Concept/Brand Image
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/pulse/toddlerknit-project-mobile-prototype-wilma-yasuda/"
            >
              Mobile Prototype
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/pulse/toddlerknit-project-desktop-prototype-logo-design-wilma-yasuda/"
            >
              Desktop Prototype
            </a>
          </div>
        </div>
        <Images
          data={webslides}
          onClick={(currentIndex: number) => setIndex(currentIndex)}
        />
        <Lightbox
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          // open={open}
          // close={() => setOpen(false)}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={webslides}
        />

        {/*    <a id="otherprojects" href="#programming">
          See other Web Design Projects <br />
          (that I also coded)
        </a> */}
      </div>
    </>
  );
}

export default Webdesign;
