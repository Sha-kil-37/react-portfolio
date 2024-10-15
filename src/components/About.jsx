//
import about from "../assets/about.png";
const About = () => {
  // skill array
  const skillArray = ["UX", "Website Design", "App Design", "Graphic Design"];
  //
  return (
    <section className="pt-[70px]">
      <div className="container mx-auto flex  items-center">
        <div>
          <div className="absolute bg-primary bg-opacity-[80%] max-h-[83px] max-w-[374px] top-[12%] right-[50%] translate-x-[50%] overflow-hidden">
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <img className="h-full w-full" src={about} alt="about" />
        </div>
        <div>
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
