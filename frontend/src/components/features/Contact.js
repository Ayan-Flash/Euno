import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipientEmail = "ghoshayan371@gmail.com";
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormStatus("Opening your email client...");
        setTimeout(() => setFormStatus(""), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
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
    );
};

export default Contact;
