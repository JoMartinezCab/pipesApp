import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';


@NgModule({
  declarations: [
    ProductsComponent,
    NumberPageComponent,
    BasicPagesComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
