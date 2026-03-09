const mongoose = require('mongoose');

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

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

const Click = mongoose.models.Click || mongoose.model('Click', clickSchema);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'method not allowed',
    });
  }

  try {
    if (!req.body.consentAccepted) {
      return res.status(400).json({
        ok: false,
        error: 'consent is required before continuing',
      });
    }

    await connectToDatabase();

    await Click.create({
      source: req.body.source || 'google',
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '',
      userAgent: req.headers['user-agent'] || '',
      consentAccepted: true,
      consentVersion: req.body.consentVersion || 'v1',
      consentText: req.body.consentText || '',
      consentAcceptedAt: new Date(),
    });

    return res.status(200).json({
      ok: true,
      referralUrl: 'https://gmtrade.xyz/referrals/?ref=mtb',
    });
  } catch (err) {
    console.error('save click error:', err.message);

    return res.status(500).json({
      ok: false,
      error: 'failed to save click',
    });
  }
};