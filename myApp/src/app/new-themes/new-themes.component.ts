import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-themes',
  templateUrl: './new-themes.component.html',
  styleUrls: ['./new-themes.component.scss'],
  template: `

  
  <ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Ajoutez vos thèmes
    </ion-title>
    
  </ion-toolbar>
  </ion-header>

  <form (ngSubmit)="logForm()">
    <ion-item>
      <ion-label>Nouveau Thème : </ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
    </ion-item>
    
    <button ion-button type="submit" block>Ajouter</button>
  </form>
`,
})
export class NewThemesComponent implements OnInit {


  todo = {}
  logForm() {
    console.warn(this.todo)
  }

  constructor(private http:HttpClient ) { }


  onSubmit(thema:any){

    // this.http.post("http://localhost:8000/api/new/thema",thema)
    // .subscribe((result)=>{
    //   console.warn("result", result)

    // })
    console.warn(thema)

  }
  ngOnInit() {}

}
