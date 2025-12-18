import "./assets/contact.css";

function Contact() {
  return (
    <>
      <div id="contact"></div>
      <section className="contact-page">
        <h2>
          Thank you for <br /> your time!
        </h2>
        <h3>SNS and Contact</h3>
        <div className="contact">
          <a href="mailto:wilma.yasuda@gmail.com">
            <p className="email">wilma.yasuda@gmail.com</p>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/wilmayasuda/">
            <p>Linkedin</p>
          </a>
        </div>
        <h4>Based in Gothenburg, Sweden</h4>
      </section>
    </>
  );
}

export default Contact;
