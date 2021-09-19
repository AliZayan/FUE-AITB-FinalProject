import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {
  news : any= [];

  constructor(public latestNews : NewsServiceService ) { }

  ngOnInit(): void {
    this.latestNews.getNews().subscribe((data)=>{
      this.news = data.articles;
    })
  }

  
}

