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
            I'm a fullstack student with focus on frontend at IT-Högskolan in
            Gothenburg. Before I became a student I worked with frontend
            development, graphic design, and UX/UI design in Japan for about 7
            years.
            <br /> <br />
            As a web developer, the languages I most commonly use are HTML5,
            CSS(Sass), Javascript, and Typescript. I also have experience using
            C#.
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
