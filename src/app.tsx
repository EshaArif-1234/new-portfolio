import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Navbar, Hero, About, Experience, Works, Contact, Footer } from "./components";

const App = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <Navbar hide={hide} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
