import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';
import { MapasService } from '../../../shared/services/maps/mapas.service';

@Component({
  selector: 'app-agregar-sub',
  templateUrl: './agregar-sub.component.html',
  styleUrls: ['./agregar-sub.component.scss']
})
export class AgregarSubComponent implements OnInit, AfterViewInit {

  miFormulario:FormGroup=this.fb.group({
    nombre:[null,[Validators.required]],
    correo:[null,[Validators.required]],
    telefono:[null,[Validators.required]],
    calle:[null,[Validators.required]],
    numero:[null,[Validators.required]],
    numeroInt:[null,[Validators.required]],
    cp:[null,[Validators.required]],
    colonia:[null,[Validators.required]],
    municipio:[null,[Validators.required]],
    estado:[null,[Validators.required]],
    lat:[null,[Validators.required]],
    lng:[null,[Validators.required]],
  })

  @ViewChild('mapa') divMapa!:ElementRef;
  mapa!:google.maps.Map
  contactoInputs!:string[];
  direccionInputs!:string[];


  constructor(private fb:FormBuilder,
              public uiService:UiService,
              private mapService:MapasService
    ) { }

    
  ngAfterViewInit(): void {
    this.mapService.loader.load().then(async() => {
        this.mapa= await new google.maps.Map(this.divMapa.nativeElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }

  ngOnInit(): void {
    this.contactoInputs = this.uiService.crearInputs(this.miFormulario).slice(0,3);
    this.direccionInputs = this.uiService.crearInputs(this.miFormulario).slice(3);

  }
  


}
