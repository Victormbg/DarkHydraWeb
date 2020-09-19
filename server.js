const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var firebase = require("firebase/app");
require('firebase/database');
var firebaseConfig = {
    apiKey: "AIzaSyCWgMOkOknFuNi5olqGBnM3hgnfg57WUbA",
    authDomain: "darkhydra-1572877735000.firebaseapp.com",
    databaseURL: "https://darkhydra-1572877735000.firebaseio.com",
    projectId: "darkhydra-1572877735000",
    storageBucket: "darkhydra-1572877735000.appspot.com",
    messagingSenderId: "725846488547",
    appId: "1:725846488547:web:7c9eea2eb934e0bdd0dcd6"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var banco = database.ref('Jogos/')

function GravarJogos(NomeJogo,NomeUsuario) {
    banco.push({
        Nome_Do_Jogo: NomeJogo,
        Nome_Do_Usuario: NomeUsuario,
    });
    return console.log("Sucesso gravado no Firebase")
}
function LerJogos() {
    banco.on('value', function (snapshot) {
        console.log(snapshot.val());
    });
}


app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        NomeJogo: req.body.NomeJogo,
        NomeUsuario: req.body.NomeUsuario
    };
    var NomeJogo = response.NomeJogo;
    var NomeUsuario = response.NomeUsuario;
    console.log(response);
    GravarJogos(NomeJogo,NomeUsuario)
    res.end(JSON.stringify(response));
})

app.listen(3000) 