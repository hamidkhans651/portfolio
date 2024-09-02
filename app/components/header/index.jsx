'use client'

import styles from '../style.module.scss'

import { useState } from 'react';



export default function Home() {



  const [isActive, setIsActive] = useState(false);



  return (

    <>

    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>

      <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

    </div>

    </>

  )

}