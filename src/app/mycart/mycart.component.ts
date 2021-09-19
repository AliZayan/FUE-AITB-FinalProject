import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit { 
  public products : any = [];
  public grandTotal : number = 0;

  constructor( private cartService : CartService) { }

  ngOnInit(): void {  

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;


    })
  }
  removeItem(item: any)
  {
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  

}
