import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    clave:[null,[Validators.required]],
    categoria:[null,[Validators.required]],
    marca:[null,[Validators.required]],
    modelo:[null,[Validators.required]],
    color:[null,[Validators.required]],
    descripcion:[null,[Validators.required]],
    costo:[null,[Validators.required]],
    medioMayoreo:[null,[Validators.required]],
    mayoreo:[null,[Validators.required]],
    publico:[null,[Validators.required]],
  })

  constructor(private http:HttpClient,
              private fb:FormBuilder,
              public uiService:UiService
    ) { }

  ngOnInit(): void {
    this.uiService.crearInputs(this.miFormulario)
  }

}
