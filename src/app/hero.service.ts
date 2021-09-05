import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  public getTodos(url: string){
    return  this.http.get(url);
  }

  public getUsers(url: string){
    return  this.http.get(url);
  }
}
