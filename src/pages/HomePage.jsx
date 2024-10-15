import Banner from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";
import { useNavigate } from "react-router-dom";
//
const HomePage = () => {
  // 
  const navigate=useNavigate()
  // 
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
