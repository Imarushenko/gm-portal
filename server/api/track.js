export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { consent } = req.body;

        if (!consent) {
            return res.status(400).json({ message: "Consent required" });
        }

        const referralUrl = "https://gmtrade.ai/?ref=YOUR_REF_CODE";

        return res.status(200).json({
            success: true,
            redirect: referralUrl,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
        });
    }
}