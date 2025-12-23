import React from 'react';
import { motion } from 'framer-motion';

const Bio = () => {
    const achievements = [
        { year: "2024", title: "Best Tech Innovation", org: "TechCrunch Disrupt" },
        { year: "2024", title: "Top Developer Tool", org: "GitHub Awards" },
        { year: "2023", title: "Startup of the Year", org: "Product Hunt" },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideIn = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    return (
        <section className="bio-section" data-testid="bio-section">
            <div className="bio-container">
                <motion.div
                    className="bio-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                >
                    <motion.div className="bio-image-wrapper" variants={fadeIn}>
                        <img
                            src="/images/team.jpg"
                            alt="Team"
                            className="bio-image"
                        />
                        <div className="bio-image-overlay" />
                    </motion.div>

                    <motion.div className="bio-content" variants={slideIn}>
                        <span className="bio-label">ABOUT US</span>
                        <h2 className="bio-title" data-testid="bio-title">
                            Team Euno
                        </h2>
                        <p className="bio-role">Full Stack Development Team</p>
                        <p className="bio-description">
                            A dynamic team of six talented developers dedicated to building high-performance applications,
                            exceptional system architecture, and delivering results that exceed expectations.
                        </p>

                        <div className="achievements-grid">
                            <div className="achievement-label">ACHIEVEMENTS</div>
                            {achievements.map((achievement, idx) => (
                                <motion.div
                                    key={idx}
                                    className="achievement-item"
                                    variants={fadeIn}
                                    data-testid={`achievement-${idx}`}
                                >
                                    <div className="achievement-header">
                                        <span className="achievement-title">{achievement.title}</span>
                                        <span className="achievement-year">{achievement.year}</span>
                                    </div>
                                    <span className="achievement-org">{achievement.org}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
