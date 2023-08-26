import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';


//Modules
import { SharedModule } from './modules/shared/shared.module';
import { BasicPagesComponent } from './modules/pages/basic-pages/basic-pages.component';
import { NumberPageComponent } from './modules/pages/number-page/number-page.component';
import { UncommonPageComponent } from './modules/pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPagesComponent,
    NumberPageComponent,
    UncommonPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(private  primengConfig:PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
