import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules PrimeNg
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
