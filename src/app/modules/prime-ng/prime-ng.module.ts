import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules PrimeNg
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    MenubarModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
