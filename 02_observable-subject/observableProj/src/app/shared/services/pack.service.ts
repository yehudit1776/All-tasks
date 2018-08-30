import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor(private httpClient:HttpClient) { }

  subject = new Subject();
dateSubject=new Subject();

  getPackByInput(input:string):Observable<any>{
   return this.httpClient.get(`https://api.npms.io/v2/search/suggestions?q=${input}&size=40`);
  }

  getDownloads(name:string,dates:Date[]){

    return this.httpClient.get(`https://api.npmjs.org/downloads/point/${dates[0]}:${dates[1]}/${name}`);
  }

}
