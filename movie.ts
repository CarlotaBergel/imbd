import { Profesional } from "./profesional";

export class Movie{
    public title : string;
    public relaseYear : number;
    public actors : Profesional[];
    public nationality : string;
    public director: Profesional[];
    public writer : Profesional[];
    public language : string;
    public plataforma : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : string;
    public distributor : string;
    public genere : string;

    constructor(title:string, relaseYear:number, nationality : string, genere : string){
        this.title = title;
        this.relaseYear = relaseYear;
        this.nationality = nationality;
        this.genere = genere;
    }

    toString():void{
        console.log ("titulo: " + this.title + "\n año: " +  this.relaseYear + "\n actores: " +  this.actors.toString() + "\n nacionalidad: " + this.nationality + "\n director: " + this.director.toString() + "\n escritor: " + this.writer.toString() + "\n lenguaje: " + this.language + "\n plataforma: " + this.plataforma + "\n marvel : " +  this.isMCU + "\n actor principal: " +  this.mainCharacterName + "\n productor: " + this.producer + "\n distribuidor: " + this.distributor + "\n genero: " + this.genere);
    }


}