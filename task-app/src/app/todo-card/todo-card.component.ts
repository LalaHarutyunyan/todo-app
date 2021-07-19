import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>description: {{information about description}}</h2>
    <h3> dueDate: {{date}} </h3>
    `
})
export class TodoCardComponent implements OnInit {
  title: string;
  description: string;
  dueDate: string;
  constructor() { 
    this.title = "to do card";
    this.description = "This is my to do list for tomorrow!";
    this.dueDate = "20.07.2021 at midnight";
  }

  ngOnInit(): void {
  }

}
