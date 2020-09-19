const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var funcoes = require('./FirebaseFunctions.js');

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/cadastraJogos', urlencodedParser, function (req, res) {
    response = {
        NomeJogo: req.body.NomeJogo,
        NomeUsuario: req.body.NomeUsuario
    };
    var NomeJogo = response.NomeJogo;
    var NomeUsuario = response.NomeUsuario;
    console.log(response);
    funcoes.GravarJogos(NomeJogo, NomeUsuario);
    //console.log(LerNomesJogos());
    res.sendFile(path.join(__dirname, '/public/ListaJogos.html'));
})

app.listen(3000) 