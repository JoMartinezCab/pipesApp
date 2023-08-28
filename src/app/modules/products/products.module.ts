import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { ProductsRoutingModule } from './products-routing.module';

//Components
import { ProductsComponent } from './products.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

//Pipes
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    NumberPageComponent,
    BasicPagesComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
