import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            name: "Chordscraft",
            category: "Institute of Music",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
            metrics: "Music Education Platform",
            link: "https://chordscraftinstituteofmusic.com/"
        },
        {
            name: "Neoride",
            category: "Fast Way to Travel",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
            metrics: "Transportation Service",
            link: "https://ride-swift-woad.vercel.app/"
        },
        {
            name: "AharSetu",
            category: "Food Distribution Platform",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
            metrics: "Community Service",
            link: "https://aharsetu-alpha.vercel.app/"
        },
        {
            name: "AgroWatch",
            category: "Agriculture Monitoring",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
            metrics: "Smart Farming Solution",
            link: "https://agro-watch-demo.vercel.app/"
        },
    ];

    return (
        <section className="gallery-section" data-testid="gallery-section">
            <div className="gallery-container">
                <motion.div
                    className="section-header-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title-tenz">FEATURED PROJECTS</h2>
                </motion.div>

                <div className="gallery-grid" data-testid="gallery-grid">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            data-testid={`project-${idx}`}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            <img src={project.image} alt={project.name} className="gallery-image" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <span className="gallery-category">{project.category}</span>
                                    <h3 className="gallery-name">{project.name}</h3>
                                    <span className="gallery-metrics">{project.metrics}</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
