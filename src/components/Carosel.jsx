import sliderOne from "../assets/slider.png";
import sliderTwo from "../assets/slider2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quote from "../assets/quote.png"
const Carosel = () => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  //
  const sliderArray = [
    {
      image: sliderOne,
      comment:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Rayan dal",
      title: "Manager",
    },
    {
      image: sliderOne,
      comment:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Jon Doe",
      title: "CEO",
    },
    {
      image: sliderTwo,
      comment:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Branded Ayke",
      title: "Founder",
    },
    {
      image: sliderOne,
      comment:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Shakil",
      title: "Bulder",
    },
  ];

  //
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderArray.map((item, i) => {
          return (
            <div key={i}>
              <div className="h-full w-full bg-[#F8F8F8] py-[55px] px-[48px] rounded-[14px] flex gap-x-4 items-center">
                <div>
                  <img src={item.image} alt="slider" />
                </div>

                <div>
                  <div className="relative">
                    <p className="mt-[22px] max-w-[921px] text-[21px] font-primary font-normal text-[#000000] mx-auto text-left">
                      {item.comment}
                    </p>
                    <div className="absolute left-[-2%] top-[-12%]">
                      <img src={quote} alt="quote" />
                    </div>
                    <div className="absolute left-[19%] bottom-[-9%]">
                      <img src={quote} alt="quote" />
                    </div>
                  </div>
                  <h4 className="text-[#000000] font-primary font-medium text-[24px] text-left">
                    {item.name}
                  </h4>
                  <h5 className="font-primary font-normal text-[#000000] text-[19px] text-left">{item.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carosel;
