const express = require('express');
const app = express();
const PORT = 5002;

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Test server running' });
});

app.listen(PORT, () => {
    console.log(`Test server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
