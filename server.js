// server.js
// https://api.nasa.gov/ -> browse API's
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// API Key per NASA (richiedila su https://api.nasa.gov/ se non ne hai una)
const NASA_API_KEY = 'XVwQbDvwKaCgs4HdnkigurCnUL01oaCE3qovRL1L'; // Sostituisci con la tua API Key

// Endpoint per ottenere l'immagine del giorno
app.get('/api/image', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Errore nel recupero dei dati dall\'API NASA');
    }
});

// Servire file statici per il frontend
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});