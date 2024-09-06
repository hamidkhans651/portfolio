"use client";

import styles from "./page.module.scss";
import { useState } from "react";



import Header from "./components/MenuBar/header";
import Menu from "../app/components/MenuBar/menu";
import VerticalPixelTransition from "./components/MenuBar/pixelTransition/vertical";


export default function LandingPAge() {
  const [menuIsActive, setMenuIsActive] = useState(false);


  return (
    <main className={styles.main}>
      <Menu/>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      <VerticalPixelTransition menuIsActive={menuIsActive} />

    </main>
  );
}
