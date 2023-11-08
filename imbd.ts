import { Movie } from "./movie";

export class Imdb{
    public peliculas: Movie[];
    
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    
    // stringify para pasarlo a sting
    escribirEnFicheroJSON(nombreFichero:string):void{
        const fs=require('fs');
        fs.writeFileSync(nombreFichero, JSON.stringify(this));

    }

    ObtenerInstanciaIMDB(nombreFichero:string):Imdb{
        
        let fs = require ("fs");
        let JSONObject = fs.readFileSync(nombreFichero);
        let objeto = JSON.parse(JSONObject);

        return objeto;
    }
}