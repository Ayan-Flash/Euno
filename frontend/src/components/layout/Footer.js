import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
