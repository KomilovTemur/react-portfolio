import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default Home;
