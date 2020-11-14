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

        // on crée un élément img qu'on stocke dans une variable
        let img = document.createElement('img');
        // on aajoute la source de l'image grace à l'entrée image de l'index 0
        img.src = json[0].image;
        // on affiche l'image
        document.getElementById('cardImg').appendChild(img);
    });
