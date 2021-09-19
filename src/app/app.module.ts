import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { WheyComponentComponent } from './whey-component/whey-component.component';

import { CreatineComponentComponent } from './creatine-component/creatine-component.component';
import { FatburnerComponent } from './fatburner/fatburner.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponent } from './contact/contact.component';
import { MycartComponent } from './mycart/mycart.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    WheyComponentComponent,
    CreatineComponentComponent,
    FatburnerComponent,
    AboutUsComponentComponent,
    ContactComponent,
    MycartComponent,
    
  ],

  /* libararies*/ 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
