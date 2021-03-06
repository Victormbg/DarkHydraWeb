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

module.exports.GravarJogos = function GravarJogos(tituloJogo, descJogo, tagsJogo, imagem1, imagem2, imagem3, imagem4) {
    banco.push({
        Titulo_Do_Jogo: tituloJogo,
        Descricao_Do_Usuario: descJogo,
        Tags_Do_Jogo: tagsJogo,
        Imagem1_Do_Jogo: imagem1,
        Imagem2_Do_Jogo: imagem2,
        Imagem3_Do_Jogo: imagem3,
        Imagem4_Do_Jogo: imagem4,
    });
    return console.log("Sucesso gravado no Firebase")
}

module.exports.LerNomesJogos = function LerNomesJogos() {
    banco.once("value", function (snapshot) {
        var Nome = [];
        snapshot.forEach(function (childSnapshot) {
            var getNome = childSnapshot.val().Nome_Do_Jogo;
            Nome.push(getNome);
            return this.childSnapshot;
        });
        return Nome;
    });
};