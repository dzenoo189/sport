require('dotenv').config(); // Učitaj varijable iz .env datoteke
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // Koristi novi port
 // Koristi PORT iz .env datoteke ili 4000 ako nije definisan

app.use(cors());
app.use(express.json());

const news = [
  "Vest 1: Veliki fudbalski meč se bliži!",
  "Vest 2: Košarkaški tim osvojio novi trofej!",
  "Vest 3: Teniseri se pripremaju za novi turnir.",
  "Vest 4: Atletičari obaraju rekorde na prvenstvu.",
  "Vest 5: Novi svetski rekord u skoku udalj!",
  "Vest 6: Fudbalski tim u finalu Lige šampiona!"
];

app.get('/novosti', (req, res) => {
  const randomNews = news[Math.floor(Math.random() * news.length)];
  res.json({ message: randomNews });
});

app.listen(port, () => {
  console.log(`Server sluša na portu ${port}`);
});
