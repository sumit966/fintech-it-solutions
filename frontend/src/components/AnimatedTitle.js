import { motion } from "framer-motion";

const AnimatedTitle = ({ text }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, rotateX: -90, y: 50 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl font-extrabold tracking-wide text-white"
      style={{
        textShadow:
          "0 10px 30px rgba(0,0,0,0.6), 0 2px 5px rgba(0,0,0,0.4)",
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;
