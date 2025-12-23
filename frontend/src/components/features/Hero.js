import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import BlurText from "@/components/react-bits/BlurText";

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.section
            ref={heroRef}
            className="tenz-hero"
            style={{ opacity: heroOpacity, scale: heroScale }}
            data-testid="hero-section"
        >
            <div className="hero-bg-video">
                <div className="hero-gradient-overlay" />
            </div>

            <div className="hero-content-tenz">
                <BlurText
                    text="EUNO"
                    delay={0.4}
                    animateBy="letters"
                    className="hero-title-tenz"
                />

                <motion.p
                    className="hero-subtitle-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    data-testid="hero-subtitle"
                >
                    Elite full-stack development team. Built for performance.
                    <br />
                    Engineered for excellence.
                </motion.p>

                <motion.div
                    className="hero-cta-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Button
                        className="cta-primary-tenz"
                        data-testid="hero-cta-button"
                        onClick={scrollToContact}
                    >
                        START PROJECT
                    </Button>
                </motion.div>
            </div>

            <div className="hero-scroll-indicator">
                <span className="scroll-text">SCROLL</span>
                <div className="scroll-line" />
            </div>
        </motion.section>
    );
};

export default Hero;
