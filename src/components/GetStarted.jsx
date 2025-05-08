import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer 
                   hover:scale-102 hover:bg-primary transition-all duration-300 `}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full 
                    group transition-all duration-300`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] 
                       transition-all duration-300">
          <span className="text-gradient" >Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px] 
                    group-hover:text-transparent transition-all duration-300">
        <span className="text-gradient hover:bg-transparent">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
