import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styles: [
  ]
})
export class BasicPagesComponent {
  public nameLower: string = 'jorge';
  public nameUpper: string = 'JORGE';
  public fullName: string = 'jOrGe mARtInEz';

  public customDate: Date = new Date();
}
