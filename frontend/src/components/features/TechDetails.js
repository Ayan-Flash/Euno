import React from 'react';
import { motion } from 'framer-motion';

const TechDetails = () => {
    return (
        <section className="tech-specs-section" data-testid="tech-specs-section">
            <div className="tech-specs-container">
                <motion.div
                    className="section-header-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label-tenz">TECH DETAILS</span>
                    <h2 className="section-title-tenz">TECHNICAL SPECIFICATIONS</h2>
                </motion.div>

                <div className="tech-specs-grid">
                    <motion.div
                        className="tech-spec-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="tech-spec-heading">CAPABILITIES</h3>
                        <ul className="tech-spec-list">
                            <li>Full-Stack Development</li>
                            <li>Cloud Architecture Design</li>
                            <li>API Development & Integration</li>
                            <li>UI/UX Design & Prototyping</li>
                            <li>DevOps & CI/CD Pipeline</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="tech-spec-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="tech-spec-heading">REQUIREMENTS</h3>
                        <ul className="tech-spec-list">
                            <li>Project Vision & Goals</li>
                            <li>Target Audience Definition</li>
                            <li>Technical Requirements</li>
                            <li>Design Preferences</li>
                            <li>Timeline & Budget</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="tech-spec-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="tech-spec-heading">DELIVERABLES</h3>
                        <ul className="tech-spec-list">
                            <li>Production-Ready Application</li>
                            <li>Complete Documentation</li>
                            <li>Testing & QA Reports</li>
                            <li>Deployment Configuration</li>
                            <li>Post-Launch Support</li>
                            <li>Training & Knowledge Transfer</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechDetails;
