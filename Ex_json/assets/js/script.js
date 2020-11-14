// document.getElementById('aaa').innerHTML = data[0].name;

// fetch("data.json")
// document.getElementById('bbb').innerHTML = data[0].detail;

// var img = document.createElement("img");
//     img.src = data[0].image;
// document.getElementById('ccc').appendChild(img);


fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => document.getElementById('cardTitle').innerHTML = json[0].name);

fetch('assets/json/productCatalog.json')
    .then(response => response.json())   
    .then(json => document.getElementById('cardContent').innerHTML = json[0].detail);

fetch('assets/json/productCatalog.json')
    .then(response => response.json())
    .then(json => {
        let img = document.createElement('img');
        img.src = json[0].image;
        document.getElementById('cardImg').appendChild(img);
    });
