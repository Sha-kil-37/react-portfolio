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
      <div className="container mx-auto xl:flex 2xl:flex  flex-wrap justify-between items-center lg:block md:block md:text-center lg:text-center">
        <div className="sm:text-center md:text-center lg:text-center xl:text-left 2xl:text-left">
          <h4 className="font-semibold text-2xl font-primary text-[#000000]">
            Hi i am
          </h4>
          <h3 className="font-semibold font-primary text-[24px] text-primary">
            Muhammad Umair
          </h3>
          <h2 className="font-bold font-primary text-[100px] text-[#000000]">
            UI & UX
          </h2>
          <h2 className="font-bold font-primary text-[100px] text-[#000000] xl:pl-56 2xl:pl-56">
            Designer
          </h2>
          <p className="max-w-[698px] font-primary text-[#000000] text-[21px] font-normal lg:mx-auto   xl:mx-auto  2xl:mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="bg-primary font-normal font-primary text-[#FFFFFF] py-4 px-[52px] mt-[22px] rounded-[5px] text-[21px]">
            Hire Me
          </button>
        </div>
        <div className="mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px] ">
          <div className="relative">
            <img className="w-full h-full" src={banner} alt="banner" />
            <div className="hero_overly"></div>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-x-3">
            {socialIcons.map((item, i) => {
              return (
                <Link key={i}>
                  <span className="text-3xl text-black">{item.icon}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
