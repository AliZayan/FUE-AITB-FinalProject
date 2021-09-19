import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-creatine-component',
  templateUrl: './creatine-component.component.html',
  styleUrls: ['./creatine-component.component.css']
})
export class CreatineComponentComponent implements OnInit {
  Creatineproduct = [
    {
      img : "../../assets/images/Crea/c1.png",
      heading : "Total War",
      price : "45.99$",
    },
    {
      img : "../../assets/images/Crea/c2.png",
      heading : "Big Noise",
      price : "49.99$",

    },
    {
      img : "../../assets/images/Crea/c3.png",
      heading : " Moab",
      price : "25.99$",

    },
    {
      img : "../../assets/images/Crea/c4.png",
      heading : "Mental Trigger",
      price : "55.99$",
    },
    {
      img : "../../assets/images/Crea/c5.png",
      heading : "Total War Flavored",
      price : "60.99$",

    },
    {
      img : "../../assets/images/Crea/c6.png",
      heading : "Big Noise Flavored",
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

