import { Injectable } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  constructor() { }

  ubicacionActual!:{lat:number,lng:number};
  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  loader = new Loader({
    apiKey: environment.mapsKey,
    version: "weekly",
  });

  obtenerCentro(){
    
    const success= (pos:GeolocationPosition)=>{
      const {latitude,longitude}= pos.coords
      
      this.ubicacionActual={lat:latitude,lng:longitude}
      console.log(this.ubicacionActual)
    }
    navigator.geolocation.watchPosition(success,undefined,this.options);
  }


  agregarMarcador(position:{lat:number, lng:number}){
    return new google.maps.Marker({
      position,
      draggable:true
    })
  }
}
