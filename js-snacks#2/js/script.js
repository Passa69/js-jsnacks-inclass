// Jsnack#1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const auto = [
    {
        "marca" : "ferrari",
        "modello" : "a3",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "ww",
        "modello" : "b4",
        "alimentazione" : "diesel"
    },

    {
        "marca" : "ford",
        "modello" : "g5",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "citroen",
        "modello" : "c3",
        "alimentazione" : "gpl"
    },

    {
        "marca" : "ford",
        "modello" : "f3",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "toyota",
        "modello" : "c4",
        "alimentazione" : "elettrico"
    },

    {
        "marca" : "toyota",
        "modello" : "h5",
        "alimentazione" : "diesel"
    },

    {
        "marca" : "ford",
        "modello" : "g4",
        "alimentazione" : "metano"
    },

    {
        "marca" : "seat",
        "modello" : "t4",
        "alimentazione" : "metano"
    },

    {
        "marca" : "lamborghini",
        "modello" : "b2",
        "alimentazione" : "diesel"
    }
]

const benzina = auto.filter((automobili) => {
    return automobili.alimentazione == "benzina";

});
console.log(benzina);

const diesel = auto.filter((automobili) => {
    return automobili.alimentazione == "diesel";
});
console.log(diesel);

const altro = auto.filter((automobili) => {
    return automobili.alimentazione !== "benzina" && automobili.alimentazione !== "diesel";
});
console.log(altro);