import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-fatburner',
  templateUrl: './fatburner.component.html',
  styleUrls: ['./fatburner.component.css']
})
export class FatburnerComponent implements OnInit {
  Fatburners = [
    {
      img : "../../assets/images/Fatburner/F1.png",
      heading : "Double Tap 60 Servings ",
      price : "45.99$",
    },
    {
      img : "../../assets/images/Fatburner/f2.png",
      heading : "Double Tap 40 Servings",
      price : "49.99$",

    },
    {
      img : "../../assets/images/Fatburner/f3.png",
      heading : " Silencer",
      price : "25.99$",

    },
    {
      img : "../../assets/images/Fatburner/f4.png",
      heading : " R P G ",
      price : "55.99$",
    },
    {
      img : "../../assets/images/Fatburner/f5.png",
      heading : "CLA   ",
      price : "60.99$",

    },
    {
      img : "../../assets/images/Fatburner/f6.png",
      heading : "Fubar  ",
      price : "88.99$",
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


