import app from "../assets/appdesign.png";
import web from "../assets/webdesign.png";
import grapich from "../assets/grapich.png";
import uiux from "../assets/uiux.png";

const Services = () => {
  //
  const servicesArray = [
    { icon: uiux, title: "UI/UX" },
    { icon: web, title: "Web Design" },
    { icon: app, title: "App Design" },
    { icon: grapich, title: "Graphic Design" },
  ];

  //
  return (
    <section className="py-[140px]">
      <div className="container mx-auto">
        <h2 className="font-semibold text-[#000000] text-[65px] font-primary text-center">
          Services
        </h2>
        <p className="mt-4 mx-auto max-w-[932px] text-center text-[21px] font-primary text-[#000000] font-normal">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="mt-[40px] w-full card-container ">
          {servicesArray.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-[#F8F8F8] px-[18px] py-[54px] rounded-[14px] card text-center sm:text-left"
              >
                <img src={item.icon} alt="services" />
                <h3 className="font-primary text-[32px] font-semibold text-[#000000] mt-4">
                  {item.title}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
