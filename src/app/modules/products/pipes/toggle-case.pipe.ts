import { Pipe, PipeTransform } from '@angular/core';

//Para poder ser usado como pipe se requiere le decorador Pipe

@Pipe({
  name: 'toggleCase'
})

//PipeTransform s el metodo que se llama para hacer la transformacion visual de la data
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase();
  }


}
