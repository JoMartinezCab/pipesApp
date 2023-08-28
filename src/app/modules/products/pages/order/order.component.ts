import { Color, Hero } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes:Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },{
    name: 'Batman',
    canFly: false,
    color: Color.black
  },{
    name: 'Green Lantern',
    canFly: true,
    color: Color.green
  },{
    name: 'Flash',
    canFly: false,
    color: Color.red
  },{
    name: 'Hulk',
    canFly: false,
    color: Color.green
  }];
  public sortSelection:keyof Hero | '' = '';

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  getSort(value:keyof Hero):void{
    this.sortSelection = value;
  }
}
