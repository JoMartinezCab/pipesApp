import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jorge';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  };

  changeClient():void{
    this.name = 'Vanessa';
    this.gender = 'female';
  }

  // i18nlural

  public clients : string[] = ['Maria', 'Luis', 'Daniela', 'Sofia', 'sara'];
  public clientsMap = {
    '=0':'no tenemos ningin cliene esperando.',
    "=1":'tenemos un cliente esperando',
    "other":'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name:  'Jorge',
    age: 27,
    address: 'Medellin, Colombia'
  };

  // Async Pipe
  public myObservableTimer = interval(2000)
  .pipe(
    tap( value => console.log('tap:', value) )
  );
}
