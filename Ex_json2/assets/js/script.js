// initialisation de la variable qui incrémentera les ids
let newId = 0;

// on récupère le fichier json
// et on boucle pour récupérer les données
// pour les afficher sur les différentes card
fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => {

        // on boucle sur le tableau récupéré grace au fetch()
        json.forEach((element) => {

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

    });