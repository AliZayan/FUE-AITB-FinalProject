import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponentRoutingModule } from './news-component-routing.module';

import { NewsComponentComponent } from './news-component.component';
@NgModule({
  declarations: [

    NewsComponentComponent
  ],
  imports: [
    CommonModule,
    NewsComponentRoutingModule
  ]
})
export class NewsComponentModule { }
