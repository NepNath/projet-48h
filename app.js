const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/html', express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/login.html'))
})

app.get('/register', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/register.html'))
})

app.get('/offres', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/offres.html'))
})

app.get('/transport', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/deplacer.html'))
})

app.get('/informations', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/informations.html'))
})

app.listen(port, '0.0.0.0', () => {
    console.log(`TBMerde listening at http://localhost:${port}`);
});