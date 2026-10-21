// @ts-nocheck
const express = require('express');
// ... rest of your code
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>📱 Server Running Natively on Android like i had always wanted it to!</h1><p>Ready to deploy client solutions for me.</p>');
});


app.listen(PORT, '127.0.0.1:3000', () => {
    console.log(`🚀 Server live at http://localhost:${PORT}`);
});



