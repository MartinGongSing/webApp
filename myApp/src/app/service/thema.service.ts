import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemaService{

    themas = [];

    constructor(private http:HttpClient) { }

    getThemas(){
      // let url2 = 'https://jsonplaceholder.typicode.com/todos/'; //Change link to API : https://localhost:8000/api/post

      let url3 = 'https://localhost:8000/api/thema';

    return this.http.get(url3);
    }

}