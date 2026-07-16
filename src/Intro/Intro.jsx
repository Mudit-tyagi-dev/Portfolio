import React, { useEffect } from "react";
import { motion } from "framer-motion";
import './Intro.css';
import Particles from "./Background.jsx"; // Assuming Background.jsx is in the same directory



export default function IntroPage({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);
    return (
        <div className="intro-wrapper">
            <div className="particles-background">
                < Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={600}
                    particleSpread={20}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="intro-container">
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    Welcome to My World
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
                    Fasten Your Seat Belt
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 }}>
                    Get Dive Into My World
                </motion.p>
            </div>
        </div>

    );

}
