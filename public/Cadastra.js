import firebaseConfig from '/Firebase.js';
firebase.initializeApp(firebaseConfig);

function Cadastrar() {
    var banco = firebase.database().ref("Jogos/");
    banco.push({
        Jogo1: {
            number: 1,
            Nome: "Sonic"
        },
        Jogo2: {
            number: 1,
            Nome: "GTA"
        },
    });
    return "Sucesso"
}
