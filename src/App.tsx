import "./assets/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intropage";
import Aboutme from "./Aboutme";
import Coding from "./Coding";
import Projects from "./Projects";
import Webdesign from "./Webdesign";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <div className="overflowhidden">
        <Intro />
        <Aboutme />
        <Coding />
        <div className="background-pink">
          <Projects />
          <Webdesign />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

//cp wilma-portfolio
//npm run dev
