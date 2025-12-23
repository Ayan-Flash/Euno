import React from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            description: "We analyze your requirements, market, and competition to define technical strategy.",
        },
        {
            num: "02",
            title: "Design",
            description: "Creating intuitive UI/UX prototypes that align with your brand identity.",
        },
        {
            num: "03",
            title: "Development",
            description: "Agile coding with regular updates, ensuring high-quality, scalable code.",
        },
        {
            num: "04",
            title: "Deployment",
            description: "Testing, optimization, and seamless launch to production environments.",
        },
    ];

    return (
        <section className="features-section-tenz" data-testid="workflow-section">
            <div className="features-container">
                <motion.div
                    className="section-header-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label-tenz">OUR PROCESS</span>
                    <h2 className="section-title-tenz">HOW WE WORK</h2>
                </motion.div>

                <div className="features-grid-tenz" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card-tenz"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="feature-icon-tenz" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', opacity: 0.5 }}>
                                {step.num}
                            </div>
                            <h3 className="feature-title-tenz">{step.title}</h3>
                            <p className="feature-description-tenz">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
