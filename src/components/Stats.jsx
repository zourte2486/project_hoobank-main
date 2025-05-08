import { stats } from "../constants";
import CountUp from "react-countup";

import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {<CountUp start={0} end={3800} duration={10} separator="" />}+
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
           Active Users
      </p>
    </div>

    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {<CountUp start={0} end={300} duration={5} separator="," />}+
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
           Companys Trusted
      </p>
    </div>

    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        ${<CountUp start={0} end={500} duration={5} separator="," />}M+
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
           Transactions
      </p>
    </div>
  </section>
);

export default Stats;
