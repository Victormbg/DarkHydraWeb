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

app.get('/ListaJogos.html',function(req,res){
    res.send(__dirname + "/" + "ListaJogos.html", {name: 'Victor'});
});

app.post('/CadastraJogos.html', urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/" + "CadastraJogos.html");
})

app.post('/ConfirmaCadastraJogos.html', urlencodedParser, function (req, res) {
    res.send('<h1>Cadastrado com sucesso</h1>');
    response = {
        tituloJogo: req.body.tituloJogo,
        descJogo: req.body.descJogo,
        tagsJogo: req.body.tagsJogo,
        imagem1: req.body.imagem1,
        imagem2: req.body.imagem2,
        imagem3: req.body.imagem3,
        imagem4: req.body.imagem4,
    };
    var tituloJogo = response.tituloJogo;
    var descJogo = response.descJogo;
    var tagsJogo = response.tagsJogo;
    var imagem1 = response.imagem1;
    var imagem2 = response.imagem2;
    var imagem3 = response.imagem3;
    var imagem4 = response.imagem4;
    console.log(response);
    funcoes.GravarJogos(tituloJogo, descJogo, tagsJogo, imagem1, imagem2, imagem3, imagem4);
    //console.log(LerNomesJogos()); 
})

app.listen(3000) 