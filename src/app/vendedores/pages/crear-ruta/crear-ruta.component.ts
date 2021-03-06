import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';
import { SubService } from '../../../subdistribuidores/services/sub.service';
import { switchMap, tap } from "rxjs/operators";
import { Subdistribuidor } from '../../../subdistribuidores/interfaces/subdistribuidor.interface';
import { MapasService } from '../../../shared/services/maps/mapas.service';

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.scss']
})
export class CrearRutaComponent implements OnInit,AfterViewInit {

  miFormulario:FormGroup = this.fb.group({
    estado:[null,Validators.required],
    municipio:[null,]
  })

  @ViewChild('mapa') divMapa!:ElementRef;
  mapa!:google.maps.Map
  center!:{lat:number,lng:number};
  direcccionService!:google.maps.DirectionsService
  directionRenderer!:google.maps.DirectionsRenderer;

  estados:string[]=[];
  municipios:string[]=[];
  subs:Subdistribuidor[]=[];
  resto:Subdistribuidor[]=[];
  listaRuta:Subdistribuidor[]=[];
  sub!:Subdistribuidor;

  constructor(private fb:FormBuilder,
              private subService:SubService,
              public uiService:UiService,
              private mapService:MapasService
              ) { }

  ngOnInit(): void {
    this.subService.obtenerEstados().subscribe(resp=>{
      this.estados=resp.results
    })

    this.mapService.obtenerCentro();
    this.miFormulario.get('estado')?.valueChanges.pipe(
      tap(()=>{
        this.subs=[]
      }),
      switchMap(estado=>this.subService.obtenerMunicipios(estado))
    ).subscribe(m=>this.municipios=m.results
    )

    this.miFormulario.get('municipio')?.valueChanges.pipe(
      switchMap(municipio=>this.subService.obtenerSubs(municipio)),
      tap(async(res)=>{
        this.subs=[]
        this.resto=[]

        console.log(res)
        await res.results.forEach(s=>{
          console.log(this.listaRuta);
          if(!this.listaRuta.includes(s)){
            this.resto.push(s)
            console.log(this.resto);
            
          }
          this.subs=this.resto
        });
      })
    ).subscribe(resp => {
      resp.results
     
    })
  }


  ngAfterViewInit(): void {
    this.mapService.loader.load()
    .then(async()=>{
      this.mapa = await new google.maps.Map(this.divMapa.nativeElement,{
        zoom:15
      });
      this.center=this.mapService.ubicacionActual;
      
      this.mapa.setCenter(this.center)
    })
    .then(async () =>{
      this.direcccionService = new google.maps.DirectionsService();
      this.directionRenderer = new google.maps.DirectionsRenderer();
      this.directionRenderer.setMap(this.mapa)

    })
  }

  agregarSubLista(sub:Subdistribuidor){
    if (!this.listaRuta.includes(sub)) {
      
      this.listaRuta.push(sub);
      
      this.subs.map((s,i) => {
        if (s===sub) {
          this.subs.splice(i,1)
        }
      });
    }
  }

  quitarSubLista(sub:Subdistribuidor){

    if (!this.subs.includes(sub)) {
      this.subs.push(sub);

      this.listaRuta.map((s,i) => {
        if (s===sub) {
          this.listaRuta.splice(i,1)
        }
      });
    }

  }

}


