// https://api.nasa.gov/ -> browse API's
const express = require('express');
const axios = require('axios');
const app = express();
//const PORT = 3000; (localhost)

const NASA_API_KEY = 'XVwQbDvwKaCgs4HdnkigurCnUL01oaCE3qovRL1L';

app.get('/api/image', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Errore nel recupero dei dati dall\'API NASA');
    }
});

app.use(express.static('public'));

//app.listen(PORT, () => {
//    console.log(`Server avviato su http://localhost:${PORT}`);
//});

module.exports = app;