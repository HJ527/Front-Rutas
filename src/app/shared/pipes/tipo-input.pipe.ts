import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoInput'
})
export class TipoInputPipe implements PipeTransform {

  transform(texto:string): string {
    switch(texto){
      case'categoria':
      return 'e'
      default:
        return 'case'
    }
  }

}
