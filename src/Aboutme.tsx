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
            I am a Graphic Designer/ UX/UI Designer/ Web Developer based in
            Gothenburg, Sweden, who has experience living and working in Japan
            for 14 years.
            <br />
            <br />
            For design I work mostly with Adobe programs such as Photoshop,
            Illustrator or InDesign. I also commonly work with Figma for web
            design.
            <br /> <br />
            As a Web Developer, the languages I most commonly use are HTML5,
            CSS, and Javascript. I also have experience using react.js as well
            as C#.
          </p>
        </div>
        <img
          className="aboutme-img"
          width="400px"
          height="auto"
          src="assets/img/aboutme-wilma.jpg"
          alt="portrait of wilma"
        />
      </div>
    </>
  );
}

export default Aboutme;
