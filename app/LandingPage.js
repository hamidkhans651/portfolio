"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";


export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;


  return (
    <main className={styles.main}>

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I&apos;m a <span>Hamid skilled</span>Front End developer with strong
          focus on cloud native technologies with high quality & impactful
          digital experience products.
        </p>
      </div>
    </main>
  );
}
