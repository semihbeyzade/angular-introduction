import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* users: string[] = []; */
  users: {name:string, age:number}[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name: 'Semih',
        age: 28
      },
      {
        name: 'Sevde',
        age: 27
      },
      {
        name: 'Misha',
        age: 2
      }
    ]
  }

}
