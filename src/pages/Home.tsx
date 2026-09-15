import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Security } from "../components/Security";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Security />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
