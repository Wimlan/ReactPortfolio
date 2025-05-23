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
              Web developing has been an interest of mine for many years. With a background in design, I have steadily been working to incorporate wed developing as a part of my career.
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
<p>CSS (Sass)</p>
<p>JavaScript (Modern ES6+)</p>
<p>React.js</p>
<p>Next.js</p>
<p>DOM Manipulation</p>
<p>Version Control (Git)</p>
<p>Build Tools (Vite)</p>
<p>RESTful APIs</p>
<p>C# / .NET (Basic knowledge)</p>
<p>Performance Optimization</p>
<p>Code Testing</p>
          </TabPanel>
          <TabPanel>
            <h3>Programming my Portfolio website</h3> <br />
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
              would usually write both HTML and Javascript. Another key learning
              point in this project was understanding how asset handling,
              particularly images, works within the React build process. I
              discovered the importance of correctly importing images to ensure
              they were included and displayed in the final build.
              <br />
              <br />
              After I had created the brand image, logo, as well as the design
              for the website, I began with creating a simple Desktop version,
              just to get the HTML elements on the page where I could see them.
              I also styled it simply with CSS to make it look structurally
              closer to the final product. The first parts of the page I added
              was the header and footer. Since they were to be visible at all
              times, they would later come to affect the balance of the design
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
              page, and an accordion to hide some of the text.
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
            <br />
            <a href="https://www.linkedin.com/pulse/designing-coding-my-first-metal-website-wilma-yasuda-obvqc/">
              My Thought Process
            </a>
            <br />
            <br />
            <a href="https://dreamvilliage.se/">Finished Page Here</a>
            <br />
            <p>
              I both designed and coded the page for the band Dream Villiage,
              using my years in design and front-end coding to
              create a page that represents Dream Villiage's mystical yet
              emotionally intense music.
            </p>
            <br />
            <br />
            <h3>One Peace ltd's 20th Anniversary Page</h3> <br />
            <a href="https://onepeace-online.jp/pages/20th-anniversary">
              Finished page here
            </a>
            <p>
              In 2024, when my former company One Peace ltd. approached their
              20th anniversary, I was asked by the anniversary project team to
              create a page showcasing the event that was going to be held in
              April 2025. The prototypes can be found below. <br />
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
            </p>
            <br />
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
