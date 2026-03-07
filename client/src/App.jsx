import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    try {
      setLoading(true);

      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${apiUrl}/api/referral-click`, {
        source: 'main-button',
      });

      window.location.href = res.data.referralUrl;
    } catch (err) {
      console.error(err);
      window.location.href = 'https://gmtrade.xyz/referrals/?ref=mtb';
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>GMTRADE Referral</h1>
        <p>
          Learn about GMTRADE and join using my referral link.
        </p>

        <ul>
          <li>simple explanation</li>
          <li>clean landing page</li>
          <li>single CTA button</li>
        </ul>

        <button onClick={handleJoin} disabled={loading}>
          {loading ? 'redirecting...' : 'join via referral'}
        </button>

        <p className="note">
          disclosure: this page contains a referral link and i may receive token rewards if you register through it.
        </p>
      </div>
    </div>
  );
}

export default App;