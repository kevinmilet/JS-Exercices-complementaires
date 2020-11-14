let myCard = '';

// on récupère le fichier json


fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => {
        
        // on récupère l'entrée name de l'id 0
        // et on l'affiche
        document.getElementById('cardTitle').innerHTML = json[0].name;
        
        // on récupère l'entrée detail de l'id 0
        // et on l'affiche
        document.getElementById('cardContent').innerHTML = json[0].detail;

        // on récupère l'entrée price de l'id 0
        // et on l'affiche
        document.getElementById('cardPrice').innerHTML = json[0].price + ' €';
       
        // on aajoute la source de l'image grace à l'entrée image de l'index 0
        // on affiche l'image
        document.getElementById('cardImg').src = json[0].image;
    });
