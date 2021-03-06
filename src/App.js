import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Pics from "./Components/Pics/Pics";
import Experience from "./Components/Experience/Experience";
import Quote from "./Components/Quote/Quote";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Pics />
      <Experience />
      <Quote />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
