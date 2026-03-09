function ConsentBox({
  accepted,
  setAccepted,
  loading,
  error,
  setError,
  handleContinue,
  onLearnMore,
  consentText,
}) {
  return (
    <div className="consent-box">
      <label className="consent-label">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => {
            setAccepted(e.target.checked);
            if (e.target.checked) {
              setError('');
            }
          }}
        />
        <span>{consentText}</span>
      </label>

      {error ? <p className="error-text">{error}</p> : null}

      <div className="hero-actions">
        <button className="primary-btn" onClick={handleContinue} disabled={loading}>
          {loading ? 'redirecting...' : 'Continue to GMTRADE'}
        </button>

        <button className="secondary-btn" type="button" onClick={onLearnMore}>
          How it works
        </button>
      </div>
    </div>
  );
}

export default ConsentBox;