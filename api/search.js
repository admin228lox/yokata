import fetch from 'node-fetch';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export default async function handler(req, res) {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Missing query' });

    try {
        const response = await fetch(
            `https://api.soundcloud.com/tracks?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&q=${encodeURIComponent(q)}&limit=10`
        );
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
