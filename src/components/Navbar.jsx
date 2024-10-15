//
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
//
const Navbar = () => {
  // navMenu
  const navMenuArray = [
    "Home",
    "About me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];
  //
  // handle downloadCv
  // function handleDownloadCV() {

  // }

  //
  return (
    <nav className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex gap-x-3 flex-wrap items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//
