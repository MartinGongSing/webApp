import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = 'https://jsonplaceholder.typicode.com/todos/'; //Change link to API : https://localhost:8000/api/post

    // let url = 'https://localhost:8000/api/post';
    
    return this.http.get(url);
  }

}
