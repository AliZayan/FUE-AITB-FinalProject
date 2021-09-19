import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponentComponent } from './news-component.component';

const routes: Routes = [
{
//localhost:4200/news
  path : "", component:NewsComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsComponentRoutingModule { }
