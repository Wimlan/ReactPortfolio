import "./assets/Graphicdesign.css";

function Graphicdesign() {
  return (
    <>
      <div id="graphicdesign"></div>
      <section className="graphicdesign-page">
        <h2 data-aos="fade-right">Graphic Design</h2>
        <div className="designsection-one">
          <div className="designdescription">
            {/* make these steps accordions(like bootstrap accordions), and remove the images*/}
            <h3>How I Design</h3>
            <p>
              How I design is generally based on the project, as no project is
              exactly the same, but below are a few steps I tend to follow.
            </p>
            <a href="#gallery">Skip to Project Gallery</a>
            <h4>Step 1. Familiarize myself with the project/brand.</h4>
            <p>
              The way I do this is to ask as many questions as possible. What is
              the concept? Brand image? Target? Purpose? etc.
            </p>
            <h4>Step 2. Key words and brand image</h4>
            <p>
              To make sure I stay on track as I design and don't deviate too
              much from the intended outcome, I like to decide about 3 keywords
              that incorporate best the feeling I want to convey.(ex. elegant,
              calm, retro/ cute, exciting, pop). If it's a larger project(such
              as a website design) and a brand image sheet is not already
              available, I often create my own brand image sheet for the
              project. It better helps guide my design choices.
            </p>
          </div>
          <img
            data-aos="fade-left"
            width="150px"
            height="150px"
            src="src/assets/img/vieo-temporary.png"
            alt="portrait of wilma"
          />
        </div>

        <div className="designsection-two">
          <img
            data-aos="fade-right"
            width="150px"
            height="150px"
            src="src/assets/img/Desktop - Landing Page 02.png"
            alt="portrait of wilma"
          />
          <div className="designdescription">
            <h4>Step 3. Look at inspiration and draw a sketch</h4>
            <p>
              If I'm unsure about the kind of design I want to do, I look at
              inspiration online from other projects or images that align with
              the brand image - although I might skip this if I already have a
              specific design in mind. When I have enough inspiration for the
              design, I make multiple hand-drawn sketches, so that I have
              several options to choose from when I start on the real design.
            </p>
            <h4>Step 4. Low-fidelity Prototype</h4>
            <p>
              In this step, I make several quick and rough designs in the
              program of my choice, just to test out the different design ideas,
              and see what works and what doesn't. Usually for me that program
              will be Adobe Photoshop, but depending on the project it might
              also be Illustrator or Figma.
            </p>
          </div>
        </div>
        <div className="designsection-one">
          <div className="designdescription">
            <h4>Step 5. High-fidelity Prototype</h4>
            <p>
              In this step I use about 1-3 of the different low-fidelity
              prototypes (depending on the request of the client) and make them
              into high-fidelity prototypes. I try to make this Prototype as
              close to the final product as possible.
            </p>
            <h4>Step 6. Feedback and revisions</h4>
            <p>
              If I have a client, this is the step when I send the prototype for
              feedback, and make changes to the design if necessary.
            </p>
          </div>
          <img
            data-aos="fade-left"
            width="150px"
            height="150px"
            src="src\assets\img\vieo-logo.png"
            alt="portrait of wilma"
          />
        </div>
      </section>
    </>
  );
}

export default Graphicdesign;
