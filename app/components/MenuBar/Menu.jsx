'use client'

import styles from "./page.module.scss";
import Header from "./header";
import Menu from "./menu";
import VerticalPixelTransition from "./pixelTransition/vertical";
import Hero from "@/app/HeroPage/Hero";
import { useState } from "react";

const Menu = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);
 
return (
    <main className={styles.main}>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      <VerticalPixelTransition menuIsActive={menuIsActive} />
      <Hero />
    </main>
  )
}

export default Menu
