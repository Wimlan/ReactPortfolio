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
      <div id="top"></div>
      <Header />
      <Intro />
      <Aboutme />
      <div className="background-pink">
        <Graphicdesign />
        <Gallery />
        <Webdesign />
        <Coding />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

//cp wilma-portfolio
//npm run dev
