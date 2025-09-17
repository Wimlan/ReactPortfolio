import "./assets/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intropage";
import Aboutme from "./Aboutme";
import Graphicdesign from "./Graphicdesign";
import Gallery from "./Gallery";
import Webdesign from "./Webdesign";
import Coding from "./Coding";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <div className="overflowhidden">
        <Intro />
        <Aboutme />
        <div className="background-pink">
          <Coding />
          <Graphicdesign />
          <Gallery />
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
