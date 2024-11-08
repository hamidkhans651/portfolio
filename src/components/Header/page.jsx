'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';
import Menubar from '../MenuBar';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }); },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)); }
            }
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${styles.header} `}>
                {/* Logo Section */}
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>Hamid</p>
                        <p className={styles.snellenberg}>Devloper</p>
                    </div>
                </div>

                {/* Navigation Links (Hidden on Mobile) */}
                <nav className="hidden md:flex">
                    <div className={styles.nav}>
                        <Magnetic>
                            <div className={styles.el}>
                                <Link href="/about">Work</Link>
                                <div className={styles.indicator}></div>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className={styles.el}>
                                <Link href="/about">About</Link>
                                <div className={styles.indicator}></div>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className={styles.el}>
                                <Link href="/contact">Contact</Link>
                                <div className={styles.indicator}></div>
                            </div>
                        </Magnetic>
                    </div>
                </nav>

                {/* Menu Button (Visible on Mobile) */}
                <nav className="md:hidden absolute top-1 right-4">
                    {isVisible && (
                        <span className={styles.scrollComponent}>
                            <Menubar />
                        </span>
                    )}
                </nav>
            </div>

            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive); }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
