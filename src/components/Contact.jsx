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
        <div className="flex gap-x-6 justify-center mt-[48px] items-center">
          <div className="w-[627px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="py-5 w-full border-2 outline-none rounded-[14px] border-[#AFAFAF] pl-[26px] font-primary font-normal text-[21px]"
            />
          </div>
          <button className="font-primary text-[24px] font-semibold text-[#FFFFFF] bg-primary rounded-[14px] py-[20px] px-[36px]">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
