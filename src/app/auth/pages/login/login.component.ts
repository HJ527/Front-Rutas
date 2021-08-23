import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../shared/services/ui.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    usuario:[null,[Validators.required]],
    password:[null,[Validators.required]]
  })

  inputs:string[]=[];
  constructor(private fb:FormBuilder,
              private uiService:UiService,
              private authService:AuthService       
    ) { }

  ngOnInit(): void {
    this.inputs=this.uiService.crearInputs(this.miFormulario)
  }

  cssLabelActive(campo:string){
    return this.uiService.labelActive(this.miFormulario,campo)
  }

  login(){
    const body = this.miFormulario.value
    this.authService.login(body).subscribe(resp=>{
      console.log(resp);
      
    },error=>{
      console.log(error);
      
    })
  }
}
