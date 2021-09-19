import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-whey-component',
  templateUrl: './whey-component.component.html',
  styleUrls: ['./whey-component.component.css']
})
export class WheyComponentComponent implements OnInit {
  wheyProduct = [
    {
      img : "../../assets/images/whey/W1.png",
      heading : "MRE Lite",
      price : "49.99$",
    },
    {
      img : "../../assets/images/whey/W2.png",
      heading : "MRE",
      price : "97.99$",

    },
    {
      img : "../../assets/images/whey/w3.png",
      heading : "ISOTOPE",
      price : "44.99$",

    },
    {
      img : "../../assets/images/whey/W4.png",
      heading : "Isotope ",
      price : "40.99$",
    },
    {
      img : "../../assets/images/whey/W5.png",
      heading : "Green Beret",
      price : "22.99$",

    },
    {
      img : "../../assets/images/whey/W6.png",
      heading : "ISOTOPE",
      price : "44.99$",
    },

  ]
  constructor(private cartService : CartService) { }

  public productList : any;

  ngOnInit(): void {
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });

  }
  addtocart(item : any)
  {
    this.cartService.addtoCart(item)
  }
  }