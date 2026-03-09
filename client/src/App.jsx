import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import TermsPage from './pages/TermsPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleJoinNow = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const joinSection = document.getElementById('join');
        if (joinSection) {
          joinSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
      return;
    }

    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.dispatchEvent(new CustomEvent('gmtrade-join-now-click'));
  };

  return (
    <div className="page">
      <div className="frame">
        <Navbar onJoinNow={handleJoinNow} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;