import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from '../service/thema.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
})
export class FilmViewComponent implements OnInit {


  @Input() themaName!: string;
  @Input() indexOfthema!: number;


  isAuth = false;
  themas?: any[];
  dataThema:any=[];

  constructor(private themaService: ThemaService){
    setTimeout(
      () => {
        this.isAuth=true;
      }, 2000
  );
  this.themaService.getThemas().subscribe(thema=>{
    console.warn(thema);
    this.dataThema=thema;
    
  })
}

  ngOnInit(): void {
  }


}
