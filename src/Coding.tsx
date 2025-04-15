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
        <h2 data-aos="fade-left" className="coding-title">
          Web Developing
        </h2>
        <Tabs>
          <TabList>
            <Tab>
              My
              <br />
              Skills
            </Tab>
            <Tab>
              This
              <br />
              Project
            </Tab>
            <Tab>
              Other
              <br />
              Projects
            </Tab>
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

            <a href="https://github.com/Wimlan/ReactPortfolio.git">
              Github Repository
            </a>
            <p>
              The reason I choose to use react for this project is because there
              are several advantages to using it, such as faster load times,
              smoother user interaction, and more responsive user interface, as
              well as reusable components and improved SEO.
              <br /> <br /> One thing I noticed when I first started with react
              was the difference in how the code was structured. It took some
              time to get properly used to, especially understanding JSX and how
              to write it. In several ways the writing is different from how one
              would usually write both HTML and Javascript.
              <br />
              <br />
              After I had created the brand image, logo, as well as the design
              for the website, I began with creating a simple Desktop version,
              just to get the HTML elements on the page where I could see them.
              I also styled it simply with CSS to make it look structurally
              closer to the final product. The first parts of the page I added
              was the header and footer. I wanted to keep them visible at all
              times, mostly because they would affect the balance of the design
              in between.
              <br /> <br />
              After I had a base structure, I added images as well as
              descriptions. The reason for adding it this early was that I knew
              I would end up changing some of the page design when I added the
              images and text for my projects. Mostly because I wanted to add
              more information to the page than I had calculated for when I
              first designed the page. Fortunately none of the changes I had to
              make was overly time-consuming.
              <br /> <br />
              It was first after I had finalized most of the HTML and CSS that I
              added the Javascript and made the page responsive. The reason for
              adding it last was that I had my own set deadline, so I was afraid
              that if I added Javascript or made the page responsive in the
              beginning, I would lose myself in adjusting the smaller details
              and not finish in time. This way it was easier to calculate the
              time left over for adding more advanced functions or further
              change the design if I so wanted. For example, one function that I
              decided to add later was the fade-in effect for a more dynamic
              page.
            </p>

            <Images
              data={thisprojectslide}
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
              My Thought Process
            </a>
            <br />
            <br />
            <a href="https://dreamvilliage.se/">Finished Page Here</a>
            <br />
            <br />
            <h3>One Peace ltd's 20th Anniversary Page</h3>
            <p>
              In 2024, when my former company One Peace ltd. approached their
              20th anniversary, I was asked by the anniversary project team to
              create a page showcasing the event that was going to be held in
              April 2025. The prototypes as well as the finished page can be
              found below(the webpage is in Japanese). <br />
              <br />I programmed the page by myself from scratch using HTML5,
              CSS and Javascript. Afterwards the code was sent to a colleague
              for feedback. Me and this colleague were the only two people with
              any programming experience in the company, and therefore the only
              ones to update the site afterwards.
              <br />
              <br />
              When I first created the prototype there was a lot of details that
              hadn't been decided yet, and even after the page was coded, it had
              to be updated afterhand. Therefore, even though the general design
              style is the same, the details and structure of the page has
              changed in several places.
              <br />
              <br />
              Since the event was going to be held in April, they wanted to have
              spring/summer feeling to the event. They also sent me images of
              flowers, curtains, old keys/books, as well wooden doors. All this
              helped me decide on three keywords: light, elegant, and antique. I
              then designed the page with soft colors while trying to keep that
              antique feeling in terms of shapes - although many of the shapes
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
              slides={otherprojectslide}
            />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default Coding;
