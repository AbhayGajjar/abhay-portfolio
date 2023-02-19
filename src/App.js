import "./App.css";
import About from "./Components/About/About.js";
import Experience from "./Components/Experience/Experience.js";
import Contact from "./Components/Contact/Contact.js";
import Nav from "./Components/nav/nav.js";
import Header from "./Components/header/header.js";
import Services from "./Components/services/service.js";
import Footer from "./Components/footer/footer.js";
import Portfolio from "./Components/portfolio/portfolio";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
     
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;
