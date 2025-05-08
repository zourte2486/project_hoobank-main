import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimateOnScroll = ({ children, from = 'left', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    bottom: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[from]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
