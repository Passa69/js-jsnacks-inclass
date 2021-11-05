// Jsnack #1:
//  Creare un array di 7 oggetti:
// Ogni oggetto descriverà una bici  con le seguenti proprietà:
// nome, peso e brand.
// ...
// Jsnack #2:
// Creare un nuovo oggetto,
// crearne una copia con la proprietà “numeroMarce” aggiunta
// pushare il nuovo oggetto copia nell’array di oggetti
// log in console dell’oggetto originale + log in console dell’oggeto copia
// ...
// Jsnack #3:
// stampare a schermo l’elenco delle bici con tutte le info, principali (numero delle marce no);
// [html super base senza o con css super grezzo, l’importante che si capisca dove finisce 
// un blocco bc e dove inizia l’altro, solo quello (quindi bastan dei margini grossolani)]

const bikeCont = document.getElementById("container");

const bike = [
    {
        "name"   : "cross",
        "weight" : "15kg",
        "brand"  : "air"
    },

    {
        "name"   : "city",
        "weight" : "10kg",
        "brand"  : "ground"
    },

    {
        "name"   : "pippo",
        "weight" : "20kg",
        "brand"  : "race"
    },

    {
        "name"   : "toni",
        "weight" : "8kg",
        "brand"  : "trouble"
    },

    {
        "name"   : "gino",
        "weight" : "13kg",
        "brand"  : "squad"
    },

    {
        "name"   : "roby",
        "weight" : "27kg",
        "brand"  : "mountain"
    },

    {
        "name"   : "newgame",
        "weight" : "17kg",
        "brand"  : "beach"
    }
]

const bikeGears = { 
        ...bike, 
        "gear" : "5 marce"
}
console.log(bike);
console.log(bikeGears);

bike.push(bikeGears);

for (i = 0; i < bike.length; i++) {
    let bikeDiv = document.createElement("div");
    bikeDiv.classList.add("bikes");
    bikeDiv.innerHTML = 
    `<p>
        ${bike[i].name}
    </p>`;
    bikeDiv.innerHTML += 
    `<p>
        ${bike[i].weight}
    </p>`;
    bikeDiv.innerHTML += 
    `<p>
        ${bike[i].brand}
    </p>`;
    bikeDiv.innerHTML += 
    `<p>
        ${bikeGears.gear}
    </p>`;

    bikeCont.append(bikeDiv);
}
