import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    const teamMembers = [
        {
            name: "Ayan Ghosh",
            role: "Full Stack Developer",
            image: "/images/team/ayan.jpg",
            specialty: "Testing & QA",
        },
        {
            name: "Aritra Banerjee",
            role: "Full Stack Developer",
            image: "/images/team/aritra.jpg",
            specialty: "Backend Development",
        },
        {
            name: "Somya Ranjan Bhoi",
            role: "Full Stack Developer",
            image: "/images/team/somya.jpg",
            specialty: "Backend Development",
        },
        {
            name: "Tania Biswas",
            role: "Full Stack Developer",
            image: "/images/team/tania.jpg",
            specialty: "UI/UX Design",
        },
        {
            name: "Ankita Karan",
            role: "Full Stack Developer",
            image: "/images/team/ankita.jpg",
            specialty: "Frontend Development",
        },
        {
            name: "Aishwarya Das",
            role: "Full Stack Developer",
            image: "/images/team/aish.jpg",
            specialty: "Frontend Development",
        },
    ];

    return (
        <section className="gallery-section" data-testid="team-section">
            <div className="gallery-container">
                <motion.div
                    className="section-header-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label-tenz">OUR TEAM</span>
                    <h2 className="section-title-tenz">MEET TEAM EUNO</h2>
                </motion.div>

                <div className="gallery-grid" data-testid="team-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            data-testid={`team-member-${idx}`}
                        >
                            <img src={member.image} alt={member.name} className="gallery-image" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <h3 className="gallery-name">{member.name}</h3>
                                    <span className="gallery-category">{member.role}</span>
                                    <span className="gallery-metrics">{member.specialty}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
