import { Profesional } from "./profesional";
import { Movie } from "./movie";

let prof1 = new Profesional("Juan Davila", 40, 184, 79, false, "española", 2, "comico");
let prof2 = new Profesional("Camila fernandez", 25, 152, 58, false, "española", 0, "escritor");
let profTot = [prof1, prof2];

let movie1 = new Movie("La sirenita", 1998, "inglesa", "infantil");


movie1.director = profTot;
movie1.actors = profTot;
movie1.writer = profTot;
movie1.language = "español";
movie1.plataforma = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Ariel";
movie1.producer = "Juan Matrin";
movie1.distributor = "Ornage";

movie1.toString()