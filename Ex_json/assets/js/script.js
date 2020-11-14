let myCardId = 0;

// on récupère le fichier json
fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => { 
        
        json.forEach((element, index) => {
            
            console.log(json[index].name);
            console.log(json[index].detail);
            console.log(json[index].price);
            console.log(json[index].image);
            myCardId++

            let cardTitle = document.getElementById('cardTitle');
            let cardContent = document.getElementById('cardContent');
            let cardPrice = document.getElementById('cardPrice');
            let cardImg = document.getElementById('cardImg');

            let cardTitleClone = cardTitle.cloneNode(true);
            let cardContentClone = cardContent.cloneNode(true);
            let cardPriceClone = cardPrice.cloneNode(true);
            let cardImgClone = cardImg.cloneNode(true);

            cardTitleClone.id = 'cardTitleClone' + myCardId;
            cardContentClone.id = 'cardContentClone' + myCardId;
            cardPriceClone.id = 'cardPriceClone' + myCardId;
            cardImgClone.id = 'cardImgClone' + myCardId;

            document.querySelector('.row').appendChild(cardTitleClone);
            document.querySelector('.row').appendChild(cardContentClone);
            document.querySelector('.row').appendChild(cardPriceClone);
            document.querySelector('.row').appendChild(cardImgClone);


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
