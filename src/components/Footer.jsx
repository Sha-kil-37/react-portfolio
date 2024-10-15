import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  // navMenu
  const navMenuArray = [
    "Home",
    "About me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];
  // social icons
  const socialIcons = [
    { icon: <FaFacebook /> },
    { icon: <FaTwitter /> },
    { icon: <IoLogoInstagram /> },
    { icon: <FaLinkedin /> },
  ];
  return (
    <>
      <section className="pt-[109px] pb-[62px] bg-[#F8F8F8]">
        <div className="flex justify-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-center mt-[65px]">
          <ul className="flex justify-between gap-x-3 flex-wrap">
            {navMenuArray.map((item, i) => {
              return (
                <Link
                  key={i}
                  className="font-primary font-normal text-[21px] text-[#000000] px-3"
                >
                  {item}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-x-3">
          {socialIcons.map((item, i) => {
            return <Link key={i}><span className="text-3xl text-black">{item.icon}</span></Link>;
          })}
        </div>
      </section>
      <footer className="py-[26px] bg-[#545454]">
        <div className="text-center">
          <h3 className="font-normal font-primary text-[21px] text-[#FFFFFF]">
            &copy; 2023 {""}
            <span className="font-primary font-bold text-[21px] text-[#FD6F00] mr-1">
              Mumair
            </span>
            All Rights Reserved , Inc.
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
