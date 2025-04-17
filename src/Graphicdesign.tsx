import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Graphicdesign.css";

function Graphicdesign() {
  return (
    <>
      <div id="graphicdesign"></div>
      <section className="graphicdesign-page">
        <h2 data-aos="fade-right">Graphic Design</h2>
        <div className="graphic-intro">
          <h3>How I Design</h3>
          <p>
            How I design is generally based on the project, as no project is
            exactly the same, but below are a few steps I tend to follow.
          </p>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Step 1. Familiarize myself with the project/brand.
            </Accordion.Header>
            <Accordion.Body>
              The way I do this is to ask as many questions as possible. What is
              the concept? Brand image? Target? Purpose? etc. If there is User
              Research available, great!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Step 2. Key words and brand image
            </Accordion.Header>
            <Accordion.Body>
              To make sure I stay on track as I design and don't deviate too
              much from the intended outcome, I like to decide about 3 keywords
              that incorporate best the feeling I want to convey.(ex. elegant,
              calm, retro/ cute, exciting, pop). If it's a larger project(such
              as a website design) and a brand image sheet is not already
              available, I often create my own brand image sheet for the
              project. It better helps guide my design choices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Step 3. Look at inspirations and draw a sketch
            </Accordion.Header>
            <Accordion.Body>
              If I'm unsure about the kind of design I want to do, I look at
              inspiration online from other projects or images that align with
              the brand image - although I might skip this if I already have a
              specific design in mind. When I have enough inspiration for the
              design, I make multiple hand-drawn sketches, so that I have
              several options to choose from when I start on the real design.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Step 4. Low-fidelity Prototype</Accordion.Header>
            <Accordion.Body>
              In this step, I make several quick and rough designs in the
              program of my choice, just to test out the different design ideas,
              and see what works and what doesn't. Usually for me that program
              will be Adobe Photoshop, but depending on the project it might
              also be Illustrator or Figma.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Step 5. High-fidelity Prototype</Accordion.Header>
            <Accordion.Body>
              In this step I use about 1-3 of the different low-fidelity
              prototypes (depending on the request of the client) and make them
              into high-fidelity prototypes. I try to make this Prototype as
              close to the final product as possible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Step 6. Feedback and revisions</Accordion.Header>
            <Accordion.Body>
              If I have a client, this is the step when I send the prototype for
              feedback, and make changes to the design if necessary.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
}

export default Graphicdesign;
