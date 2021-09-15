import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subdistribuidor } from '../interfaces/subdistribuidor.interface';
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
}
