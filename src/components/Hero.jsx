import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-16 sm:mt-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 md:mt-0 mt-4 hover:scale-105 transition-all">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-sm md:text-base `}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[40px] sm:text-[52px] ss:text-[72px] text-white leading-[55px] sm:leading-[75px] ss:leading-[100.8px] animate-fadeIn">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold text-[40px] sm:text-[52px] ss:text-[68px] text-white leading-[55px] sm:leading-[75px] ss:leading-[100.8px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-sm md:text-base animate-slideUp`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`}>
        <img 
          src={robot} 
          alt="billing" 
          className="w-[100%] md:w-[85%] h-auto relative z-[5] hover:scale-105 transition-transform duration-300 animate-float m-7"
          
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient blur-2xl" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 blur-2xl" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient blur-2xl" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
