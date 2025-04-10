import "./assets/Aboutme.css";

function Aboutme() {
  return (
    <>
      <div id="aboutme"></div>
      <div data-aos="fade-left" className="aboutme-page">
        <div className="description">
          <h2>About Me</h2>
          <h3>Wilma Yasuda</h3>
          <p>
            I am a Graphic Designer/Web Designer/Front-end Developer based in
            Gothenburg, Sweden, who has experience living and working in Japan
            for 14 years.
            <br />
            <br />
            I have been working as a Graphic Designer professionally since 2018,
            and as a Web Designer/Front-end Developer since 2022, but I have
            been a creative person my whole life.
            <br />
            <br />
            For design I work mostly with Adobe programs such as Photoshop,
            Illustrator or InDesign. I also commonly work with Figma for web
            design.
            <br /> <br />
            As a front-end developer, the most commonly used languages are
            HTML5, CSS, and Javascript. I also have experience using react.js as
            well as a basic understanding of C#.
          </p>
        </div>
        <img
          className="aboutme-img"
          width="350px"
          height="auto"
          src="src/assets/img/aboutme-wilma.png"
          alt="portrait of wilma"
        />
      </div>
    </>
  );
}

export default Aboutme;
