import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    nombre:[null,[Validators.required]],
    primerApellido:[null,[Validators.required]],
    segundoApellido:['Peralta'],
    usuario:['HJ527',[Validators.required]],
    telefono:['2311504189',[Validators.required]],
    password:['12345678',[Validators.required]],
    password2:[null,[Validators.required]],
    correo:['test1@test.com',[Validators.required]],
  })

  inputs:string[]=[];
  constructor(private fb:FormBuilder,
              private authService:AuthService,
              public uiService:UiService          
    ) { }

  ngOnInit(): void {
    this.inputs=this.uiService.crearInputs(this.miFormulario)
  }



  agregarUsuario(){
    
    this.authService.register(this.miFormulario.value).subscribe(res=>{
      console.log(res);
      
    },(error)=>console.log(error.error.errors)
    )
  }

  cssLabelActive(campo:string){
    return this.uiService.labelActive(this.miFormulario,campo)
  }


}
