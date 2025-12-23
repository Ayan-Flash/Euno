import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import "@/App.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const App = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

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

  const achievements = [
    { year: "2024", title: "Best Tech Innovation", org: "TechCrunch Disrupt" },
    { year: "2024", title: "Top Developer Tool", org: "GitHub Awards" },
    { year: "2023", title: "Startup of the Year", org: "Product Hunt" },
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace 'your-email@example.com' with your actual email address
    const recipientEmail = "your-email@example.com";
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormStatus("Opening your email client...");
    setTimeout(() => setFormStatus(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

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
    <div className="tenz-container" data-testid="app-container">
      {/* Diagonal Glowing Line */}
      <div className="diagonal-line"></div>

      {/* Scroll Progress */}
      <motion.div className="scroll-indicator" style={{ scaleX: scrollYProgress }} />

      {/* Hero Section - Full Screen Product Showcase */}
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
          <motion.h1
            className="hero-title-tenz"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            data-testid="hero-title"
          >
            EUNO
          </motion.h1>

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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

      {/* Bio Section */}
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

      {/* Video Showcase Section */}
      <section className="video-section" data-testid="video-section">
        <div className="video-container-tenz">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="video-header"
          >
            <h2 className="video-title">BEHIND THE CODE</h2>
            <p className="video-subtitle">Watch our process and philosophy</p>
          </motion.div>

          <motion.div
            className="video-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="video-placeholder" data-testid="video-placeholder">
              <div className="video-play-icon">▶</div>
              <img
                src="https://images.unsplash.com/photo-1752253604157-65fb42c30816"
                alt="Video thumbnail"
                className="video-thumbnail"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
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

      {/* Specs Showcase */}
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

      {/* Gallery Grid */}
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

      {/* Team Members Section */}
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

      {/* Technical Specifications */}
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

      {/* Contact Section */}
      <section className="contact-section-tenz" id="contact" data-testid="contact-section">
        <div className="contact-container-tenz">
          <motion.div
            className="section-header-tenz"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label-tenz">GET IN TOUCH</span>
            <h2 className="section-title-tenz" data-testid="contact-title">
              LET'S BUILD SOMETHING GREAT
            </h2>
          </motion.div>

          <motion.div
            className="contact-form-wrapper-tenz"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="contact-card-tenz">
              <form onSubmit={handleSubmit} className="contact-form-tenz" data-testid="contact-form">
                <div className="form-row">
                  <div className="form-group-tenz">
                    <label htmlFor="name" className="form-label-tenz">
                      NAME
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-tenz"
                      required
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div className="form-group-tenz">
                    <label htmlFor="email" className="form-label-tenz">
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-tenz"
                      required
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div className="form-group-tenz">
                  <label htmlFor="message" className="form-label-tenz">
                    PROJECT DETAILS
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea-tenz"
                    rows={6}
                    required
                    data-testid="contact-message-textarea"
                  />
                </div>

                <Button type="submit" className="submit-button-tenz" data-testid="contact-submit-button">
                  SEND MESSAGE
                </Button>

                <AnimatePresence>
                  {formStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="form-status-tenz"
                      data-testid="contact-form-status"
                    >
                      ✓ {formStatus}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-tenz" data-testid="footer">
        <div className="footer-content-tenz">
          <div className="footer-main-tenz">
            <div className="footer-brand-tenz">
              <h3 className="footer-logo-tenz" data-testid="footer-logo">
                EUNO
              </h3>
              <p className="footer-tagline-tenz" data-testid="footer-tagline">
                Elite full-stack development.
                <br />
                Built for performance. Engineered for excellence.
              </p>
            </div>

            <div className="footer-links-tenz">
              <div className="footer-column-tenz">
                <h4 className="footer-heading-tenz">Services</h4>
                <a href="#" className="footer-link-tenz">Web Development</a>
                <a href="#" className="footer-link-tenz">Mobile Apps</a>
                <a href="#" className="footer-link-tenz">Cloud Solutions</a>
                <a href="#" className="footer-link-tenz">Consulting</a>
              </div>

              <div className="footer-column-tenz">
                <h4 className="footer-heading-tenz">Company</h4>
                <a href="#" className="footer-link-tenz">About</a>
                <a href="#" className="footer-link-tenz">Projects</a>
                <a href="#contact" className="footer-link-tenz">Contact</a>
                <a href="#" className="footer-link-tenz">Careers</a>
              </div>

              <div className="footer-column-tenz">
                <h4 className="footer-heading-tenz">Connect</h4>
                <a href="#" className="footer-link-tenz" data-testid="footer-github">GitHub</a>
                <a href="#" className="footer-link-tenz" data-testid="footer-linkedin">LinkedIn</a>
                <a href="#" className="footer-link-tenz" data-testid="footer-twitter">Twitter</a>
                <a href="#" className="footer-link-tenz" data-testid="footer-dribbble">Dribbble</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-tenz">
            <p className="footer-copyright-tenz" data-testid="footer-copyright">
              © 2025 Euno. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
