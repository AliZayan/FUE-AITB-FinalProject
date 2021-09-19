import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponent } from './contact/contact.component';
import { CreatineComponentComponent } from './creatine-component/creatine-component.component';
import { FatburnerComponent } from './fatburner/fatburner.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MycartComponent } from './mycart/mycart.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { WheyComponentComponent } from './whey-component/whey-component.component';

const routes: Routes = [
  {path: "", component : HomeComponentComponent},
  {path:"whey", component : WheyComponentComponent},
  {path:"crea", component : CreatineComponentComponent},
  {path:"fatburner", component : FatburnerComponent},
  {path:"news", loadChildren : 
  ()=> import ('./news-component/news-component.module').
  then( moduleClass => moduleClass.NewsComponentModule)}, 
  {path:"cart", component : MycartComponent},

  {path:"about", component : AboutUsComponentComponent},
  {path:"contact", component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
