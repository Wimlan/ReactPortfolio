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
            I'm a Frontend student at IT-Högskolan in Gothenburg. I have also
            former experience working with Frontend development/ Graphic Design/
            UX/UI Design in Japan, where I lived for 14 years.
            <br /> <br />
            As a Web Developer, the languages I most commonly use are HTML5,
            CSS(Sass), and Javascript. I also have experience using react.js as
            well as C#.
            <br /> <br />I am currently looking for LIA(work practice) fall
            2027, as well as spring 2028. Feel free to contact me if you know
            anyone interested in having a Frontend student contribute to their
            company.
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
