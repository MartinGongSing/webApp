import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-films',
  templateUrl: './new-films.component.html',
  styleUrls: ['./new-films.component.scss'],

  template: `

  
  <ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Ajoutez vos Films
    </ion-title>
    
  </ion-toolbar>
  </ion-header>

  <form (ngSubmit)="logForm()">
    <ion-item>
      <ion-label>Numéro : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Titre : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    
    <ion-item>
      <ion-label>Acteur : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Année : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Prop : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    <ion-item>
    <ion-label>Info : </ion-label>
    <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Thème : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="name"></ion-input>
    </ion-item>




    
    <button ion-button type="submit" block>Ajouter</button>
  </form>
`,
})
export class NewFilmsComponent implements OnInit {


  todo = {}
  logForm() {
    console.log(this.todo)
  }
  //TO GET THEMA

  // GET DATAS FROM thema.service.ts
  dataThema:any=["aaaa","zzzz","eeeee","rrrrr"];

  ///////////////

  constructor(private http:HttpClient ) { }
  
  


  onSubmit(film:any){

    this.http.post("http://localhost:8000/api/new/film",film)
    .subscribe((result)=>{
      console.warn("result", result)

    })
    console.warn(film)

  }
  
  
  ngOnInit() {}

}
