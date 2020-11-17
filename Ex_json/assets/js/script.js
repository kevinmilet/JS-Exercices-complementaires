// Variables

// stockage de l'adresse du fichier json dans une constante
const productCatalog = 'assets/json/productCatalog.json';

// initialisation des variables pour les calculs
let total = 0;
let average = 0;
let moreExpensice = 0;
let lessExpensive = 0;


// initialisation de la variable qui incrémentera les ids
let newId = 0;


// initialisation du tableau qui récupérera les données
let products = [];


// initialisation des boutons
const btnTotal = document.querySelector('#btnTotal');
const btnAverage = document.querySelector('#btnAverage');
const btnMoreExpensive = document.querySelector('#btnMoreExpensive');
const btnLessExpensive = document.querySelector('#btnLessExpensive');


// on récupère le fichier json
fetch(productCatalog)
    .then(response => response.json())
    .then(response => {
        products = response;
        appendDom(products)
    });


// fonction de remplissage de la page avec le contenu
// dans les card
function appendDom(products) {
    // on boucle sur le tableau récupéré grace au fetch()
    products.forEach((element) => {

        // on récupère l'id la card
        // et on la stocke dans une variable
        let colCard = document.getElementById('colCard');

        // on clone la card
        let colCardClone = colCard.cloneNode(true);

        // on incrémente les ids des éléments html de la card
        // et on ajoute le contenu
        colCardClone.id = 'colCardClone' + newId;
        document.querySelector('.row').appendChild(colCardClone);

        colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
        colCardClone.querySelector('#cardImg' + newId).src = element.image + '?' + newId;

        colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
        colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

        colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
        colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

        colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
        colCardClone.querySelector('#cardContent' + newId).innerHTML = element.detail;

        // on incrémente l'id
        newId++
    });
};


// fonction qui retourne le total du prix des articles
btnTotal.onclick = function() {
    // on boucle sur le tableau récupéré grace au fetch()
    products.forEach((element) => {
        total += parseInt(element.price);
    });
    alert('Le total des produits est de: ' + total + ' €');
}


// fonction qui retourne la moyenne des prix
btnAverage.onclick = function() {
    // on boucle sur le tableau récupéré grace au fetch()
    products.forEach((element) => {
        average += parseInt(element.price) / products.length;
    });
    alert('La moyenne du prix des produits est de: ' + average.toFixed(2) + ' €');
}


//fonction qui retourne le prix le plus élevé