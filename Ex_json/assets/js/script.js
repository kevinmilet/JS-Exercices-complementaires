// initialisation de la variable qui incrémentera les ids
let newId = 0;

// on récupère le fichier json
// et on boucle pour récupérer les données
// pour les afficher sur les différentes card
fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => {

        // on boucle sur le tableau récupéré grace au fetch()
        json.forEach((element, index) => {

            console.log(json[index].name);
            console.log(json[index].detail);
            console.log(json[index].price);
            console.log(json[index].image);

            // on incrémente l'id
            newId++

            // on récupère les id des éléments html de la card
            // et on les stocke dans une variable
            let card = document.getElementById('card01');
            let cardImgDiv = document.getElementById('cardImgDiv');
            let cardImg = document.getElementById('cardImg');
            let cardContentDiv = document.getElementById('cardContentDiv');
            let cardTitle = document.getElementById('cardTitle');
            let cardContent = document.getElementById('cardContent');
            let cardPrice = document.getElementById('cardPrice');

            // on clone les éléments html de la card
            let cardClone = card.cloneNode(true);
            let cardImgDivClone = cardImgDiv.cloneNode(true);
            let cardImgClone = cardImg.cloneNode(true);
            let cardContentDivClone = cardContentDiv.cloneNode(true);
            let cardTitleClone = cardTitle.cloneNode(true);
            let cardContentClone = cardContent.cloneNode(true);
            let cardPriceClone = cardPrice.cloneNode(true);

            // on incrémente les ids des éléments html de la card
            cardClone.id = 'cardClone' + newId;
            cardImgDivClone.id = 'cardImgDivClone' + newId;
            cardImgClone.id = 'cardImgClone' + newId;
            cardContentDivClone.id = 'cardContentDivClone' + newId;
            cardTitleClone.id = 'cardTitleClone' + newId;
            cardContentClone.id = 'cardContentClone' + newId;
            cardPriceClone.id = 'cardPriceClone' + newId;

            // on ajoute le clone de la card
            document.querySelector('.col').appendChild(cardClone);

            // on ajoute le clone de la div qui contient l'image
            // document.querySelector(cardClone.id).appendChild(cardImgDivClone);
        
            // on ajoute les données sur chaque éléments html
            document.getElementById(cardClone.id).appendChild(cardImgClone);
            document.getElementById('cardImgClone' + newId).src = json[index].image;

            document.getElementById(cardClone.id).appendChild(cardTitleClone);
            document.getElementById('cardTitleClone' + newId).innerHTML = json[index].name;

            document.getElementById(cardClone.id).appendChild(cardPriceClone);
            document.getElementById('cardPriceClone' + newId).innerHTML = json[index].price + ' €';

            document.getElementById(cardClone.id).appendChild(cardContentClone);
            document.getElementById('cardContentClone' + newId).innerHTML = json[index].detail;
        });

        
        // // on récupère l'entrée name de l'id 0
        // // et on l'affiche
        // document.getElementById('cardTitle').innerHTML = json[0].name;

        // // on récupère l'entrée detail de l'id 0
        // // et on l'affiche
        // document.getElementById('cardContent').innerHTML = json[0].detail;

        // // on récupère l'entrée price de l'id 0
        // // et on l'affiche
        // document.getElementById('cardPrice').innerHTML = json[0].price + ' €';

        // // on aajoute la source de l'image grace à l'entrée image de l'index 0
        // // on affiche l'image
        // document.getElementById('cardImg').src = json[0].image;
    });
