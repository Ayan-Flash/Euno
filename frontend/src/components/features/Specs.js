import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Specs = () => {
    return (
        <section className="specs-section" data-testid="specs-section">
            <div className="specs-container">
                <motion.div
                    className="specs-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1671417722838-3fbaa7f66203"
                        alt="Technology"
                        className="specs-image"
                    />
                    <div className="specs-overlay" />
                </motion.div>

                <motion.div
                    className="specs-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label-tenz">TECHNICAL SPECIFICATIONS</span>
                    <h2 className="specs-title" data-testid="specs-title">
                        SIMPLE TOOLS FOR
                        <br />
                        PEAK PERFORMANCE
                    </h2>
                    <p className="specs-description">
                        Our development stack is optimized for speed, reliability, and scalability.
                        Every tool, every framework, carefully chosen for maximum performance.
                    </p>

                    <div className="specs-list">
                        <div className="spec-item">
                            <div className="spec-label">FRONTEND</div>
                            <div className="spec-value">React 19, Next.js 14, TypeScript</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-label">BACKEND</div>
                            <div className="spec-value">FastAPI, Node.js, Python</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-label">DATABASE</div>
                            <div className="spec-value">PostgreSQL, MongoDB, Redis</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-label">INFRASTRUCTURE</div>
                            <div className="spec-value">AWS, Kubernetes, Docker</div>
                        </div>
                    </div>

                    <Button className="specs-cta" data-testid="specs-cta">
                        VIEW FULL STACK
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Specs;
