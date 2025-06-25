import { useState } from "react";
import { BrowserRouter } from "react-router-dom"  ;
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className="relative z-0">
        <Navbar hide={hide} />
        <Hero />
      </div>
        </div>
      <About />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>  );
};

export default App;
