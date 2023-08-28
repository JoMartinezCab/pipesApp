import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';

//Modules
import { SharedModule } from './modules/shared/shared.module';

//Config locale
import localEsCo from '@angular/common/locales/es-CO';
import localFrCa from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localEsCo);
registerLocaleData(localFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(private  primengConfig:PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
