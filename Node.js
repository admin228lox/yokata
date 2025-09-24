// proxy.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = 'f4othN28RoCv06w7LaobVwFg';
const CLIENT_SECRET = 'B7DqwZ21eoEIKe26oJ25QFvCL';

app.get('/search', async (req, res) => {
    const q = req.query.q;
    const url = `https://api.soundcloud.com/tracks?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&q=${encodeURIComponent(q)}&limit=10`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
