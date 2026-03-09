const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.error('mongodb connection error:', err.message));

const clickSchema = new mongoose.Schema(
  {
    source: { type: String, default: 'google' },
    ip: { type: String, default: '' },
    userAgent: { type: String, default: '' },
    consentAccepted: { type: Boolean, default: false },
    consentVersion: { type: String, default: 'v1' },
    consentText: { type: String, default: '' },
    consentAcceptedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Click = mongoose.model('Click', clickSchema);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/referral-click', async (req, res) => {
  try {
    if (!req.body.consentAccepted) {
      return res.status(400).json({
        ok: false,
        error: 'consent is required before continuing',
      });
    }

    await Click.create({
      source: req.body.source || 'google',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '',
      userAgent: req.headers['user-agent'] || '',
      consentAccepted: true,
      consentVersion: req.body.consentVersion || 'v1',
      consentText: req.body.consentText || '',
      consentAcceptedAt: new Date(),
    });

    res.json({
      ok: true,
      referralUrl: 'https://gmtrade.xyz/referrals/?ref=mtb',
    });
  } catch (err) {
    console.error('save click error:', err.message);
    res.status(500).json({ ok: false, error: 'failed to save click' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});