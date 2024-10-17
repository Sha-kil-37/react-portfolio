const Contact = () => {
  return (
    <section className="py-[139px]">
      <div className="container mx-auto">
        <h2 className="text-center text-[65px] font-primary font-semibold text-[#000000]">
          Lets Design Together
        </h2>
        <p className="font-primary text-[#000000] font-normal text-[21px] max-w-[932px] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>

        <div className="xl:flex 2xl:flex gap-x-6 justify-center mt-[48px] lg:block text-center xl:items-center 2xl:items-center">
          <div className="xl:w-[627px] 2xl:w-[627px] lg:w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="py-5 w-full border-2 outline-none rounded-[14px] border-[#AFAFAF] pl-[26px] font-primary font-normal text-[21px]"
            />
          </div>
          <button className="font-primary text-[24px] font-semibold text-[#FFFFFF] bg-primary rounded-[14px] xl:py-[20px] xl:px-[36px] 2xl:py-[20px] 2xl:px-[36px] lg:py-[10px] lg:px-[20px] py-2 px-2 lg:mt-4 md:mt-3 sm:mt-3 mt-3 xl:mt-0 2xl:mt-0">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
