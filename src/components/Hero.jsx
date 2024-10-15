import banner from "../assets/banner.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

//
const Hero = () => {
  // 

  // social icons
  const socialIcons = [
    { icon: <FaFacebook /> },
    { icon: <FaTwitter /> },
    { icon: <IoLogoInstagram /> },
    { icon: <FaLinkedin /> },
  ];


  // 
  return (
    <section className="pt-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div>
          <h4 className="font-semibold text-2xl font-primary text-[#000000]">
            Hi i am
          </h4>
          <h3 className="font-semibold font-primary text-[24px] text-primary">
            Muhammad Umair
          </h3>
          <h2 className="font-bold font-primary text-[100px] text-[#000000]">
            UI & UX
          </h2>
          <h2 className="font-bold font-primary text-[100px] text-[#000000] pl-56">
            Designer
          </h2>
          <p className="max-w-[698px] font-primary text-[#000000] text-[21px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="bg-primary font-normal font-primary text-[#FFFFFF] py-4 px-[52px] mt-[22px] rounded-[5px] text-[21px]">Hire Me</button>
        </div>
        <div>
          <div className="relative">
            <div className="absolute bg-primary bg-opacity-[80%] max-h-[83px] max-w-[374px] top-[12%] right-[50%] translate-x-[50%] overflow-hidden">
            <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <img className="w-full h-full" src={banner} alt="banner" />
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-x-3">
          {socialIcons.map((item, i) => {
            return <Link key={i}><span className="text-3xl text-black">{item.icon}</span></Link>;
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
