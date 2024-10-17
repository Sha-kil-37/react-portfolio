//
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

//
const Navbar = () => {
  //
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  // navMenu
  const navMenuArray = [
    "Home",
    "About me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  //handleNavToggle
  function handleNavToggle() {
    setIsMobile(!isMobile);
  }
  // handle downloadCv
  // function handleDownloadCV() {

  // }

  //
  return (
    <nav className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center relative">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden xl:flex lg:hidden gap-x-3 flex-wrap items-center md:hidden 2xl:flex">
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
            <button className="bg-primary font-primary px-4 py-4 text-[#FFFFFF] rounded-[5px] font-normal text-[21px]">
              Download CV
            </button>
          </ul>
          <div className="block md:block lg:block xl:hidden 2xl:hidden text-right">
            <button onClick={handleNavToggle}>
              {isMobile ? (
                <FaBarsStaggered className="text-3xl text-[#000000]" />
              ) : (
                <FaBars className="text-3xl text-[#000000]" />
              )}
            </button>
          </div>

          <div
            className={
              isMobile
                ? "absolute top-[110%] right-0 w-full block text-center py-3 bg-primary"
                : "absolute bottom-[-100%] right-0 w-full hidden text-center py-3 "
            }
          >
            <ul className="w-full">
              {navMenuArray.map((item, i) => {
                return (
                  <Link
                    key={i}
                    className="font-primary font-normal text-[21px] text-[#000000] px-3 block"
                  >
                    {item}
                  </Link>
                );
              })}
              <button className="bg-primary font-primary px-4 py-4 text-[#FFFFFF] rounded-[5px] font-normal text-[21px]">
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//
