function FaqPage() {
  return (
    <section className="content-page">
      <span className="kicker">FAQ</span>
      <h2>Frequently asked questions</h2>

      <div className="faq-grid">
        <article className="faq-item">
          <h3>Is this the official GMTRADE website?</h3>
          <p>
            No. This is an independent landing page that redirects you to the
            official GMTRADE registration page.
          </p>
        </article>

        <article className="faq-item">
          <h3>Do I pay extra by using this link?</h3>
          <p>
            No. The referral link itself does not add any extra cost.
          </p>
        </article>

        <article className="faq-item">
          <h3>What happens after I click?</h3>
          <p>
            Your click and consent confirmation are recorded, then you are
            redirected to the GMTRADE referral page.
          </p>
        </article>

        <article className="faq-item">
          <h3>Do I need a wallet to use GMTRADE?</h3>
          <p>
            Yes. GMTRADE works with wallet connection, so users typically need a
            supported Solana wallet such as Phantom.
          </p>
        </article>

        <article className="faq-item">
          <h3>Is Phantom wallet required?</h3>
          <p>
            Not necessarily, but Phantom is one of the easiest options for new
            users. Other supported Solana wallets may also work depending on the
            platform.
          </p>
        </article>

        <article className="faq-item">
          <h3>What does the referral link do?</h3>
          <p>
            The referral link tells GMTRADE that you arrived through this page.
            Depending on GMTRADE’s referral system, that may apply a referral
            code or discount flow automatically.
          </p>
        </article>

        <article className="faq-item">
          <h3>Will my wallet be created on this website?</h3>
          <p>
            No. This website does not create or manage wallets. Wallet setup and
            wallet connection are handled through the wallet provider and the
            official GMTRADE platform.
          </p>
        </article>

        <article className="faq-item">
          <h3>Do I connect my wallet on this page?</h3>
          <p>
            No. This page only provides information, consent confirmation, and
            redirection. Wallet connection happens on GMTRADE itself.
          </p>
        </article>

        <article className="faq-item">
          <h3>Is any personal information stored here?</h3>
          <p>
            This page stores only basic click analytics and consent-related
            information needed for referral tracking and page statistics. It does
            not store wallet keys or wallet seed phrases.
          </p>
        </article>

        <article className="faq-item">
          <h3>Can I use this page from mobile?</h3>
          <p>
            Yes. The site is responsive and can be opened on desktop, laptop,
            tablet, and mobile devices.
          </p>
        </article>

        <article className="faq-item">
          <h3>What if I already have Phantom installed?</h3>
          <p>
            Then you can simply continue to GMTRADE, open the platform, and
            connect your wallet when prompted.
          </p>
        </article>

        <article className="faq-item">
          <h3>Does this page provide investment advice?</h3>
          <p>
            No. This website is only an independent referral access page. It
            does not provide financial, trading, or investment advice.
          </p>
        </article>
      </div>
    </section>
  );
}

export default FaqPage;