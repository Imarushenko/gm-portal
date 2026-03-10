import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConsentBox from '../components/ConsentBox';

function HomePage() {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const consentText =
    'I understand that this page uses a referral link and that click analytics may be recorded before I continue to the official GMTRADE registration page.';

  const handleContinue = async () => {
    if (!accepted) {
      setError('please confirm the checkbox before continuing');
      const joinSection = document.getElementById('join');
      if (joinSection) {
        joinSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const newTab = window.open('about:blank', '_blank');

    if (newTab) {
      newTab.document.write(`
    <html>
      <head><title>Redirecting...</title></head>
      <body style="font-family: Arial, sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; background:#0b1020; color:white;">
        <div style="text-align:center;">
          <h2>Redirecting to GMTRADE...</h2>
          <p>Please wait a few seconds.</p>
        </div>
      </body>
    </html>
  `);
      newTab.document.close();
    }

    try {
      setLoading(true);
      setError('');

      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${apiUrl}/api/referral-click`, {
        source: 'google',
        consentAccepted: true,
        consentVersion: 'v1',
        consentText,
      });

      console.log('api response:', res.data);

      const targetUrl =
        res?.data?.referralUrl || 'https://gmtrade.xyz/referrals/?ref=mtb';

      if (newTab) {
        newTab.location.href = targetUrl;
      } else {
        window.location.href = targetUrl;
      }
    } catch (err) {
      console.error(err);

      if (newTab) {
        newTab.location.href = 'https://gmtrade.xyz/referrals/?ref=mtb';
      } else {
        window.location.href = 'https://gmtrade.xyz/referrals/?ref=mtb';
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = () => {
      handleContinue();
    };

    window.addEventListener('gmtrade-join-now-click', handler);
    return () => window.removeEventListener('gmtrade-join-now-click', handler);
  }, [accepted, loading]);

  return (
    <section className="hero" id="join">
      <div className="hero-left">
        <span className="kicker">Crypto platform gateway</span>

        <h1>
          Welcome to your
          <br />
          <span>GMTRADE</span>
          <br />
          access page
        </h1>

        <p className="hero-text">
          A clean gateway to the official GMTRADE registration page through my referral
          link, with transparent disclosure and a modern one-click flow.
        </p>

        <ConsentBox
          accepted={accepted}
          setAccepted={setAccepted}
          loading={loading}
          error={error}
          setError={setError}
          handleContinue={handleContinue}
          onLearnMore={() => navigate('/about')}
          consentText={consentText}
        />

        <p className="hero-note">
          Disclosure: this page contains a referral link. I may receive GM token rewards
          if you register through it.
        </p>
      </div>

      <div className="hero-right">
        <div className="visual">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>

          <div className="rings rings-a">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div className="rings rings-b">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>

          <div className="floating-card top-card">
            <small>secure flow</small>
            <h3>Referral gateway</h3>
            <p>Track click, then continue to the official GMTRADE page.</p>
          </div>

          <div className="floating-card bottom-card">
            <small>transparent</small>
            <h3>Clear disclosure</h3>
            <p>This page clearly states that the destination includes a referral link.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;