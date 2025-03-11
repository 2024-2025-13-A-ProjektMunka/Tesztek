require('dotenv').config();
const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    try {
        return res.status(200).render('index.ejs');
    } catch (error) {
        return res.status(500).json({ msg: 'Valami hiba: ' + error.message });
    }
});
