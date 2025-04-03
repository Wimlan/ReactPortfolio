import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { thisprojectslide, otherprojectslide } from "./assets/data";
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
import "./assets/coding.css";

function Coding() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <div id="programming"></div>
      <section className="coding-page">
        <h2 className="coding-title">Programming</h2>
        <Tabs>
          <TabList>
            <Tab>Skills</Tab>
            <Tab>This Project</Tab>
            <Tab>Other Projects</Tab>
          </TabList>

          <TabPanel>
            <p>
              Web developing has been an interest of mine for many years. I took
              the first steps to shifting my career to web developing in 2022,
              including taking two university courses. I have now been doing it
              professionally for about 3 years.
            </p>

            <h3>University courses</h3>

            <p>
              <em>Web Development with HTML and CSS</em> <br /> at University
              West(Högskolan Väst)
            </p>
            <p>
              <em>Basic Programming(C#)</em> <br /> at Luleå University of
              Technology(Luleå Tekniska Universitet)
            </p>

            <h3>Skill list</h3>

            <p>HTML5</p>

            <p>CSS</p>

            <p>JavaScript</p>

            <p>React.js</p>

            <p>C#</p>
          </TabPanel>
          <TabPanel>
            <h3>Programming my Portfolio website</h3>
            <p>
              This was the first time I was using react, and the reason I was
              choose it for a from-scratch project such as this was mostly
              because I wanted to learn to use it properly. One thing I
              immediately noticed was how differently react code was structured.
              It took some time to get properly used to, but now I'm glad for
              the structure. It does give the code easier readability. <br />
              <br />
              After I had created the brand image, logo, as well as the design
              for the website, I began with creating a simple Desktop version,
              just to get the HTML elements on the page so where I could see
              them. I also styled it simply with CSS to make it look
              sstructurally closer to the final product. The first parts of the
              page I added was the header and footer. I wanted to keep them
              visible all the time, which meant that they would affect the
              balance of the page design in between.
              <br /> <br />
              After I had a base structure, I added projects images as well as
              descriptions. The reason for adding it this early was that I know
              I would end up changing some of the design when I added my
              projects, mostly because I ended up wanting to add more pictures
              or more text to the page than I had calculated for in the design.
              The were a few changes I had to make, none that time-consuming.
              <br /> <br />
              I added everything else first after making the basic structure,
              mostly because I had my own set deadline, so I thought that if I
              added javascript or made it responsive while first creating the
              page, I would become stuck on adjusting the smaller details and
              not finish in time. This way it would be easier to calculate the
              time left over for adding more advanced functions if I so wanted.
              <br />
              <br />
              One thing that was a large advantage for using react was that
              mostly any function needed could be added by simply importing a
              plugin. I used for example the yet-another-react-lightbox pluging
              for the gallery part. Although, one disadvantage with this was
              that it was harder to adjust any of the imported code if
              necessary. <br />
              <br />
            </p>
            <Images
              data={thisprojectslide}
              onClick={(currentIndex) => setIndex(currentIndex)}
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
              slides={thisprojectslide}
            />
          </TabPanel>
          <TabPanel>
            <h3>Metal Band Page</h3>
            <p>
              I both designed and coded the page for the band Dream Villiage,
              using my 7 years in design and 3 years in front-end coding to
              create a page that represents Dream Villiage's mystical yet
              emotionally intense music.
            </p>
            <br />
            <a href="https://www.linkedin.com/pulse/designing-coding-my-first-metal-website-wilma-yasuda-obvqc/">
              Read more about how I designed and coded this page here
            </a>
            <br />
            <br />
            <a href="https://dreamvilliage.se/">Finished page here</a>
            <br />
            <br />
            <h3>One Peace ltd's 20th Anniversary Page</h3>
            <p>
              In 2024, when my former company One Peace ltd. approached their
              20th anniversary, I was asked by the anniversary project team to
              create a page showcasing the event that was going to be held in
              April 2025. The prototypes and framework as well as the finished
              page can be found below(the webpage is in Japanese). <br />
              <br />
              When I first created the framework and prototype there was a lot
              of details that hadn't been decided yet, and even after the page
              was coded, it had to be updated afterhand. Therefore, even though
              the general design style is the same, the details of the page has
              changed some.
              <br />
              <br />
              Since the event was going to be held in April, they wanted to have
              spring/summer feeling to the event. They also sent me images of
              flowers, curtains, old keys/books, as well wooden doors. All this
              helped me decide on three keywords: light, elegant, and antique. I
              then designed the page with soft colors while trying to keep that
              antique feeling in terms of shapes, although many of the shapes
              were later changed to simpler ones during coding as more details
              were added and design changes were made for readability(such as
              adding popup buttons to the Event Content section).
            </p>
            <br />
            <a href="https://onepeace-online.jp/pages/20th-anniversary">
              Finished page here
            </a>
            {/* <a href="https://www.rakuten.ne.jp/gold/styleformom/kikaku/20th-anniversary-rakuten.html">
              →Finished page here←
            </a> */}
            <Images
              data={otherprojectslide}
              onClick={(currentIndex) => setIndex(currentIndex)}
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
              slides={otherprojectslide}
            />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default Coding;
