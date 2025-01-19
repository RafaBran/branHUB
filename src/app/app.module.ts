import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottonContainnerComponent } from './botton-containner/botton-containner.component';
import { AboveContainnerComponent } from './above-containner/above-containner.component';
import { MediumContainnerComponent } from './medium-containner/medium-containner.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {AnimateModule} from 'primeng/animate';
import {CarouselModule} from 'primeng/carousel';
import { MainCardComponent } from './main-card/main-card.component';






@NgModule({
  declarations: [
    AppComponent,
    BottonContainnerComponent,
    AboveContainnerComponent,
    MediumContainnerComponent,
    MainCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    AnimateModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
