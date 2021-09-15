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
