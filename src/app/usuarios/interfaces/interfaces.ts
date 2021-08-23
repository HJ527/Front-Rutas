
export interface Usuario {
    segundoApellido?: string;
    telefono:        string;
    rol:             string;
    google:          boolean;
    estado:          boolean;
    nombre:          string;
    primerApellido:  string;
    usuario:         string;
    password:        string;
    correo:          string;
}

export interface Login{
    user: string; 
    password:string;
}