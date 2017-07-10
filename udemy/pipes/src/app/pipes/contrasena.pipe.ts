import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args: boolean): string {
    let contrasenaValue = value;

    if(args){
      let numCaracteres = contrasenaValue.length;
      contrasenaValue="";
      for(let i=0; i<numCaracteres;i++){
        contrasenaValue = contrasenaValue + "*";
      }
    }

    return contrasenaValue;
  }

}
