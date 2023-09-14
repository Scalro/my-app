import React from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App(props) {
    return (
    <div>
      <Navbar/>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contacts />
    </div>
  );
}
export default App;