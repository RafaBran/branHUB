import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottonContainnerComponent } from './botton-containner/botton-containner.component';
import { AboveContainnerComponent } from './above-containner/above-containner.component';
import { MediumContainnerComponent } from './medium-containner/medium-containner.component';

import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    BottonContainnerComponent,
    AboveContainnerComponent,
    MediumContainnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
