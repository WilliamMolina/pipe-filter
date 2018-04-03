import { Component } from '@angular/core';
import {FilterPipe} from './filter-pipe.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  values;
  queryString:String;
  stringValues;
  constructor(){
    this.title='Test filter';
    this.values = [];
    this.stringValues = [];
     let stops = [
      {
        name:"Stop 1",
        id : 1,
        near : [
          "Exito",
          "Justo y bueno"
        ]
      },
      {
        name:"Stop 2",
        id : 2,
        near : [
          "Suramericana",
          "Metro",
          "Exito"
        ]
      },
      {
        name:"Stop 3",
        id : 2,
        near : [
          "Los colores",
          "Il forno"
        ]
      }
    ];
    for(let i=0;i<100;i++){
      this.values.push.apply(this.values,stops);
    }
    for(let i=0;i<this.values.length;i++){
      this.stringValues.push(JSON.stringify(this.values[i]).toLowerCase());
    }
  }
}
