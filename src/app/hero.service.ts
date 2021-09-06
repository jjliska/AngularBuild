//Hero service is an HTTP call
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  public getAPI(url: string){
    return  this.http.get(url);
  }
}
