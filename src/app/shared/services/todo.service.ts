import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((n: { id: string; }) => n.id === id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedFields)
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((n: { id: string; }) => n.id === id)
    if(todoIndex === -1) return
    this.todos.splice(todoIndex, 1)
  }

}
