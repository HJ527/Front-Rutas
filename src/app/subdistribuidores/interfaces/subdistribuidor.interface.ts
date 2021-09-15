import { Usuario } from '../../usuarios/interfaces/interfaces';

 export interface Subdistribuidor{
    nombre      :string;
    correo      :string;
    telefono    :number;
    direccion   :Direccion 
    encargado   :string
 };


 export interface Direccion {
   calle       :string;
    numero      :string;
    numInterior ?:string;
    cp          :number;
    colonia     :string;
    municipio   :string;
    estado      :string;
    latitud     :number;
    longitud    :number;
 }

 export interface BusquedaStrings {
   results: string[];
}

export interface Subdistribuidores {
   results: Result[];
}

export interface Result {
   direccion: Direccion;
   estado:    boolean;
   _id:       string;
   nombre:    string;
   correo:    string;
   telefono:  number;
   encargado: string;
   __v:       number;
}


