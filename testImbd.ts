import { Imdb } from "./imbd";
import { Movie } from "./movie";
import { Profesional } from "./profesional";


let mov1 = new Movie("Aladin", 1999, "indu", "infantil");
let mov2 = new Movie("La dama y el vagabundo", 1998, "Francesa", "infantil");
let mov3 = new Movie("Los 40 ladrones", 2000, "indu", "infantil");
let arrMov = [mov1, mov2, mov3];

let myImdb = new Imdb(arrMov);

// console.log(myImdb)

let fs = require ("fs");

// stringify para pasarlo a sting
fs.writeFileSync("imdbBBDD.json", JSON.stringify(myImdb));
let JSONretorno = fs.readFileSync("imdbBBDD.json");
let objeto = JSON.parse(JSONretorno);
console.log(objeto);


myImdb.escribirEnFicheroJSON("funcion.json");

let myImdb2 = myImdb.ObtenerInstanciaIMDB("funcion.json");
console.log(myImdb2);