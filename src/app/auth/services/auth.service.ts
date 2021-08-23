import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login, Usuario} from '../../usuarios/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url:string= environment.urlBack
  
  constructor(private http:HttpClient) { }



  login(body:Login){
    return this.http.post(`${this.url}/auth/login`,body)
  }

  register(body:Usuario){
    return this.http.post(`${this.url}/auth/register`,body)
  }
}
