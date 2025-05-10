import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  
  const buttonClasses = `${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer 
    hover:scale-105 hover:bg-primary transition-transform duration-300`;

  const innerContainerClasses = `${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full 
    group hover:shadow-lg transition-all duration-300`;

  const textClasses = "font-poppins font-medium text-[18px] leading-[23.4px]";

  return (
    <button 
      className={buttonClasses}
      aria-label="Get Started"
    >
      <div className={innerContainerClasses}>
        <div className={`${styles.flexStart} flex-row items-center gap-2`}>
          <p className={textClasses}>
            <span className="text-gradient">Get</span>
          </p>
          <img 
            src={arrowUp} 
            alt="arrow-up" 
            className="w-[23px] h-[23px] object-contain transition-transform group-hover:translate-y-[-2px]" 
          />
        </div>
        
        <p className={`${textClasses} group-hover:text-transparent transition-all duration-300`}>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;
