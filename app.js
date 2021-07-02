const express = require('express')
const app = express();

app.use('/static', express.static('public'));

const PORT =process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Servidor funcionando en ' + PORT)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

