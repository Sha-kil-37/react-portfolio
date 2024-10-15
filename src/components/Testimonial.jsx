
import Carosel from "../components/Carosel"
const Testimonial = () => {
  //
  //
  return (
    <section className="pt-[139px]">
      <div className="container mx-auto">
        <h2 className="text-center text-[65px] font-primary font-semibold text-[#000000]">
          Testimonials
        </h2>
        <p className="mt-[22px] max-w-[921px] text-[21px] font-primary font-normal text-[#000000] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="mt-[72px]">
          <Carosel />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
