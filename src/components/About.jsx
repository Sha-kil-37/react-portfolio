//
import about from "../assets/about.png";
const About = () => {
  // skill array
  const skillArray = ["UX", "Website Design", "App Design", "Graphic Design"];
  //
  return (
    <section className="pt-[70px]">
      <div className="container mx-auto xl:flex  2xl:flex items-center gap-x-3 lg:block">
        <div className="relative lg:mx-auto">
        <div className="about_overly"></div>
          <img className="h-full w-full" src={about} alt="about" />
        </div>
        <div className="md:text-center text-center lg:text-center">
          <h3 className="text-[65px] font-semibold font-primary text-[#000000]">
            About Me
          </h3>
          <p className="font-primary text-[21px] font-normal text-[#000000]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div>
            {skillArray.map((item, i) => {
              return (
                <div key={i} className="skill-box">
                  <span className="title font-primary font-semibold text-[24px]">
                    {item}
                  </span>
                  <div className="skill-bar">
                    <span className="skill-per">
                      <span className="range"></span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
//

// background: rgb(226, 226, 226);
// animation: progress 0.4s ease-in-out forwards;
