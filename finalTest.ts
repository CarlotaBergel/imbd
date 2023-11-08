const fs = require('fs');
const readlineSync = require('readline-sync');

import { Movie } from "./movie";
import { Profesional } from "./profesional";

let nom = readlineSync.question("ingrese su nombre:  ");
let edad = readlineSync.questionInt("ingrese su edad:  ");
let wel= readlineSync.questionInt("ingrese su peso  ");
let hei = readlineSync.questionInt("ingrese su altura:  ");
let ret =readlineSync.keyInYN("esta usted retirado:  ");
let naci = readlineSync.question("cual es su nacionalidad:  ");
let oscar = readlineSync.questionInt("tiene algun Oscar:  ");
let prof= readlineSync.question("cual es su profesion:  ");
let profesional: Profesional = new Profesional(nom, edad, wel, hei, ret, naci, oscar, prof)
let peli : Movie = new Movie("saw",2009,"inglesa","miedo");

console.log(profesional);

// peli.director = profesional;
// console.log(peli.director);

// console.log(peli);