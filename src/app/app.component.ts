import { Component } from '@angular/core';
import { CartService } from './cartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = 'durrahNation';

  public totalitem : number = 0;
  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
        this.totalitem = res.length;

    })
  }
};