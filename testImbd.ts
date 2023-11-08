import { Imdb } from "./imbd";
import { Movie } from "./movie";

let mov1 = new Movie("Aladin", 1999, "indu", "infantil");
let mov2 = new Movie("La dama y el vagabundo", 1998, "Francesa", "infantil");
let mov3 = new Movie("Los 40 ladrones", 2000, "indu", "infantil");
let arrMov = [mov1, mov2, mov3];

let myImdb = new Imdb(arrMov);

console.log(myImdb)