import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilmService{
    films = [
        {
          name: 'Mamma Mia',
          genre: 'Comedy',
          available: 'V'
        },
        {
          name: 'Shrek',
          genre: 'Animation',
          available: 'X'
        },
        {
          name: 'LOTR',
          genre: 'Fantasy',
          available: 'V'
        },
        {
          name: 'Jaws',
          genre: 'Acteurs',
          available: 'V'
        },
        {
          name: 'Starwars',
          genre: 'Fantasy',
          available: 'V'
        },
      ];


    takeOne(index:number){
        this.films[index].available='X'
    }
    bringOne(index:number){
        this.films[index].available='V'
    }

    constructor(private http:HttpClient) { }

    getFilms(){
      // let url2 = 'https://jsonplaceholder.typicode.com/todos/'; //Change link to API : https://localhost:8000/api/post

      let url2 = 'https://localhost:8000/api/film';

    return this.http.get(url2);
    }

}