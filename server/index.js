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
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.error('mongodb connection error:', err.message));

const clickSchema = new mongoose.Schema(
  {
    source: { type: String, default: 'landing-page' },
    ip: { type: String, default: '' },
    userAgent: { type: String, default: '' },
  },
  { timestamps: true }
);

const Click = mongoose.model('Click', clickSchema);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/referral-click', async (req, res) => {
  try {
    await Click.create({
      source: req.body.source || 'landing-page',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '',
      userAgent: req.headers['user-agent'] || '',
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