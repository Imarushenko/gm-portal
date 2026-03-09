function AboutPage() {
  return (
    <section className="content-page about-page-compact">
      <span className="kicker">About</span>
      <h2>About this page</h2>

      <p>
        This is an independent landing page created to direct users to the official
        GMTRADE registration page through a referral link.
      </p>

      <p>
        The purpose of this page is to provide a cleaner and more transparent entry
        point before redirecting visitors to GMTRADE.
      </p>

      <div className="about-strip">
        <div className="about-box">
          <span>Destination</span>
          <strong>Official GMTRADE sign-up page</strong>
        </div>

        <div className="about-box">
          <span>Flow</span>
          <strong>Landing → Consent → Redirect</strong>
        </div>

        <div className="about-box">
          <span>Type</span>
          <strong>Independent referral page</strong>
        </div>
      </div>

      <section className="phantom-card">
        <div className="phantom-header">
          <div className="phantom-badge">Phantom wallet</div>

          <a
            href="https://phantom.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="phantom-link"
          >
            Get Phantom Wallet ↗
          </a>
        </div>

        <h3>How to connect with Phantom</h3>

        <p className="phantom-text">
          New to Solana apps? The simplest flow is to install Phantom, open
          GMTRADE through this page, connect your wallet, approve the request,
          and continue inside the platform.
        </p>

        <div className="phantom-steps">
          <div className="phantom-step">
            <div className="phantom-dot"></div>
            <span>Open GMTRADE</span>
          </div>

          <div className="phantom-step">
            <div className="phantom-dot"></div>
            <span>Install Phantom wallet</span>
          </div>

          <div className="phantom-step">
            <div className="phantom-dot"></div>
            <span>Connect wallet</span>
          </div>

          <div className="phantom-step">
            <div className="phantom-dot"></div>
            <span>Approve request</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutPage;