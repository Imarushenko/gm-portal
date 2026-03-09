module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { consentAccepted } = req.body;

        if (!consentAccepted) {
            return res.status(400).json({ message: 'Consent required' });
        }

        const referralUrl = 'https://gmtrade.xyz/referrals/?ref=mtb';

        return res.status(200).json({
            success: true,
            referralUrl,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};