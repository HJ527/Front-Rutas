import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';
import { MapasService } from '../../../shared/services/maps/mapas.service';
import { SubService } from '../../services/sub.service';
import { Subdistribuidor } from '../../interfaces/subdistribuidor.interface';

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
    lat:[{value:null,disabled:true},[Validators.required]],
    lng:[{value:null,disabled:true},[Validators.required]],
    direcciones:[{value:null,disabled:true}],
    calle:[{value:null,disabled:true},[Validators.required]],
    numero:[{value:null,disabled:true},[Validators.required]],
    numeroInt:[{value:null,disabled:true},[Validators.required]],
    cp:[{value:null,disabled:true},[Validators.required]],
    colonia:[{value:null,disabled:true},[Validators.required]],
    municipio:[{value:null,disabled:true},[Validators.required]],
    estado:[{value:null,disabled:true},[Validators.required]],
    encargado:[null,[Validators.required]]
  })

  @ViewChild('mapa') divMapa!:ElementRef;
  @ViewChild('selectDireccion') direccionSelect!:ElementRef
  mapa!:google.maps.Map
  contactoInputs!:string[];
  direccionInputs!:string[];
  center!:{lat:number,lng:number};
  marcador!:google.maps.Marker;
  marcadores:google.maps.Marker[]=[];
  subs:{nombre:string,usuario:string}[]=[];
  geocoder!:google.maps.Geocoder;
  direcciones:google.maps.GeocoderResult[]=[];

  


  constructor(private fb:FormBuilder,
              public uiService:UiService,
              private mapService:MapasService,
              private subService:SubService
    ) { }

    
  ngAfterViewInit(): void {
    


    this.mapService.loader.load().then(async() => {

      // const {lat,lng}= await this.mapService.obtenerCentro();

      this.mapa= await new google.maps.Map(this.divMapa.nativeElement, {
        zoom: 15,
      });
      this.geocoder=new google.maps.Geocoder();
      this.center=this.mapService.ubicacionActual
      this.mapa.setCenter(this.center)
    })
    .then(async()=>{
      this.mapa.addListener('click',async (e:any)=>{
        this.center={lat:e.latLng.lat(),lng:e.latLng.lng()}
        this.miFormulario.get('direcciones')?.enable()
        this.miFormulario.get('direcciones')?.setValue(0);
        
        this.geocodeLatLng(this.geocoder);
        if(this.marcadores.length<1){
          this.agregarMarcador();
        }else{
          this.marcador.setMap(null);
          this.marcadores.pop()
          this.agregarMarcador();
        }
      });
    });
  }

  ngOnInit(): void {
    this.contactoInputs = this.uiService.crearInputs(this.miFormulario).slice(0,3);
    this.direccionInputs = this.uiService.crearInputs(this.miFormulario).slice(3);    
    
    this.mapService.obtenerCentro()
    
    this.subService.buscarSubs().subscribe(subs=>{
      subs.forEach(sub=>{
        const {nombre,usuario}=sub;
        this.subs.push({nombre,usuario})
      });
    });


    //cambio de valor de select direcciones
    this.miFormulario.get('direcciones')?.valueChanges.subscribe(value=>{
      this.selectDirecciones(value)
    })
    
  }

  agregarMarcador(){
    this.marcador = this.mapService.agregarMarcador(this.center);
    this.marcador.setMap(this.mapa)
    this.marcadores.push(this.marcador);
    this.mapa.setCenter(this.center)
    this.miFormulario.get('lat')?.setValue(this.marcador.getPosition()?.lat());
    this.miFormulario.get('lng')?.setValue(this.marcador.getPosition()?.lng());
    
    this.direccionSelect.nativeElement.focus();

    this.marcador.addListener('dragend',(e:any)=>{

      this.miFormulario.get('direcciones')?.setValue(0);

      const lat = this.marcador.getPosition()!.lat()
      const lng = this.marcador.getPosition()!.lng()

      this.miFormulario.get('lat')?.setValue(lat);
      this.miFormulario.get('lng')?.setValue(lng);
      this.center={lat,lng}

      this.geocodeLatLng(this.geocoder);
    })
  }

  quitarMarcador(){
    this.marcador.setMap(null)
  }

  habilitarCampo(campo:string){
    this.miFormulario.get(campo)?.enable();
  }

  async geocodeLatLng(geocoder:google.maps.Geocoder){
    this.direcciones=[];
    geocoder.geocode({location:this.center})
      .then((response)=>{
        
        if (response.results[0]) {
          response.results.forEach(res=>{
            res.types.forEach(type=>{
              (type==="street_address" || type==="premise")?this.direcciones.push(res):''
            })
          })
        }        
      }).then(()=>{
        this.selectDirecciones();
      })
      .catch((e)=>console.log(e))      
  }

  selectDirecciones(valor = 0){
    if (this.direcciones.length>0) {
      this.direcciones[valor].address_components.forEach(adressComponent=>{
       adressComponent.types.forEach(tipo=>{
         this.asignarValorCampo(tipo,adressComponent.long_name)
       })
     })
    }
    
  }

  asignarValorCampo(tipo:string, valor:string){
    switch (tipo) {
      case 'street_number':
        this.miFormulario.get('numero')?.setValue(valor)
        break;
      case 'route':
        this.miFormulario.get('calle')?.setValue(valor)
        break;
      case 'sublocality' || 'sublocality_level_1':
        this.miFormulario.get('colonia')?.setValue(valor)
        break;
      case 'locality':
         this.miFormulario.get('municipio')?.setValue(valor)
        break;
      case 'administrative_area_level_1':
         this.miFormulario.get('estado')?.setValue(valor)
        break;
      case 'postal_code':
         this.miFormulario.get('cp')?.setValue(valor)
        break;
    
      default:
        break;
    }
    
  }
  
  agregarSub(){
    this.direccionInputs.forEach(input=>{
      this.miFormulario.get(input)?.enable()
    })

    console.log(this.miFormulario.value);
    this.marcador.setMap(null);
    this.marcadores=[];
    this.direcciones=[];

    const {nombre, correo, telefono, lat, lng, calle, numero, numeroInt, cp, colonia, municipio, estado, encargado} = this.miFormulario.value

    const body = {
      nombre,
      correo,
      telefono,
      direccion:{
          calle,
          numero,
          cp,
          colonia,
          municipio,
          estado,
          latitud:lat,
          longitud:lng,
          },
      encargado,
    }
    this.subService.agregarSub(body).subscribe(res=>{
      console.log(res);
      
    })

    this.direccionInputs.forEach(input=>{
      if (input!=='encargado') {
        this.miFormulario.get(input)?.disable()
      }
    })
    this.miFormulario.reset()
  }

}
