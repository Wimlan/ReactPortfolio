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

/*I started creating a simple PC version, just to get the HTML parts I wanted to include
on the page so I could see them. I also styled it simply with CSS to make it look closer to the final product. 
After I had a base structure, I planned to make it responsive and add any necessary javascript functions.
I had my own set deadline, so I thought that if I added javascript or made it responsive while first creating the page,
I would become stuck on adjusting the smaller details and not finish in time.
This way it would be easier to calculate the time left over for adding more advanced javascript functions if I so wanted.
*/

/*There was two exceptions. The gallery part, since I used yet-another-react-lightbox.com for the making the gallery part, 
and I only needed to adjust to fit my page.
The other one was the footer and header. I wanted to keep them visible all the time, which meant that they would
affect the balance of the page design in between. Therefore I decided to add the javascript in the beginning.*/

/*I changed some of the design when I added my projects. For example I changed the border radius on img from 50% to 8px and made the height longer.
This made for better visibility.*/

//

//TO DO
//Create pc page with HTML and CSS ← Make footer and header visible all the time.
//make responsive
//add javascript functions
//Add graphic design photos
//Add web design photos
//Write about coding the page
//Find server to upload
