const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>📱 Server Running Natively on Android!</h1><p>Ready to deploy client solutions.</p>');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server live at http://127.0.0.1:${PORT}`);
});
