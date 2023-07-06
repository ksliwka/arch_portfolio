import Experience from "./Experience";
import AboutIntro from "./AboutIntro";
import Contact from "./Contact";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <AboutIntro />
      <Experience />
      <Contact />
    </Fragment>
  );
};

export default About;
