import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todos!: ToDo[];
  inputToDo: string = '';
  constructor(){

  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggledToDo(id: number){
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteToDo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addToDo(){
    this.todos.push({
      content: this.inputToDo,
      completed: false
    })

    this.inputToDo = '';
  }
}
