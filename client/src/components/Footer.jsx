import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="logo">
                        <div className="logo-mark">G</div>
                        <div className="logo-text">
                            <span className="logo-title">GM Portal</span>
                            <span className="logo-sub">gateway</span>
                        </div>
                    </div>

                    <p className="footer-text">
                        Independent access portal that redirects users to the official GMTRADE platform through a referral link.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Navigation</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/terms">Terms</Link>
                </div>

                <div className="footer-links">
                    <h4>Notice</h4>
                    <p className="footer-text small">
                        This website is not the official GMTRADE website and is not affiliated
                        with GMTRADE as an official corporate property.
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2026 gmtrade-portal.com</span>
                <span>Independent referral access page</span>
            </div>
        </footer>
    );
}

export default Footer;