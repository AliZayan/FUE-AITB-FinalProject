import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'                 /* HTTP Client da bit3amel m3 el links bta3t el API*/
})
export class NewsServiceService {         /* Observable bira2eb el t3'ieer */

  constructor(public httpClient : HttpClient) { }

  getNews(): Observable<any>{                             /*Getnews -> function btra2bli el t3'ieer el a7sal we btrg3holi fel Link*/
    return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e2f71a1a23544725af80b24321fc90d3");
  }
}
