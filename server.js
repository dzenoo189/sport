// server.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json()); // Omogućava parsiranje JSON tela zahteva

app.post('/login', (req, res) => {
  const { ime, sifra } = req.body;
  if (ime === 'dzenan' && sifra === 'dzenan2003') {
    res.status(200).json({ message: 'Uspešno prijavljivanje!' });
  } else {
    res.status(401).json({ message: 'Pogrešno korisničko ime ili šifra.' });
  }
});

app.listen(port, () => {
  console.log(`Server slusa na portu ${port}`);
});
