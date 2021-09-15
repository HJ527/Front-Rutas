import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subdistribuidor, BusquedaStrings, Subdistribuidores } from '../interfaces/subdistribuidor.interface';
import { Usuario } from '../../usuarios/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  private url:string=environment.urlBack;

  constructor(private http:HttpClient) { }

  agregarSub(body:Subdistribuidor){
    const url=`${this.url}/subs/agregar`
    return this.http.post(url,body)
  }

  buscarSubs(){
    const url=`${this.url}/subs/`
    return this.http.get<Usuario[]>(url);
  }

  obtenerEstados(){
    const url =`${this.url}/subs/estados`
    return this.http.get<BusquedaStrings>(url);
  }
  obtenerMunicipios(estado:string){
    const url = `${this.url}/subs/${estado}`;
    return this.http.get<BusquedaStrings>(url);
  }

  obtenerSubs(municipio:string){
    const url = `${this.url}/subs/${municipio}/locales`;
    return this.http.get<Subdistribuidores>(url);
  }
}
