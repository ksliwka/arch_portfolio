import Experience from "./Experience";
import AboutIntro from "./AboutIntro";
import Contact from "./Contact";
import AboutNavbar from "./AboutNavbar";
import Technologies from "./Technologies";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <AboutNavbar />
      <AboutIntro />
      <Technologies />
      <Experience />
      <Contact />
    </Fragment>
  );
};

export default About;
