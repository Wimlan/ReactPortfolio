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
            I am a Graphic Designer/Web Designer/Web Developer born and raised
            in Sweden, but who has experience living and working in Japan for 14
            years.
            <br />
            <br />
            I have been working as a Graphic Designer professionally since 2018,
            and as a Web Designer/Front-end Developer since 2022, but I have
            been a creative person my whole life.
            <br />
            <br />
            In my free-time, aside from designing or reading about design, I
            also enjoy writing my own novels and musicals.
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
