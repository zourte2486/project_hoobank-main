import styles from "./style";
import React, { Suspense, lazy } from "react";
import AnimateOnScroll from "./components/AnimateOnScroll";

const Billing = lazy(() => import("./components/Billing"));
const Business = lazy(() => import("./components/Business"));
const CardDeal = lazy(() => import("./components/CardDeal"));
const Clients = lazy(() => import("./components/Clients"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
const Stats = lazy(() => import("./components/Stats"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Hero = lazy(() => import("./components/Hero"));

const App = () => (
  <Suspense>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AnimateOnScroll from="bottom">
            <Hero />
          </AnimateOnScroll>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AnimateOnScroll from="left">
            <Stats />
          </AnimateOnScroll>
          <AnimateOnScroll from="right">
            <Business />
          </AnimateOnScroll>
          <AnimateOnScroll from="left">
            <Billing />
          </AnimateOnScroll>
          <AnimateOnScroll from="right">
            <CardDeal />
          </AnimateOnScroll>
          <AnimateOnScroll from="bottom">
            <Testimonials />
          </AnimateOnScroll>
          <AnimateOnScroll from="left">
            <Clients />
          </AnimateOnScroll>
          <AnimateOnScroll from="bottom">
            <CTA />
          </AnimateOnScroll>
          <AnimateOnScroll from="bottom">
            <Footer />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </Suspense>
);

export default App;
