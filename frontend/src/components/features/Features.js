import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "AI-Powered Development",
            icon: "⚡",
            description: "Lightning-fast development with cutting-edge AI technology. Build smarter, ship faster.",
            specs: ["GPT-5 Integration", "Auto-Code Generation", "Real-time Optimization"],
            stat: "10x",
            statLabel: "Faster",
        },
        {
            title: "Cloud Architecture",
            icon: "☁️",
            description: "Enterprise-grade infrastructure that scales with your business. Always available, always fast.",
            specs: ["99.9% Uptime", "Auto-Scaling", "Global CDN"],
            stat: "99.9%",
            statLabel: "Uptime",
        },
        {
            title: "Real-Time Analytics",
            icon: "📊",
            description: "Deep insights into user behavior and performance metrics. Make data-driven decisions.",
            specs: ["Live Dashboard", "Custom Reports", "Predictive AI"],
            stat: "<100ms",
            statLabel: "Response",
        },
        {
            title: "Security First",
            icon: "🔒",
            description: "Military-grade encryption and security protocols. Your data, protected at every layer.",
            specs: ["256-bit Encryption", "GDPR Compliant", "SOC 2 Certified"],
            stat: "100%",
            statLabel: "Secure",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section className="features-section-tenz" data-testid="features-section">
            <div className="features-container">
                <motion.div
                    className="section-header-tenz"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label-tenz">SIGNATURE FEATURES</span>
                    <h2 className="section-title-tenz" data-testid="features-title">
                        BUILT FOR PERFORMANCE
                    </h2>
                </motion.div>

                <div className="features-grid-tenz" data-testid="features-grid">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card-tenz"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            data-testid={`feature-${idx}`}
                        >
                            <div className="feature-icon-tenz">{feature.icon}</div>
                            <h3 className="feature-title-tenz">{feature.title}</h3>
                            <p className="feature-description-tenz">{feature.description}</p>
                            <div className="feature-specs">
                                {feature.specs.map((spec, i) => (
                                    <span key={i} className="spec-badge">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                            <div className="feature-stat">
                                <div className="stat-value">{feature.stat}</div>
                                <div className="stat-label">{feature.statLabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
