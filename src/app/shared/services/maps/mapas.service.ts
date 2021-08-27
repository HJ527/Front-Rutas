import { Injectable } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  constructor() { }

  loader = new Loader({
    apiKey: environment.mapsKey,
    version: "weekly",
  });
}
