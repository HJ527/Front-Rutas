import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  inputs:string[]=[]

  constructor() { }

  crearInputs(form:FormGroup){
    this.inputs=[]
    Object.keys(form.controls).forEach(input=>{
      this.inputs.push(input)
    })
    return this.inputs;
  }

  labelActive(form:FormGroup,campo:string){
    if (form.get(campo)?.value===null) {
      return false
    }else if(form.get(campo)?.value!==''){
      return true
    }else{
      return false
    }
  }
}
