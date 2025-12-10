// const name = "zirawan Salim";
// const erfahrung = 5;
// const jobsuche = true;
// const gehalt = null;
// console.log(name, erfahrung, jobsuche, gehalt)


// const temperatur = 5;

// if (temperatur >= 25) {
//     console.log("wetter ist warm");
// } else if (temperatur == 20) {
//     console.log("wetter ist schön");
// } else {
//     console.log("wetter ist Kalt");
// }


// const temperaturen = [10, 25, 5, 30, -2];

// temperaturen.forEach(temperatur => {
//     let meldung = "";

//     if (temperatur >= 25) {
//         meldung = "Es ist heiß";
//     } else if (temperatur >= 10 && temperatur < 25) {
//         meldung = "Es ist warm";
//     } else if (temperatur >= 0 && temperatur < 10) {
//         meldung = "Es ist kühl";
//     } else if (temperatur < 4) {
//         meldung = "Es ist sehr kalt";
//     }
//     console.log(meldung);
// });






// function printProjectName(name) {
//     console.log("Projekt:" + name);
// }
// printProjectName("Portfolio Website");
// printProjectName("E-Commerce Shop");



// const projekte = [
//     { titel: "Portfolio", likes: 2 },
//     { titel: "ToDo App", likes: 10 },
//     { titel: "Rezept App", likes: 5 },
// ]
// const projektTitle = projekte.map((projekt) => projekt.titel);
// console.log(projektTitle);

// const beliebteProjekte = projekte.filter((projekt) => projekt.likes >=5);
// console.log(beliebteProjekte)



function describeProduct(name, price) {
  const description = `Das Produkt ${name} kostet ${price} Euro.`;

  console.log(description);
}

describeProduct("Tasse", 12); 

describeProduct("Laptop", 999.99);




const produkte = [
  { id: 1, name: "Laptop", preis: 999 },
  { id: 2, name: "Maus", preis: 25 },
  { id: 3, name: "Tastatur", preis: 75 },
  { id: 4, name: "Monitor", preis: 300 },
];




function findProduct(productId) {
  
  const foundProduct = produkte.find(product => product.id === productId);

  if (foundProduct) {

    console.log(`Produkt gefunden: ${foundProduct.name} - ${foundProduct.preis} Euro`);
  } else {
   
    console.log("Produkt nicht gefunden");
  }
}

findProduct(2); 

findProduct(20); 

findProduct(4);



