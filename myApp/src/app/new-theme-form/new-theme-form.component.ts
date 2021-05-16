import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-theme-form',
  templateUrl: './new-theme-form.component.html',
  styleUrls: ['./new-theme-form.component.scss'],
  template: `
  <form (ngSubmit)="logForm()">
    <ion-item>
      <ion-label>Todo</ion-label>
      <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Description</ion-label>
      <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
    </ion-item>
    <button ion-button type="submit" block>Add Todo</button>
  </form>
`,
})
export class NewThemeFormComponent implements OnInit {

  todo = {}
  logForm() {
    console.log(this.todo)
  }


  constructor() { }

  ngOnInit() {}

}

