import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-agregar-sub',
  templateUrl: './agregar-sub.component.html',
  styleUrls: ['./agregar-sub.component.scss']
})
export class AgregarSubComponent implements OnInit {

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

  constructor(private fb:FormBuilder,
              public uiService:UiService
    ) { }

  ngOnInit(): void {

  }



}
